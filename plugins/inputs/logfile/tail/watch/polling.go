// Copyright (c) 2015 HPE Software Inc. All rights reserved.
// Copyright (c) 2013 ActiveState Software Inc. All rights reserved.

package watch

import (
	"errors"
	"log"
	"os"
	"runtime"
	"time"

	"gopkg.in/tomb.v1"
)

var (
	PollDuration time.Duration
	PollMaxWait  time.Duration
)

// PollingFileWatcher polls the file for changes.
type PollingFileWatcher struct {
	Filename string
	Size     int64
}

func NewPollingFileWatcher(filename string) *PollingFileWatcher {
	fw := &PollingFileWatcher{filename, 0}
	return fw
}

func (fw *PollingFileWatcher) BlockUntilExists(t *tomb.Tomb) error {
	timer := time.NewTimer(PollDuration)
	deadline := time.NewTimer(PollMaxWait)
	defer timer.Stop()
	defer deadline.Stop()

	for {
		if _, err := os.Stat(fw.Filename); err == nil {
			return nil
		} else if !os.IsNotExist(err) {
			return err
		}

		timer.Reset(PollDuration)
		select {
		case <-timer.C:
			continue
		case <-deadline.C:
			return errors.New("file does not exist and reached the polling limit")
		case <-t.Dying():
			return tomb.ErrDying
		}
	}
}

func (fw *PollingFileWatcher) ChangeEvents(t *tomb.Tomb, pos int64) (*FileChanges, error) {
	origFi, err := os.Stat(fw.Filename)
	if err != nil {
		return nil, err
	}

	changes := NewFileChanges()
	var prevModTime time.Time

	// XXX: use tomb.Tomb to cleanly manage these goroutines. replace
	// the fatal (below) with tomb's Kill.

	fw.Size = pos

	go func() {
		prevSize := fw.Size
		for {
			select {
			case <-t.Dying():
				return
			default:
			}

			time.Sleep(PollDuration)
			fi, err := os.Stat(fw.Filename)
			if err != nil {
				// Windows cannot delete a file if a handle is still open (tail keeps one open)
				// so it gives access denied to anything trying to read it until all handles are released.
				if os.IsNotExist(err) || (runtime.GOOS == "windows" && os.IsPermission(err)) {
					// File does not exist (has been deleted).
					changes.NotifyDeleted()
					return
				}

				log.Printf("E! [logfile] Failed to stat file %v: %v", fw.Filename, err)
			}

			// File got moved/renamed?
			if !os.SameFile(origFi, fi) {
				changes.NotifyDeleted()
				return
			}

			// File got truncated?
			fw.Size = fi.Size()
			if prevSize > 0 && prevSize > fw.Size {
				changes.NotifyTruncated()
				prevSize = fw.Size
				continue
			}
			// File got bigger?
			if prevSize > 0 && prevSize < fw.Size {
				changes.NotifyModified()
				prevSize = fw.Size
				continue
			}
			prevSize = fw.Size

			// File was appended to (changed)?
			modTime := fi.ModTime()
			if modTime != prevModTime {
				prevModTime = modTime
				changes.NotifyModified()
			}
		}
	}()

	return changes, nil
}

func init() {
	PollDuration = 250 * time.Millisecond
	PollMaxWait = 5 * time.Minute
}
