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
- [getCategoryRecordHash](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getcategoryrecordhash)
- [getCategorySchemas](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getcategoryschemas)
- [getDatasetCatalogue](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getdatasetcatalogue)
- [getDatasetFingerprint](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md#getdatasetfingerprint)
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

[src/agents/relevantDataManagerAgent.ts:451](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L451)

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

[src/agents/relevantDataManagerAgent.ts:475](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L475)

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
| `orchestration` | [`CategoryOrchestrationConfig`](../interfaces/agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `requirements?` | [`CategoryRequirements`](../interfaces/agents_relevantDataManagerAgent.CategoryRequirements.md) |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:490](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L490)

___

### getCategoryRecordHash

▸ **getCategoryRecordHash**(`topicOrId`): `string`

Compute a deterministic hash of the records for change detection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `topicOrId` | `string` | Category identifier or alias whose records should be hashed. |

#### Returns

`string`

SHA-1 hash representing the current record contents.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:530](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L530)

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

[src/agents/relevantDataManagerAgent.ts:495](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L495)

___

### getDatasetCatalogue

▸ **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Expose the consolidated dataset catalogue built from the data directory.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:647](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L647)

___

### getDatasetFingerprint

▸ **getDatasetFingerprint**(): `string`

Expose the dataset fingerprint used to detect catalogue changes.

#### Returns

`string`

SHA-1 fingerprint of the consolidated dataset catalogue.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:540](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L540)

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

[src/agents/relevantDataManagerAgent.ts:620](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L620)

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

[src/agents/relevantDataManagerAgent.ts:505](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L505)

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

[src/agents/relevantDataManagerAgent.ts:485](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L485)

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

[src/agents/relevantDataManagerAgent.ts:584](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L584)

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

[src/agents/relevantDataManagerAgent.ts:515](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L515)

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

[src/agents/relevantDataManagerAgent.ts:545](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L545)

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

[src/agents/relevantDataManagerAgent.ts:520](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L520)

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

[src/agents/relevantDataManagerAgent.ts:500](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L500)

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

[src/agents/relevantDataManagerAgent.ts:510](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L510)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:466](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L466)

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

[src/agents/relevantDataManagerAgent.ts:550](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L550)
