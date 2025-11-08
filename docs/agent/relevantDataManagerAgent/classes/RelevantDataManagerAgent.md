---
title: Relevant Data Manager Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / RelevantDataManagerAgent

# Class: RelevantDataManagerAgent

Defined in: [src/agent/relevantDataManagerAgent/index.ts:506](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L506)

Agent that manages the relevant-data workspace representation.

## Constructors

### Constructor

> **new RelevantDataManagerAgent**(`cacheDirPromise?`): `RelevantDataManagerAgent`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:524](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L524)

#### Parameters

##### cacheDirPromise?

`Promise`\<`string`\>

#### Returns

`RelevantDataManagerAgent`

## Methods

### getCategory()

> **getCategory**(`topicOrId`): [`BusinessCategory`](../interfaces/BusinessCategory.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:551](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L551)

Resolve a topic or identifier to the underlying category definition.

#### Parameters

##### topicOrId

`string`

#### Returns

[`BusinessCategory`](../interfaces/BusinessCategory.md)

***

### getCategoryConfig()

> **getCategoryConfig**(`topicOrId`): `object`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:566](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L566)

Access category configuration metadata such as relationships.

#### Parameters

##### topicOrId

`string`

#### Returns

`object`

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

Defined in: [src/agent/relevantDataManagerAgent/index.ts:606](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L606)

Compute a deterministic hash of the records for change detection.

#### Parameters

##### topicOrId

`string`

Category identifier or alias whose records should be hashed.

#### Returns

`string`

- SHA-1 hash representing the current record contents.

***

### getCategorySchemas()

> **getCategorySchemas**(`topicOrId`): [`CategorySchema`](../interfaces/CategorySchema.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:571](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L571)

Access the JSON schemas associated with a category.

#### Parameters

##### topicOrId

`string`

#### Returns

[`CategorySchema`](../interfaces/CategorySchema.md)[]

***

### getDatasetCatalogue()

> **getDatasetCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/DatasetCatalogueEntry.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:745](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L745)

Expose the consolidated dataset catalogue built from the data directory.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/DatasetCatalogueEntry.md)[]

***

### getDatasetFingerprint()

> **getDatasetFingerprint**(): `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:616](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L616)

Expose the dataset fingerprint used to detect catalogue changes.

#### Returns

`string`

- SHA-1 fingerprint of the consolidated dataset catalogue.

***

### getEntityConnections()

> **getEntityConnections**(`topicOrId`, `recordId`): [`EntityConnections`](../interfaces/EntityConnections.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:716](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L716)

Resolve relationships for a given record across categories.

#### Parameters

##### topicOrId

`string`

##### recordId

`string`

#### Returns

[`EntityConnections`](../interfaces/EntityConnections.md)

***

### getExamples()

> **getExamples**(`topicOrId`): [`ExampleDataset`](../interfaces/ExampleDataset.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:581](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L581)

Fetch example datasets included inside the category folder.

#### Parameters

##### topicOrId

`string`

#### Returns

[`ExampleDataset`](../interfaces/ExampleDataset.md)[]

***

### getFolderBlueprint()

> **getFolderBlueprint**(`topicOrId`): [`FolderBlueprint`](../interfaces/FolderBlueprint.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:561](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L561)

Retrieve the folder blueprint for a given topic.

#### Parameters

##### topicOrId

`string`

#### Returns

[`FolderBlueprint`](../interfaces/FolderBlueprint.md)

***

### getOrCreateSnapshot()

> **getOrCreateSnapshot**(`topicOrId`): `Promise`\<[`CategorySnapshot`](../interfaces/CategorySnapshot.md)\>

Defined in: [src/agent/relevantDataManagerAgent/index.ts:677](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L677)

Build a snapshot view of a category and persist it to the shared cache.

#### Parameters

##### topicOrId

`string`

#### Returns

`Promise`\<[`CategorySnapshot`](../interfaces/CategorySnapshot.md)\>

***

### getQueries()

> **getQueries**(`topicOrId`): [`RemoteQueryBlueprint`](../interfaces/RemoteQueryBlueprint.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:591](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L591)

Retrieve query blueprints that demonstrate how to call the authoritative upstream system.

#### Parameters

##### topicOrId

`string`

#### Returns

[`RemoteQueryBlueprint`](../interfaces/RemoteQueryBlueprint.md)[]

***

### getRecord()

> **getRecord**(`topicOrId`, `recordId`): [`CategoryRecord`](../type-aliases/CategoryRecord.md) \| `undefined`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:621](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L621)

Retrieve a single record by identifier.

#### Parameters

##### topicOrId

`string`

##### recordId

`string`

#### Returns

[`CategoryRecord`](../type-aliases/CategoryRecord.md) \| `undefined`

***

### getRecords()

> **getRecords**(`topicOrId`): [`CategoryRecord`](../type-aliases/CategoryRecord.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:596](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L596)

Return all records stored in the local mock dataset for a category.

#### Parameters

##### topicOrId

`string`

#### Returns

[`CategoryRecord`](../type-aliases/CategoryRecord.md)[]

***

### getTypeDefinitions()

> **getTypeDefinitions**(`topicOrId`): [`TypeDefinition`](../interfaces/TypeDefinition.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:576](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L576)

Retrieve structured type definitions provided as guidance for SDK authors.

#### Parameters

##### topicOrId

`string`

#### Returns

[`TypeDefinition`](../interfaces/TypeDefinition.md)[]

***

### getValidationReport()

> **getValidationReport**(`topicOrId`): [`DataValidationReport`](../interfaces/DataValidationReport.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:586](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L586)

Retrieve the validation report generated for the category data.

#### Parameters

##### topicOrId

`string`

#### Returns

[`DataValidationReport`](../interfaces/DataValidationReport.md)

***

### listCategories()

> **listCategories**(): [`CategorySummary`](../interfaces/CategorySummary.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:542](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L542)

Enumerate the categories available to the MCP client.

#### Returns

[`CategorySummary`](../interfaces/CategorySummary.md)[]

***

### searchAcrossCategories()

> **searchAcrossCategories**(`keyword`): `object`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:626](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L626)

Perform a keyword search across every category.

#### Parameters

##### keyword

`string`

#### Returns

`object`[]


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
