---
title: Agent Usage Analytics
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageAnalytics

# Class: AgentUsageAnalytics

Defined in: [src/shared/agentAnalytics.ts:118](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L118)

Agent usage analytics collector and processor.

## Constructors

### Constructor

> **new AgentUsageAnalytics**(`config`): `AgentUsageAnalytics`

Defined in: [src/shared/agentAnalytics.ts:128](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L128)

Creates a new analytics collector instance.

#### Parameters

##### config

[`AnalyticsConfig`](../interfaces/AnalyticsConfig.md)

#### Returns

`AgentUsageAnalytics`

## Methods

### clearData()

> **clearData**(): `void`

Defined in: [src/shared/agentAnalytics.ts:364](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L364)

Clears all collected analytics data.

#### Returns

`void`

-

***

### exportData()

> **exportData**(`since?`): [`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)[]

Defined in: [src/shared/agentAnalytics.ts:356](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L356)

Exports analytics data for external analysis.

#### Parameters

##### since?

`Date`

#### Returns

[`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)[]

- Array of usage events.

***

### generateSummary()

> **generateSummary**(`since?`): [`UsageAnalyticsSummary`](../interfaces/UsageAnalyticsSummary.md)

Defined in: [src/shared/agentAnalytics.ts:285](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L285)

Generates comprehensive usage analytics summary.

#### Parameters

##### since?

`Date`

#### Returns

[`UsageAnalyticsSummary`](../interfaces/UsageAnalyticsSummary.md)

- Comprehensive analytics summary.

***

### getAgentStats()

> **getAgentStats**(`agentName`, `since?`): [`AgentUsageStats`](../interfaces/AgentUsageStats.md) \| `null`

Defined in: [src/shared/agentAnalytics.ts:228](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L228)

Generates usage statistics for a specific agent.

#### Parameters

##### agentName

`string`

##### since?

`Date`

#### Returns

[`AgentUsageStats`](../interfaces/AgentUsageStats.md) \| `null`

- Agent statistics or null if no data found.

***

### recordEvent()

> **recordEvent**(`event`): `void`

Defined in: [src/shared/agentAnalytics.ts:137](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L137)

Records an agent usage event.

#### Parameters

##### event

`Partial`\<[`AgentUsageEvent`](../interfaces/AgentUsageEvent.md)\>

#### Returns

`void`

-

***

### trackExecution()

> **trackExecution**\<`T`\>(`agentName`, `method`, `execution`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/agentAnalytics.ts:178](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L178)

Tracks the execution of an agent method with automatic timing.

#### Type Parameters

##### T

`T`

#### Parameters

##### agentName

`string`

##### method

`string`

##### execution

() => `Promise`\<`T`\>

##### options

###### metadata?

`Record`\<`string`, `any`\>

###### userId?

`string`

#### Returns

`Promise`\<`T`\>

- Promise resolving to the execution result.


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
