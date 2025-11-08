---
title: Performance Monitor
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / PerformanceMonitor

# Class: PerformanceMonitor

Defined in: [src/shared/analyticsIntegration.ts:144](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L144)

Performance monitoring utility for critical operations.

## Constructors

### Constructor

> **new PerformanceMonitor**(): `PerformanceMonitor`

Defined in: [src/shared/analyticsIntegration.ts:150](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L150)

Creates a new performance monitor instance.

#### Returns

`PerformanceMonitor`

## Methods

### monitorDatabaseQuery()

> **monitorDatabaseQuery**\<`T`\>(`queryType`, `query`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:162](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L162)

Monitors the performance of a database query operation.

#### Type Parameters

##### T

`T`

#### Parameters

##### queryType

`string`

##### query

() => `Promise`\<`T`\>

##### options

###### category?

`string`

###### filters?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`T`\>

- Promise resolving to query result.

***

### monitorDataProcessing()

> **monitorDataProcessing**\<`T`\>(`operationType`, `processor`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:188](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L188)

Monitors data processing operations.

#### Type Parameters

##### T

`T`

#### Parameters

##### operationType

`string`

##### processor

() => `Promise`\<`T`\>

##### options

###### category?

`string`

###### inputSize?

`number`

#### Returns

`Promise`\<`T`\>

- Promise resolving to processing result.

***

### monitorOrchestration()

> **monitorOrchestration**\<`T`\>(`decision`, `orchestration`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:219](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L219)

Monitors orchestration decisions and routing.

#### Type Parameters

##### T

`T`

#### Parameters

##### decision

`string`

##### orchestration

() => `Promise`\<`T`\>

##### options

###### agentCount?

`number`

###### intent?

`string`

#### Returns

`Promise`\<`T`\>

- Promise resolving to orchestration result.


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
