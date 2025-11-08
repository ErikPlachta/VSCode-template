[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/databaseAgent](../README.md) / DatabaseAgent

# Class: DatabaseAgent

Defined in: [src/agent/databaseAgent/index.ts:89](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L89)

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

Defined in: [src/agent/databaseAgent/index.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L104)

Creates a new DatabaseAgent instance.

#### Parameters

##### dataSources

[`DataSource`](../interfaces/DataSource.md)[]

dataSources parameter.

##### cacheDirectory

`Promise`\<`string`\>

cacheDirectory parameter.

##### \_config?

`Partial`\<[`DatabaseAgentConfig`](../config/classes/DatabaseAgentConfig.md)\>

_config parameter.

#### Returns

`DatabaseAgent`

- TODO: describe return value.

## Methods

### clearCache()

> **clearCache**(`categoryId`): `Promise`\<`void`\>

Defined in: [src/agent/databaseAgent/index.ts:219](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L219)

Clears cached results for a specific category.

#### Parameters

##### categoryId

`string`

categoryId parameter.

#### Returns

`Promise`\<`void`\>

- TODO: describe return value.

***

### executeQuery()

> **executeQuery**(`categoryId`, `criteria`, `options`): `Promise`\<[`CategoryRecord`](../interfaces/CategoryRecord.md)[]\>

Defined in: [src/agent/databaseAgent/index.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L125)

Executes a generic query against any data source.

#### Parameters

##### categoryId

`string`

categoryId parameter.

##### criteria

`Record`\<`string`, `unknown`\> = `{}`

criteria parameter.

##### options

[`QueryOptions`](../interfaces/QueryOptions.md) = `{}`

options parameter.

#### Returns

`Promise`\<[`CategoryRecord`](../interfaces/CategoryRecord.md)[]\>

- TODO: describe return value.

#### Throws

- May throw an error.

***

### getAvailableCategories()

> **getAvailableCategories**(): `string`[]

Defined in: [src/agent/databaseAgent/index.ts:199](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L199)

Gets available data sources.

#### Returns

`string`[]

- TODO: describe return value.

***

### getCategoryInfo()

> **getCategoryInfo**(`categoryId`): [`DataSource`](../interfaces/DataSource.md) \| `undefined`

Defined in: [src/agent/databaseAgent/index.ts:209](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/databaseAgent/index.ts#L209)

Gets metadata for a specific data source.

#### Parameters

##### categoryId

`string`

categoryId parameter.

#### Returns

[`DataSource`](../interfaces/DataSource.md) \| `undefined`

- TODO: describe return value.
