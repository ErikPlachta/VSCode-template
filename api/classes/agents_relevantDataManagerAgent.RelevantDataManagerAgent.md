[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / RelevantDataManagerAgent

# Class: RelevantDataManagerAgent

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).RelevantDataManagerAgent

Agent that manages the relevant-data workspace representation.

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

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDirPromise?` | `Promise`\<`string`\> |

#### Returns

[`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1190](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1190)

## Methods

### getCategory

▸ **getCategory**(`topicOrId`): [`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)

Resolve a topic or identifier to the underlying category definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1204](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1204)

___

### getCategoryConfig

▸ **getCategoryConfig**(`topicOrId`): `Object`

Access category configuration metadata such as relationships.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `folder` | [`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1223](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1223)

___

### getCategorySchemas

▸ **getCategorySchemas**(`topicOrId`): [`CategorySchema`](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)[]

Access the JSON schemas associated with a category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`CategorySchema`](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1228](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1228)

___

### getEntityConnections

▸ **getEntityConnections**(`topicOrId`, `recordId`): [`EntityConnections`](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)

Resolve relationships for a given record across categories.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |
| `recordId` | `string` |

#### Returns

[`EntityConnections`](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1336](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1336)

___

### getExamples

▸ **getExamples**(`topicOrId`): [`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

Fetch example datasets included inside the category folder. These help the
orchestration layer generate realistic tool requests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1241](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1241)

___

### getFolderBlueprint

▸ **getFolderBlueprint**(`topicOrId`): [`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)

Retrieve the folder blueprint for a given topic.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`FolderBlueprint`](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1218](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1218)

___

### getOrCreateSnapshot

▸ **getOrCreateSnapshot**(`topicOrId`): `Promise`\<[`CategorySnapshot`](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)\>

Build a snapshot view of a category and persist it to the shared cache.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

`Promise`\<[`CategorySnapshot`](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)\>

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1303](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1303)

___

### getPythonTypes

▸ **getPythonTypes**(`topicOrId`): [`PythonTypeDefinition`](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

Retrieve Python type definitions provided as guidance for SDK authors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`PythonTypeDefinition`](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1233](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1233)

___

### getQueries

▸ **getQueries**(`topicOrId`): [`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Retrieve query blueprints that demonstrate how to call the authoritative
upstream system that owns the category data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1254](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1254)

___

### getRecord

▸ **getRecord**(`topicOrId`, `recordId`): `undefined` \| [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

Retrieve a single record by identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |
| `recordId` | `string` |

#### Returns

`undefined` \| [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1264](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1264)

___

### getRecords

▸ **getRecords**(`topicOrId`): [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Return all records stored in the local mock dataset for a category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1259](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1259)

___

### getTests

▸ **getTests**(`topicOrId`): [`CategoryTestArtefact`](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

List the unit/integration tests referenced by the category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`CategoryTestArtefact`](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1246](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1246)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1195](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1195)

___

### searchAcrossCategories

▸ **searchAcrossCategories**(`keyword`): \{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

Perform a keyword search across every category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

\{ `categoryId`: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid) ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1269](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/agents/relevantDataManagerAgent.ts#L1269)
