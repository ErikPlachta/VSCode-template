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
- [getQueries](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getqueries)
- [getRecord](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getrecord)
- [getRecords](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getrecords)
- [getTypeDefinitions](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#gettypedefinitions)
- [getValidationReport](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getvalidationreport)
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

[src/agents/relevantDataManagerAgent.ts:405](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L405)

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

[src/agents/relevantDataManagerAgent.ts:429](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L429)

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

[src/agents/relevantDataManagerAgent.ts:444](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L444)

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

[src/agents/relevantDataManagerAgent.ts:449](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L449)

___

### getDatasetCatalogue

▸ **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Expose the consolidated dataset catalogue built from the data directory.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:578](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L578)

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

[src/agents/relevantDataManagerAgent.ts:551](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L551)

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

[src/agents/relevantDataManagerAgent.ts:459](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L459)

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

[src/agents/relevantDataManagerAgent.ts:439](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L439)

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

[src/agents/relevantDataManagerAgent.ts:518](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L518)

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

[src/agents/relevantDataManagerAgent.ts:469](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L469)

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

[src/agents/relevantDataManagerAgent.ts:479](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L479)

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

[src/agents/relevantDataManagerAgent.ts:474](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L474)

___

### getTypeDefinitions

▸ **getTypeDefinitions**(`topicOrId`): [`TypeDefinition`](../interfaces/agents_relevantDataManagerAgent.TypeDefinition.md)[]

Retrieve structured type definitions provided as guidance for SDK authors.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`TypeDefinition`](../interfaces/agents_relevantDataManagerAgent.TypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:454](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L454)

___

### getValidationReport

▸ **getValidationReport**(`topicOrId`): [`DataValidationReport`](../interfaces/agents_relevantDataManagerAgent.DataValidationReport.md)

Retrieve the validation report generated for the category data.

#### Parameters

| Name | Type |
| :------ | :------ |
| `topicOrId` | `string` |

#### Returns

[`DataValidationReport`](../interfaces/agents_relevantDataManagerAgent.DataValidationReport.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:464](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L464)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:420](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L420)

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

[src/agents/relevantDataManagerAgent.ts:484](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L484)
