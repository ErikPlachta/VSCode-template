[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / PerformanceMonitor

# Class: PerformanceMonitor

Defined in: [src/shared/analyticsIntegration.ts:158](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/analyticsIntegration.ts#L158)

Performance monitoring utility for critical operations.

## Constructors

### Constructor

> **new PerformanceMonitor**(): `PerformanceMonitor`

Defined in: [src/shared/analyticsIntegration.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/analyticsIntegration.ts#L166)

Creates a new performance monitor instance.

#### Returns

`PerformanceMonitor`

- TODO: describe return value.

## Methods

### monitorDatabaseQuery()

> **monitorDatabaseQuery**\<`T`\>(`queryType`, `query`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:185](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/analyticsIntegration.ts#L185)

Monitors the performance of a database query operation.

#### Type Parameters

##### T

`T`

#### Parameters

##### queryType

`string`

queryType parameter.

##### query

() => `Promise`\<`T`\>

query parameter.

##### options

options parameter.

###### category?

`string`

###### filters?

`Record`\<`string`, `any`\>

#### Returns

`Promise`\<`T`\>

- TODO: describe return value.

***

### monitorDataProcessing()

> **monitorDataProcessing**\<`T`\>(`operationType`, `processor`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:218](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/analyticsIntegration.ts#L218)

Monitors data processing operations.

#### Type Parameters

##### T

`T`

#### Parameters

##### operationType

`string`

operationType parameter.

##### processor

() => `Promise`\<`T`\>

processor parameter.

##### options

options parameter.

###### category?

`string`

###### inputSize?

`number`

#### Returns

`Promise`\<`T`\>

- TODO: describe return value.

***

### monitorOrchestration()

> **monitorOrchestration**\<`T`\>(`decision`, `orchestration`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:256](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/analyticsIntegration.ts#L256)

Monitors orchestration decisions and routing.

#### Type Parameters

##### T

`T`

#### Parameters

##### decision

`string`

decision parameter.

##### orchestration

() => `Promise`\<`T`\>

orchestration parameter.

##### options

options parameter.

###### agentCount?

`number`

###### intent?

`string`

#### Returns

`Promise`\<`T`\>

- TODO: describe return value.
