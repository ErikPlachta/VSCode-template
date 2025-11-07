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
- [getDatasetCatalogue](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getdatasetcatalogue)
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

[src/agents/relevantDataManagerAgent.ts:288](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L288)

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

[src/agents/relevantDataManagerAgent.ts:311](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L311)

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
| `requirements?` | [`CategoryRequirements`](../interfaces/agents_relevantDataManagerAgent.CategoryRequirements.md) |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:326](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L326)

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

[src/agents/relevantDataManagerAgent.ts:331](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L331)

___

### getDatasetCatalogue

▸ **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Expose the consolidated dataset catalogue built from the data directory.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:460](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L460)

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

[src/agents/relevantDataManagerAgent.ts:433](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L433)

___

### getExamples

▸ **getExamples**(`topicOrId`): [`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

Fetch example datasets included inside the category folder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`ExampleDataset`](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:341](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L341)

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

[src/agents/relevantDataManagerAgent.ts:321](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L321)

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

[src/agents/relevantDataManagerAgent.ts:400](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L400)

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

[src/agents/relevantDataManagerAgent.ts:336](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L336)

___

### getQueries

▸ **getQueries**(`topicOrId`): [`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Retrieve query blueprints that demonstrate how to call the authoritative upstream system.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`RemoteQueryBlueprint`](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:351](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L351)

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

[src/agents/relevantDataManagerAgent.ts:361](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L361)

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

[src/agents/relevantDataManagerAgent.ts:356](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L356)

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

[src/agents/relevantDataManagerAgent.ts:346](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L346)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:302](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L302)

___

### searchAcrossCategories

▸ **searchAcrossCategories**(`keyword`): \{ `categoryId`: `string` ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

Perform a keyword search across every category.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyword` | `string` |

#### Returns

\{ `categoryId`: `string` ; `matchingFields`: `string`[] ; `record`: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:366](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L366)
