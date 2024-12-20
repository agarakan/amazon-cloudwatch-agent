// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT

package applicationsignals

import (
	"fmt"

	"go.opentelemetry.io/collector/component"
	"go.opentelemetry.io/collector/confmap"
	"go.opentelemetry.io/collector/pipeline"

	"github.com/aws/amazon-cloudwatch-agent/translator/context"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/common"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/exporter/awsemf"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/exporter/awsxray"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/exporter/debug"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/extension/agenthealth"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/extension/awsproxy"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/processor/awsapplicationsignals"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/processor/awsentity"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/processor/metricstransformprocessor"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/processor/resourcedetection"
	"github.com/aws/amazon-cloudwatch-agent/translator/translate/otel/receiver/otlp"
)

type translator struct {
	signal pipeline.Signal
}

var _ common.PipelineTranslator = (*translator)(nil)

func NewTranslator(signal pipeline.Signal) common.PipelineTranslator {
	return &translator{
		signal,
	}
}

func (t *translator) ID() pipeline.ID {
	return pipeline.NewIDWithName(t.signal, common.AppSignals)
}

func (t *translator) Translate(conf *confmap.Conf) (*common.ComponentTranslators, error) {
	configKey, ok := common.AppSignalsConfigKeys[t.signal]
	if !ok {
		return nil, fmt.Errorf("no config key defined for signal: %s", t.signal)
	}
	if conf == nil || (!conf.IsSet(configKey[0]) && !conf.IsSet(configKey[1])) {
		return nil, &common.MissingKeyError{ID: t.ID(), JsonKey: configKey[0]}
	}

	translators := &common.ComponentTranslators{
		Receivers:  common.NewTranslatorMap(otlp.NewTranslator(common.WithName(common.AppSignals), otlp.WithSignal(t.signal))),
		Processors: common.NewTranslatorMap[component.Config, component.ID](),
		Exporters:  common.NewTranslatorMap[component.Config, component.ID](),
		Extensions: common.NewTranslatorMap[component.Config, component.ID](),
	}

	if t.signal == pipeline.SignalMetrics {
		translators.Processors.Set(metricstransformprocessor.NewTranslatorWithName(common.AppSignals))
	}

	mode := context.CurrentContext().KubernetesMode()
	translators.Processors.Set(resourcedetection.NewTranslator(resourcedetection.WithSignal(t.signal)))
	translators.Processors.Set(awsapplicationsignals.NewTranslator(awsapplicationsignals.WithSignal(t.signal)))

	if t.signal == pipeline.SignalMetrics && mode != "" {
		translators.Processors.Set(awsentity.NewTranslatorWithEntityType(awsentity.Service, common.AppSignals, false))
	}

	if enabled, _ := common.GetBool(conf, common.AgentDebugConfigKey); enabled {
		translators.Exporters.Set(debug.NewTranslator(common.WithName(common.AppSignals)))
	}

	if t.signal == pipeline.SignalTraces {
		translators.Exporters.Set(awsxray.NewTranslatorWithName(common.AppSignals))
		translators.Extensions.Set(awsproxy.NewTranslatorWithName(common.AppSignals))
		translators.Extensions.Set(agenthealth.NewTranslator(pipeline.SignalTraces, []string{agenthealth.OperationPutTraceSegments}))
	} else {
		translators.Exporters.Set(awsemf.NewTranslatorWithName(common.AppSignals))
		translators.Extensions.Set(agenthealth.NewTranslator(pipeline.SignalLogs, []string{agenthealth.OperationPutLogEvents}))
	}
	return translators, nil
}
