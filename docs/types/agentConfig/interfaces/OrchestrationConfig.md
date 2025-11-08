---
title: Orchestration Config
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

---

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / OrchestrationConfig

# Interface: OrchestrationConfig

Defined in: [src/types/agentConfig.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L54)

Orchestration-specific configuration

## Properties

### escalation?

> `optional` **escalation**: [`EscalationConfig`](EscalationConfig.md)

Defined in: [src/types/agentConfig.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L57)

---

### intents?

> `optional` **intents**: `Record`\<`string`, [`IntentConfig`](IntentConfig.md)\>

Defined in: [src/types/agentConfig.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L55)

---

### messages?

> `optional` **messages**: `object`

Defined in: [src/types/agentConfig.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L58)

#### errorOccurred?

> `optional` **errorOccurred**: `string`

#### guidance?

> `optional` **guidance**: `object`

##### guidance.clarificationPrompt?

> `optional` **clarificationPrompt**: `string`

##### guidance.insightOverview?

> `optional` **insightOverview**: `string`

##### guidance.insightPlan?

> `optional` **insightPlan**: `string`[]

##### guidance.insightRecommendations?

> `optional` **insightRecommendations**: `string`

##### guidance.metadata?

> `optional` **metadata**: `string`

##### guidance.recordsConnections?

> `optional` **recordsConnections**: `string`

##### guidance.recordsFiltering?

> `optional` **recordsFiltering**: `string`

#### missingSignalsHint?

> `optional` **missingSignalsHint**: `string`[]

#### needMoreContext?

> `optional` **needMoreContext**: `string`

#### noIntentDetected?

> `optional` **noIntentDetected**: `string`

#### questionTooVague?

> `optional` **questionTooVague**: `string`

#### summaries?

> `optional` **summaries**: `object`

##### summaries.clarification?

> `optional` **clarification**: `string`

##### summaries.defaultTopic?

> `optional` **defaultTopic**: `string`

##### summaries.insight?

> `optional` **insight**: `string`

##### summaries.metadata?

> `optional` **metadata**: `string`

##### summaries.records?

> `optional` **records**: `string`

---

### textProcessing?

> `optional` **textProcessing**: [`TextProcessingConfig`](TextProcessingConfig.md)

Defined in: [src/types/agentConfig.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L56)

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
