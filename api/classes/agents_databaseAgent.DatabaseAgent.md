[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/databaseAgent](../modules/agents_databaseAgent.md) / DatabaseAgent

# Class: DatabaseAgent

[agents/databaseAgent](../modules/agents_databaseAgent.md).DatabaseAgent

Agent offering database-style access patterns.

**`Example`**

```ts
const database = new DatabaseAgent(new RelevantDataManagerAgent());
const people = await database.queryPeople({ departmentId: "dept-analytics" });
```

## Table of contents

### Constructors

- [constructor](agents_databaseAgent.DatabaseAgent.md#constructor)

### Methods

- [queryApplications](agents_databaseAgent.DatabaseAgent.md#queryapplications)
- [queryDepartments](agents_databaseAgent.DatabaseAgent.md#querydepartments)
- [queryPeople](agents_databaseAgent.DatabaseAgent.md#querypeople)
- [queryPolicies](agents_databaseAgent.DatabaseAgent.md#querypolicies)
- [queryResources](agents_databaseAgent.DatabaseAgent.md#queryresources)
- [runSavedQuery](agents_databaseAgent.DatabaseAgent.md#runsavedquery)

## Constructors

### constructor

• **new DatabaseAgent**(`manager`, `cacheDirPromise?`): [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

Create a [DatabaseAgent](agents_databaseAgent.DatabaseAgent.md) instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `manager` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) | Data manager providing dataset access. |
| `cacheDirPromise?` | `Promise`\<`string`\> | Optional override for the cache directory resolution. |

#### Returns

[`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

#### Defined in

[src/agents/databaseAgent.ts:165](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L165)

## Methods

### queryApplications

▸ **queryApplications**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve applications using ownership or criticality filters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria?` | [`ApplicationQuery`](../interfaces/agents_databaseAgent.ApplicationQuery.md) | Filter parameters. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Query execution options. |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Matching application records.

#### Defined in

[src/agents/databaseAgent.ts:198](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L198)

___

### queryDepartments

▸ **queryDepartments**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve departments by parent, applications, or policies.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria?` | [`DepartmentQuery`](../interfaces/agents_databaseAgent.DepartmentQuery.md) | Filter parameters. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Query execution options. |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Matching department records.

#### Defined in

[src/agents/databaseAgent.ts:187](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L187)

___

### queryPeople

▸ **queryPeople**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Search for people using the structured directory dataset.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria?` | [`PeopleQuery`](../interfaces/agents_databaseAgent.PeopleQuery.md) | Filter parameters. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Query execution options. |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Matching people records.

#### Defined in

[src/agents/databaseAgent.ts:176](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L176)

___

### queryPolicies

▸ **queryPolicies**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve policies by department, category, or application coverage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria?` | [`PolicyQuery`](../interfaces/agents_databaseAgent.PolicyQuery.md) | Filter parameters. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Query execution options. |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Matching policy records.

#### Defined in

[src/agents/databaseAgent.ts:209](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L209)

___

### queryResources

▸ **queryResources**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve knowledge resources filtered by relationships.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `criteria?` | [`ResourceQuery`](../interfaces/agents_databaseAgent.ResourceQuery.md) | Filter parameters. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Query execution options. |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Matching resource records.

#### Defined in

[src/agents/databaseAgent.ts:220](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L220)

___

### runSavedQuery

▸ **runSavedQuery**(`topicOrId`, `queryName`, `criteria?`, `options?`): `Promise`\<[`SavedQueryResult`](../interfaces/agents_databaseAgent.SavedQueryResult.md)\>

Execute a saved query blueprint from the relevant-data repository and
return local matches that satisfy the provided criteria.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category name or identifier that owns the blueprint. |
| `queryName` | `string` | Name of the saved query to execute. |
| `criteria?` | `Record`\<`string`, `unknown`\> | Optional filters applied to the query. |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) | Additional execution options, including caching overrides. |

#### Returns

`Promise`\<[`SavedQueryResult`](../interfaces/agents_databaseAgent.SavedQueryResult.md)\>

Blueprint and results pair.

**`Throws`**

When the query cannot be found for the given category.

**`Example`**

```ts
const saved = await database.runSavedQuery("departments", "List departments");
console.log(saved.results.length);
```

#### Defined in

[src/agents/databaseAgent.ts:240](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/databaseAgent.ts#L240)
