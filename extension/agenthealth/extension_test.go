// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT

package agenthealth

import (
	"context"
	"testing"

	"github.com/stretchr/testify/assert"
	"go.opentelemetry.io/collector/component/componenttest"
	"go.uber.org/zap"
)

func TestExtension(t *testing.T) {
	ctx := context.Background()
	cfg := &Config{IsUsageDataEnabled: true}
	extension := NewAgentHealth(zap.NewNop(), cfg)
	assert.NotNil(t, extension)
	assert.NoError(t, extension.Start(ctx, componenttest.NewNopHost()))
	requestHandlers, responseHandlers := extension.Handlers()
	// user agent, client stats, stats
	assert.Len(t, requestHandlers, 4)
	// client stats
	assert.Len(t, responseHandlers, 2)
	cfg.IsUsageDataEnabled = false
	requestHandlers, responseHandlers = extension.Handlers()
	// user agent
	assert.Len(t, requestHandlers, 1)
	assert.Len(t, responseHandlers, 0)
	assert.NoError(t, extension.Shutdown(ctx))
}
