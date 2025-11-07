[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / agents/relevantDataManagerAgent

# Module: agents/relevantDataManagerAgent

**`Fileoverview`**

Agent responsible for managing the mock "relevant data"
workspace that MCP servers expose to users. The agent keeps a rich catalogue
of categories (departments, people, applications, policies, resources) that
mirrors a repository folder structure complete with schemas, python type
hints, example datasets, tests, and remote query blueprints.

## Table of contents

### Classes

- [RelevantDataManagerAgent](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)
- [UnknownCategoryError](../classes/agents_relevantDataManagerAgent.UnknownCategoryError.md)

### Interfaces

- [BusinessCategory](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)
- [CategoryRequirements](../interfaces/agents_relevantDataManagerAgent.CategoryRequirements.md)
- [CategorySchema](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)
- [CategorySnapshot](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)
- [CategorySummary](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)
- [CategoryTestArtefact](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)
- [DatasetCatalogueEntry](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)
- [EntityConnections](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)
- [ExampleDataset](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)
- [FolderBlueprint](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)
- [PythonTypeDefinition](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)
- [RelationshipDescription](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)
- [RemoteQueryBlueprint](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)

### Type Aliases

- [CategoryId](agents_relevantDataManagerAgent.md#categoryid)
- [CategoryRecord](agents_relevantDataManagerAgent.md#categoryrecord)

### Functions

- [createRelevantDataManagerAgent](agents_relevantDataManagerAgent.md#createrelevantdatamanageragent)

## Type Aliases

### CategoryId

Ƭ **CategoryId**: `string`

Unique identifier for a category in the repository.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:115](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L115)

___

### CategoryRecord

Ƭ **CategoryRecord**: `Record`\<`string`, `unknown`\> & \{ `id`: `string` ; `name?`: `string` ; `title?`: `string`  }

Minimal representation of a record stored under a category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:112](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L112)

## Functions

### createRelevantDataManagerAgent

▸ **createRelevantDataManagerAgent**(): [`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Returns

[`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:812](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L812)
