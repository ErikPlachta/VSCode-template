---
title: Orchestrator
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

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/orchestrator](../README.md) / Orchestrator

# Class: Orchestrator

Defined in: [src/agent/orchestrator/index.ts:41](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L41)

Configuration-driven orchestrator that routes questions to appropriate agents

## Constructors

### Constructor

> **new Orchestrator**(`config?`): `Orchestrator`

Defined in: [src/agent/orchestrator/index.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L50)

#### Parameters

##### config?

[`OrchestratorConfig`](../config/classes/OrchestratorConfig.md)

#### Returns

`Orchestrator`

## Methods

### classify()

> **classify**(`questionOrInput`, `context?`): [`OrchestratorClassification`](../interfaces/OrchestratorClassification.md)

Defined in: [src/agent/orchestrator/index.ts:123](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L123)

Classify intent using configuration-driven approach.
Supports both new signature (single input object) and legacy signature (question + context).

#### Parameters

##### questionOrInput

`string` | [`OrchestratorInput`](../interfaces/OrchestratorInput.md)

##### context?

###### topic?

`string`

#### Returns

[`OrchestratorClassification`](../interfaces/OrchestratorClassification.md)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/agent/orchestrator/index.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L80)

Get public configuration

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

***

### getCurrentConfig()

> **getCurrentConfig**(): `object`

Defined in: [src/agent/orchestrator/index.ts:390](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L390)

Get current configuration

#### Returns

`object`

##### intentAgentMap

> **intentAgentMap**: `Record`\<`string`, `string`\>

##### scoringWeights

> **scoringWeights**: `any`

##### stopWordsCount

> **stopWordsCount**: `number`

##### supportedIntents

> **supportedIntents**: `string`[]

***

### getSupportedIntents()

> **getSupportedIntents**(): `string`[]

Defined in: [src/agent/orchestrator/index.ts:87](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L87)

Get supported intents

#### Returns

`string`[]

***

### handle()

> **handle**(`input`): `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

Defined in: [src/agent/orchestrator/index.ts:318](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L318)

Handle user requests by classifying intent and routing to appropriate agents.
This is the main entry point used by the VS Code extension.

#### Parameters

##### input

[`OrchestratorInput`](../interfaces/OrchestratorInput.md)

User request with question and optional context

#### Returns

`Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

- Response with routing decision and agent output

***

### route()

> **route**(`input`): `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

Defined in: [src/agent/orchestrator/index.ts:221](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L221)

Route request using configuration (simplified for now - delegates to original implementation)

#### Parameters

##### input

[`OrchestratorInput`](../interfaces/OrchestratorInput.md)

#### Returns

`Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

***

### createFromConfig()

> `static` **createFromConfig**(`configPath?`): `Promise`\<`Orchestrator`\>

Defined in: [src/agent/orchestrator/index.ts:63](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/orchestrator/index.ts#L63)

Create orchestrator instance with configuration loaded from file

#### Parameters

##### configPath?

`string`

#### Returns

`Promise`\<`Orchestrator`\>


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
