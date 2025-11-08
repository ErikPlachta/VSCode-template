---
title: Database Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/databaseAgent](../README.md) / DatabaseAgent

# Class: DatabaseAgent

Defined in: [src/agent/databaseAgent/index.ts:77](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L77)

Generic database agent that can query any structured data without hard-coded assumptions.

The agent is completely data-agnostic and receives all necessary context from the orchestrator:
- Data sources with their records and schemas
- Field aliases for flexible querying
- Query criteria as generic key-value pairs

## Example

```typescript
const dataSources = [
  {
    id: "employees",
    name: "Employee Directory",
    records: employeeData,
    fieldAliases: { "skill": "skills", "dept": "departmentId" }
  }
];

const agent = new DatabaseAgent(dataSources, cacheDirectory);
const results = await agent.executeQuery("employees", { skill: "javascript" });
```

## Constructors

### Constructor

> **new DatabaseAgent**(`dataSources`, `cacheDirectory`, `_config?`): `DatabaseAgent`

Defined in: [src/agent/databaseAgent/index.ts:91](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L91)

Creates a new DatabaseAgent instance.

#### Parameters

##### dataSources

[`DataSource`](../interfaces/DataSource.md)[]

Array of data sources to query against

##### cacheDirectory

`Promise`\<`string`\>

Promise resolving to cache directory path

##### \_config?

`Partial`\<[`DatabaseAgentConfig`](../config/classes/DatabaseAgentConfig.md)\>

Optional configuration for the agent (currently ignored; config driven by typed defaults)

#### Returns

`DatabaseAgent`

## Methods

### clearCache()

> **clearCache**(`categoryId`): `Promise`\<`void`\>

Defined in: [src/agent/databaseAgent/index.ts:214](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L214)

Clears cached results for a specific category.

#### Parameters

##### categoryId

`string`

Category to clear cache for

#### Returns

`Promise`\<`void`\>

- Resolves when cache clear telemetry completes

***

### executeQuery()

> **executeQuery**(`categoryId`, `criteria`, `options`): `Promise`\<[`CategoryRecord`](../interfaces/CategoryRecord.md)[]\>

Defined in: [src/agent/databaseAgent/index.ts:120](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L120)

Executes a generic query against any data source.

#### Parameters

##### categoryId

`string`

Identifier of the data source to query

##### criteria

`Record`\<`string`, `unknown`\> = `{}`

Query criteria as key-value pairs

##### options

[`QueryOptions`](../interfaces/QueryOptions.md) = `{}`

Optional query configuration

#### Returns

`Promise`\<[`CategoryRecord`](../interfaces/CategoryRecord.md)[]\>

- Promise resolving to matching records

#### Example

```typescript
// Query any data source with any criteria
const results = await agent.executeQuery("products", {
  category: "electronics",
  price: { $lt: 1000 }
});
```

***

### getAvailableCategories()

> **getAvailableCategories**(): `string`[]

Defined in: [src/agent/databaseAgent/index.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L194)

Gets available data sources.

#### Returns

`string`[]

- Array of category IDs that can be queried

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`DataSource`](../interfaces/DataSource.md) \| `undefined`

Defined in: [src/agent/databaseAgent/index.ts:204](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L204)

Gets metadata for a specific data source.

#### Parameters

##### categoryId

`string`

Category to get info for

#### Returns

[`DataSource`](../interfaces/DataSource.md) \| `undefined`

- Data source metadata or undefined if not found


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
