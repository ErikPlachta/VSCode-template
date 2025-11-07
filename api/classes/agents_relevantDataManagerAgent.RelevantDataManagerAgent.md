[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / RelevantDataManagerAgent

# Class: RelevantDataManagerAgent

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).RelevantDataManagerAgent

Agent that manages the relevant-data workspace representation.

**`Example`**

```ts
const manager = new RelevantDataManagerAgent();
const categories = manager.listCategories();
```

## Table of contents

### Constructors

- [constructor](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#constructor)

### Methods

- [getCategory](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getcategory)
- [getCategoryConfig](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getcategoryconfig)
- [getCategorySchemas](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getcategoryschemas)
- [getEntityConnections](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getentityconnections)
- [getExamples](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getexamples)
- [getFolderBlueprint](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getfolderblueprint)
- [getOrCreateSnapshot](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getorcreatesnapshot)
- [getPythonTypes](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getpythontypes)
- [getQueries](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getqueries)
- [getRecord](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getrecord)
- [getRecords](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getrecords)
- [getTests](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#gettests)
- [listCategories](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#listcategories)
- [searchAcrossCategories](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#searchacrosscategories)

## Constructors

### constructor

• **new RelevantDataManagerAgent**(`cacheDirPromise?`): [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

Create a [RelevantDataManagerAgent](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDirPromise?` | `Promise`\<`string`\> | Optional promise that resolves to the cache directory path. |

#### Returns

[`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1323](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1323)

## Methods

### getCategory

▸ **getCategory**(`topicOrId`): [`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)

Resolve a topic or identifier to the underlying category definition.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Identifier, human readable name, or alias. |

#### Returns

[`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)

Matching category definition.

**`Throws`**

When no category matches the provided value.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1347](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1347)

___

### getCategoryConfig

▸ **getCategoryConfig**(`topicOrId`): `Object`

Access category configuration metadata such as relationships.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

`Object`

Category configuration metadata.

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `folder` | [`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1376](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1376)

___

### getCategorySchemas

▸ **getCategorySchemas**(`topicOrId`): [`CategorySchema`](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)[]

Access the JSON schemas associated with a category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`CategorySchema`](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)[]

JSON schema descriptors.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1386](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1386)

___

### getEntityConnections

▸ **getEntityConnections**(`topicOrId`, `recordId`): [`EntityConnections`](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)

Resolve relationships for a given record across categories.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |
| `recordId` | `string` | Record identifier within the category. |

#### Returns

[`EntityConnections`](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)

Relationship graph for the record.

**`Throws`**

When the requested record cannot be found.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1538](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1538)

___

### getExamples

▸ **getExamples**(`topicOrId`): [`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

Fetch example datasets included inside the category folder. These help the
orchestration layer generate realistic tool requests.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

Example dataset descriptors.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1407](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1407)

___

### getFolderBlueprint

▸ **getFolderBlueprint**(`topicOrId`): [`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)

Retrieve the folder blueprint for a given topic.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)

Blueprint describing repository folder structure.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1366](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1366)

___

### getOrCreateSnapshot

▸ **getOrCreateSnapshot**(`topicOrId`): `Promise`\<[`CategorySnapshot`](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)\>

Build a snapshot view of a category and persist it to the shared cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

`Promise`\<[`CategorySnapshot`](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)\>

Snapshot summarising the category state.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1498](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1498)

___

### getPythonTypes

▸ **getPythonTypes**(`topicOrId`): [`PythonTypeDefinition`](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

Retrieve Python type definitions provided as guidance for SDK authors.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`PythonTypeDefinition`](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

Python type hints.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1396](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1396)

___

### getQueries

▸ **getQueries**(`topicOrId`): [`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Retrieve query blueprints that demonstrate how to call the authoritative
upstream system that owns the category data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Query blueprints.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1428](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1428)

___

### getRecord

▸ **getRecord**(`topicOrId`, `recordId`): `undefined` \| [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Retrieve a single record by identifier.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |
| `recordId` | `string` | Identifier of the record within the category. |

#### Returns

`undefined` \| [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Matching record when present.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1449](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1449)

___

### getRecords

▸ **getRecords**(`topicOrId`): [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Return all records stored in the local mock dataset for a category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Stored records.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1438](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1438)

___

### getTests

▸ **getTests**(`topicOrId`): [`CategoryTestArtefact`](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

List the unit/integration tests referenced by the category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier, name, or alias. |

#### Returns

[`CategoryTestArtefact`](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

Test references.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1417](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1417)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

List of category identifiers, names, and descriptions.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1332](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1332)

___

### searchAcrossCategories

▸ **searchAcrossCategories**(`keyword`): \{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

Perform a keyword search across every category.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `keyword` | `string` | Case-insensitive search string. |

#### Returns

\{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

Matching records with field context.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1459](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1459)
