[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / PerformanceMonitor

# Class: PerformanceMonitor

Defined in: [src/shared/analyticsIntegration.ts:165](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/analyticsIntegration.ts#L165)

Performance monitoring utility for critical operations.

## Constructors

### Constructor

> **new PerformanceMonitor**(): `PerformanceMonitor`

Defined in: [src/shared/analyticsIntegration.ts:173](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/analyticsIntegration.ts#L173)

Creates a new performance monitor instance.

#### Returns

`PerformanceMonitor`

- TODO: describe return value.

## Methods

### monitorDatabaseQuery()

> **monitorDatabaseQuery**\<`T`\>(`queryType`, `query`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/analyticsIntegration.ts#L188)

Monitor a database query operation and record performance metadata.

#### Type Parameters

##### T

`T`

#### Parameters

##### queryType

`string`

Logical query classification (e.g. 'findRecords').

##### query

() => `Promise`\<`T`\>

Async function performing the query.

##### options

Optional query context.

###### category?

`string`

Target category identifier.

###### filters?

`Record`\<`string`, `unknown`\>

Applied filter map.

#### Returns

`Promise`\<`T`\>

Result returned by the query function.

***

### monitorDataProcessing()

> **monitorDataProcessing**\<`T`\>(`operationType`, `processor`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/analyticsIntegration.ts#L217)

Monitor a data processing operation and record performance metadata.

#### Type Parameters

##### T

`T`

#### Parameters

##### operationType

`string`

Semantic operation type (e.g. 'aggregate').

##### processor

() => `Promise`\<`T`\>

Async processing function.

##### options

Optional processing context.

###### category?

`string`

Category identifier involved.

###### inputSize?

`number`

Number of items processed.

#### Returns

`Promise`\<`T`\>

Result of the processing function.

***

### monitorOrchestration()

> **monitorOrchestration**\<`T`\>(`decision`, `orchestration`, `options`): `Promise`\<`T`\>

Defined in: [src/shared/analyticsIntegration.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/analyticsIntegration.ts#L251)

Monitor an orchestration decision and record routing metadata.

#### Type Parameters

##### T

`T`

#### Parameters

##### decision

`string`

Decision identifier (e.g. 'routeIntent').

##### orchestration

() => `Promise`\<`T`\>

Async function performing orchestration.

##### options

Optional orchestration context.

###### agentCount?

`number`

Number of candidate agents considered.

###### intent?

`string`

Classified intent name.

#### Returns

`Promise`\<`T`\>

Result returned by the orchestration function.
