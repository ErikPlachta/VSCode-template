[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/databaseAgent](../modules/agents_databaseAgent.md) / DatabaseAgent

# Class: DatabaseAgent

[agents/databaseAgent](../modules/agents_databaseAgent.md).DatabaseAgent

Agent offering database-style access patterns.

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) |
| `cacheDirPromise?` | `Promise`\<`string`\> |

#### Returns

[`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md)

#### Defined in

[src/agents/databaseAgent.ts:101](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L101)

## Methods

### queryApplications

▸ **queryApplications**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve applications using ownership or criticality filters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria` | [`ApplicationQuery`](../interfaces/agents_databaseAgent.ApplicationQuery.md) |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

#### Defined in

[src/agents/databaseAgent.ts:116](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L116)

___

### queryDepartments

▸ **queryDepartments**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve departments by parent, applications, or policies.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria` | [`DepartmentQuery`](../interfaces/agents_databaseAgent.DepartmentQuery.md) |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

#### Defined in

[src/agents/databaseAgent.ts:111](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L111)

___

### queryPeople

▸ **queryPeople**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Search for people using the structured directory dataset.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria` | [`PeopleQuery`](../interfaces/agents_databaseAgent.PeopleQuery.md) |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

#### Defined in

[src/agents/databaseAgent.ts:106](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L106)

___

### queryPolicies

▸ **queryPolicies**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve policies by department, category, or application coverage.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria` | [`PolicyQuery`](../interfaces/agents_databaseAgent.PolicyQuery.md) |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

#### Defined in

[src/agents/databaseAgent.ts:121](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L121)

___

### queryResources

▸ **queryResources**(`criteria?`, `options?`): `Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

Retrieve knowledge resources filtered by relationships.

#### Parameters

| Name | Type |
| :------ | :------ |
| `criteria` | [`ResourceQuery`](../interfaces/agents_databaseAgent.ResourceQuery.md) |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]\>

#### Defined in

[src/agents/databaseAgent.ts:126](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L126)

___

### runSavedQuery

▸ **runSavedQuery**(`topicOrId`, `queryName`, `criteria?`, `options?`): `Promise`\<[`SavedQueryResult`](../interfaces/agents_databaseAgent.SavedQueryResult.md)\>

Execute a saved query blueprint from the relevant-data repository and
return local matches that satisfy the provided criteria.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |
| `queryName` | `string` |
| `criteria` | `Record`\<`string`, `unknown`\> |
| `options?` | [`QueryOptions`](../interfaces/agents_databaseAgent.QueryOptions.md) |

#### Returns

`Promise`\<[`SavedQueryResult`](../interfaces/agents_databaseAgent.SavedQueryResult.md)\>

#### Defined in

[src/agents/databaseAgent.ts:134](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/databaseAgent.ts#L134)
