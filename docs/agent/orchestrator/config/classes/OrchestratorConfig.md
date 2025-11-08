---
title: Orchestrator Config
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
[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [agent/orchestrator/config](../README.md) / OrchestratorConfig

# Class: OrchestratorConfig

Defined in: [src/agent/orchestrator/config.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L19)

Orchestrator-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new OrchestratorConfig**(`config?`): `OrchestratorConfig`

Defined in: [src/agent/orchestrator/config.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L22)

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

#### Returns

`OrchestratorConfig`

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L516)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:478](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L478)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:523](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L523)

Get configuration schema ID

#### Returns

`string`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getEscalationConfig()

> **getEscalationConfig**(): [`EscalationConfig`](../../../../types/agentConfig/interfaces/EscalationConfig.md)

Defined in: [src/agent/orchestrator/config.ts:89](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L89)

Get escalation configuration

#### Returns

[`EscalationConfig`](../../../../types/agentConfig/interfaces/EscalationConfig.md)

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:502](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L502)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getFallbackAgent()

> **getFallbackAgent**(): `string`

Defined in: [src/agent/orchestrator/config.ts:133](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L133)

Get fallback agent name

#### Returns

`string`

***

### getIntentAgentMap()

> **getIntentAgentMap**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/orchestrator/config.ts:102](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L102)

Get intent to agent mapping

#### Returns

`Record`\<`string`, `string`\>

***

### getIntentConfig()

> **getIntentConfig**(`intent`): [`IntentConfig`](../../../../types/agentConfig/interfaces/IntentConfig.md) \| `undefined`

Defined in: [src/agent/orchestrator/config.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L47)

Get intent configuration by name

#### Parameters

##### intent

`string`

#### Returns

[`IntentConfig`](../../../../types/agentConfig/interfaces/IntentConfig.md) \| `undefined`

***

### getIntents()

> **getIntents**(): `string`[]

Defined in: [src/agent/orchestrator/config.ts:40](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L40)

Get supported intents

#### Returns

`string`[]

***

### getMessages()

> **getMessages**(): `object`

Defined in: [src/agent/orchestrator/config.ts:143](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L143)

Get configurable user-facing messages

#### Returns

`object`

##### errorOccurred?

> `optional` **errorOccurred**: `string`

##### guidance?

> `optional` **guidance**: `object`

###### guidance.clarificationPrompt?

> `optional` **clarificationPrompt**: `string`

###### guidance.insightOverview?

> `optional` **insightOverview**: `string`

###### guidance.insightPlan?

> `optional` **insightPlan**: `string`[]

###### guidance.insightRecommendations?

> `optional` **insightRecommendations**: `string`

###### guidance.metadata?

> `optional` **metadata**: `string`

###### guidance.recordsConnections?

> `optional` **recordsConnections**: `string`

###### guidance.recordsFiltering?

> `optional` **recordsFiltering**: `string`

##### missingSignalsHint?

> `optional` **missingSignalsHint**: `string`[]

##### needMoreContext?

> `optional` **needMoreContext**: `string`

##### noIntentDetected?

> `optional` **noIntentDetected**: `string`

##### questionTooVague?

> `optional` **questionTooVague**: `string`

##### summaries?

> `optional` **summaries**: `object`

###### summaries.clarification?

> `optional` **clarification**: `string`

###### summaries.defaultTopic?

> `optional` **defaultTopic**: `string`

###### summaries.insight?

> `optional` **insight**: `string`

###### summaries.metadata?

> `optional` **metadata**: `string`

###### summaries.records?

> `optional` **records**: `string`

***

### getMinimumKeywordLength()

> **getMinimumKeywordLength**(): `number`

Defined in: [src/agent/orchestrator/config.ts:82](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L82)

Get minimum keyword length

#### Returns

`number`

***

### getScoringWeights()

> **getScoringWeights**(): `object`

Defined in: [src/agent/orchestrator/config.ts:69](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L69)

Get scoring weights

#### Returns

`object`

##### focusMatch

> **focusMatch**: `number`

##### promptStarterMatch

> **promptStarterMatch**: `number`

##### signalMatch

> **signalMatch**: `number`

***

### getStopWords()

> **getStopWords**(): `Set`\<`string`\>

Defined in: [src/agent/orchestrator/config.ts:61](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L61)

Get stop words for text processing

#### Returns

`Set`\<`string`\>

***

### getTargetAgent()

> **getTargetAgent**(`intent`): `string` \| `undefined`

Defined in: [src/agent/orchestrator/config.ts:54](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L54)

Get target agent for an intent

#### Parameters

##### intent

`string`

#### Returns

`string` \| `undefined`

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:509](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L509)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### getVaguePhrases()

> **getVaguePhrases**(): `string`[]

Defined in: [src/agent/orchestrator/config.ts:116](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L116)

Get vague phrases that should trigger clarification

#### Returns

`string`[]

***

### createDefault()

> `static` **createDefault**(): `OrchestratorConfig`

Defined in: [src/agent/orchestrator/config.ts:204](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L204)

Create orchestrator configuration with defaults (uses TypeScript config)

#### Returns

`OrchestratorConfig`

***

### loadFromFile()

> `static` **loadFromFile**(`configPath?`): `Promise`\<`OrchestratorConfig`\>

Defined in: [src/agent/orchestrator/config.ts:177](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/config.ts#L177)

Load configuration from TypeScript config (preferred) or JSON fallback

#### Parameters

##### configPath?

`string`

#### Returns

`Promise`\<`OrchestratorConfig`\>


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
