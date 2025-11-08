[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / RelevantDataManagerAgent

# Class: RelevantDataManagerAgent

Defined in: [src/agent/relevantDataManagerAgent/index.ts:622](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L622)

Agent that manages the relevant-data workspace representation.

## Constructors

### Constructor

> **new RelevantDataManagerAgent**(`cacheDirPromise?`): `RelevantDataManagerAgent`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:646](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L646)

constructor function.

#### Parameters

##### cacheDirPromise?

`Promise`\<`string`\>

cacheDirPromise parameter.

#### Returns

`RelevantDataManagerAgent`

- TODO: describe return value.

## Methods

### getCategory()

> **getCategory**(`topicOrId`): [`BusinessCategory`](../interfaces/BusinessCategory.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:683](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L683)

Resolve a topic or identifier to the underlying category definition.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`BusinessCategory`](../interfaces/BusinessCategory.md)

- TODO: describe return value.

#### Throws

- May throw an error.

***

### getCategoryConfig()

> **getCategoryConfig**(`topicOrId`): `object`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:708](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L708)

Access category configuration metadata such as relationships.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

`object`

- TODO: describe return value.

##### access

> **access**: `string`

##### folder

> **folder**: [`FolderBlueprint`](../interfaces/FolderBlueprint.md)

##### orchestration

> **orchestration**: [`CategoryOrchestrationConfig`](../interfaces/CategoryOrchestrationConfig.md)

##### primaryKeys

> **primaryKeys**: `string`[]

##### purpose

> **purpose**: `string`

##### relationships

> **relationships**: [`RelationshipDescription`](../interfaces/RelationshipDescription.md)[]

##### requirements?

> `optional` **requirements**: [`CategoryRequirements`](../interfaces/CategoryRequirements.md)

##### updateCadence

> **updateCadence**: `string`

***

### getCategoryRecordHash()

> **getCategoryRecordHash**(`topicOrId`): `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:778](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L778)

Compute a deterministic hash of the records for change detection.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

`string`

- TODO: describe return value.

***

### getCategorySchemas()

> **getCategorySchemas**(`topicOrId`): [`CategorySchema`](../interfaces/CategorySchema.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:718](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L718)

Access the JSON schemas associated with a category.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`CategorySchema`](../interfaces/CategorySchema.md)[]

- TODO: describe return value.

***

### getDatasetCatalogue()

> **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/DatasetCatalogueEntry.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:948](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L948)

Expose the consolidated dataset catalogue built from the data directory.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/DatasetCatalogueEntry.md)[]

- TODO: describe return value.

***

### getDatasetFingerprint()

> **getDatasetFingerprint**(): `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:788](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L788)

Expose the dataset fingerprint used to detect catalogue changes.

#### Returns

`string`

- TODO: describe return value.

***

### getEntityConnections()

> **getEntityConnections**(`topicOrId`, `recordId`): [`EntityConnections`](../interfaces/EntityConnections.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:915](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L915)

Resolve relationships for a given record across categories.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

##### recordId

`string`

recordId parameter.

#### Returns

[`EntityConnections`](../interfaces/EntityConnections.md)

- TODO: describe return value.

#### Throws

- May throw an error.

***

### getExamples()

> **getExamples**(`topicOrId`): [`ExampleDataset`](../interfaces/ExampleDataset.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:738](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L738)

Fetch example datasets included inside the category folder.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`ExampleDataset`](../interfaces/ExampleDataset.md)[]

- TODO: describe return value.

***

### getFolderBlueprint()

> **getFolderBlueprint**(`topicOrId`): [`FolderBlueprint`](../interfaces/FolderBlueprint.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:698](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L698)

Retrieve the folder blueprint for a given topic.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`FolderBlueprint`](../interfaces/FolderBlueprint.md)

- TODO: describe return value.

***

### getOrCreateSnapshot()

> **getOrCreateSnapshot**(`topicOrId`): `Promise`\<[`CategorySnapshot`](../interfaces/CategorySnapshot.md)\>

Defined in: [src/agent/relevantDataManagerAgent/index.ts:869](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L869)

Build a snapshot view of a category and persist it to the shared cache.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

`Promise`\<[`CategorySnapshot`](../interfaces/CategorySnapshot.md)\>

- TODO: describe return value.

***

### getQueries()

> **getQueries**(`topicOrId`): [`RemoteQueryBlueprint`](../interfaces/RemoteQueryBlueprint.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:758](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L758)

Retrieve query blueprints that demonstrate how to call the authoritative upstream system.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`RemoteQueryBlueprint`](../interfaces/RemoteQueryBlueprint.md)[]

- TODO: describe return value.

***

### getRecord()

> **getRecord**(`topicOrId`, `recordId`): [`CategoryRecord`](../type-aliases/CategoryRecord.md) \| `undefined`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:799](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L799)

Retrieve a single record by identifier.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

##### recordId

`string`

recordId parameter.

#### Returns

[`CategoryRecord`](../type-aliases/CategoryRecord.md) \| `undefined`

- TODO: describe return value.

***

### getRecords()

> **getRecords**(`topicOrId`): [`CategoryRecord`](../type-aliases/CategoryRecord.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:768](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L768)

Return all records stored in the local mock dataset for a category.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`CategoryRecord`](../type-aliases/CategoryRecord.md)[]

- TODO: describe return value.

***

### getTypeDefinitions()

> **getTypeDefinitions**(`topicOrId`): [`TypeDefinition`](../interfaces/TypeDefinition.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:728](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L728)

Retrieve structured type definitions provided as guidance for SDK authors.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`TypeDefinition`](../interfaces/TypeDefinition.md)[]

- TODO: describe return value.

***

### getValidationReport()

> **getValidationReport**(`topicOrId`): [`DataValidationReport`](../interfaces/DataValidationReport.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:748](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L748)

Retrieve the validation report generated for the category data.

#### Parameters

##### topicOrId

`string`

topicOrId parameter.

#### Returns

[`DataValidationReport`](../interfaces/DataValidationReport.md)

- TODO: describe return value.

***

### listCategories()

> **listCategories**(): [`CategorySummary`](../interfaces/CategorySummary.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:668](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L668)

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/CategorySummary.md)[]

- TODO: describe return value.

***

### searchAcrossCategories()

> **searchAcrossCategories**(`keyword`): `object`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:813](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L813)

Perform a keyword search across every category.

#### Parameters

##### keyword

`string`

keyword parameter.

#### Returns

`object`[]

- TODO: describe return value.
