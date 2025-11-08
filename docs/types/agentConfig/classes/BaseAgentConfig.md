---
title: Base Agent Config
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

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/types/agentConfig.ts:468](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L468)

Base class for agent configuration management

## Extended by

- [`ClarificationAgentConfig`](../../../agent/clarificationAgent/config/classes/ClarificationAgentConfig.md)
- [`DataAgentConfig`](../../../agent/dataAgent/config/classes/DataAgentConfig.md)
- [`DatabaseAgentConfig`](../../../agent/databaseAgent/config/classes/DatabaseAgentConfig.md)
- [`OrchestratorConfig`](../../../agent/orchestrator/config/classes/OrchestratorConfig.md)
- [`RelevantDataManagerAgentConfig`](../../../agent/relevantDataManagerAgent/config/classes/RelevantDataManagerAgentConfig.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/types/agentConfig.ts:471](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L471)

#### Parameters

##### config

[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)

#### Returns

`BaseAgentConfig`

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L516)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:478](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L478)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:523](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L523)

Get configuration schema ID

#### Returns

`string`

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:502](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L502)

Get execution configuration

#### Returns

[`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:509](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L509)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`


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
