[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / agents/relevantDataManagerAgent

# Module: agents/relevantDataManagerAgent

**`Fileoverview`**

Agent responsible for managing the mock "relevant data"
workspace that MCP servers expose to users. The agent keeps a rich catalogue
of categories (departments, people, applications, policies, resources) that
mirrors a repository folder structure complete with schemas, type
definitions, example datasets, validation reports, and remote query blueprints.

## Table of contents

### Classes

- [RelevantDataManagerAgent](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)
- [UnknownCategoryError](../classes/agents_relevantDataManagerAgent.UnknownCategoryError.md)

### Interfaces

- [AgentOrchestrationGuidance](../interfaces/agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md)
- [BusinessCategory](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)
- [CategoryOrchestrationConfig](../interfaces/agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md)
- [CategoryRequirements](../interfaces/agents_relevantDataManagerAgent.CategoryRequirements.md)
- [CategorySchema](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)
- [CategorySnapshot](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)
- [CategorySummary](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)
- [DataValidationIssue](../interfaces/agents_relevantDataManagerAgent.DataValidationIssue.md)
- [DataValidationReport](../interfaces/agents_relevantDataManagerAgent.DataValidationReport.md)
- [DatasetCatalogueEntry](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)
- [EntityConnections](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)
- [ExampleDataset](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)
- [FolderBlueprint](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)
- [RelationshipDescription](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)
- [RemoteQueryBlueprint](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)
- [TypeDefinition](../interfaces/agents_relevantDataManagerAgent.TypeDefinition.md)
- [TypedDictField](../interfaces/agents_relevantDataManagerAgent.TypedDictField.md)

### Type Aliases

- [CategoryId](agents_relevantDataManagerAgent.md#categoryid)
- [CategoryRecord](agents_relevantDataManagerAgent.md#categoryrecord)
- [PrimitiveTypeName](agents_relevantDataManagerAgent.md#primitivetypename)
- [TypeSchema](agents_relevantDataManagerAgent.md#typeschema)

### Functions

- [createRelevantDataManagerAgent](agents_relevantDataManagerAgent.md#createrelevantdatamanageragent)

## Type Aliases

### CategoryId

Ƭ **CategoryId**: `string`

Unique identifier for a category in the repository.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:153](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L153)

___

### CategoryRecord

Ƭ **CategoryRecord**: `Record`\<`string`, `unknown`\> & \{ `id`: `string` ; `name?`: `string` ; `title?`: `string`  }

Minimal representation of a record stored under a category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:150](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L150)

___

### PrimitiveTypeName

Ƭ **PrimitiveTypeName**: ``"str"`` \| ``"int"`` \| ``"float"`` \| ``"bool"`` \| ``"datetime"``

Supported primitive names within a type definition schema.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:78](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L78)

___

### TypeSchema

Ƭ **TypeSchema**: \{ `kind`: ``"primitive"`` ; `name`: [`PrimitiveTypeName`](agents_relevantDataManagerAgent.md#primitivetypename)  } \| \{ `kind`: ``"optional"`` ; `value`: [`TypeSchema`](agents_relevantDataManagerAgent.md#typeschema)  } \| \{ `element`: [`TypeSchema`](agents_relevantDataManagerAgent.md#typeschema) ; `kind`: ``"list"``  } \| \{ `kind`: ``"literal"`` ; `value`: `string` \| `number` \| `boolean` \| ``null``  } \| \{ `kind`: ``"enum"`` ; `values`: (`string` \| `number` \| `boolean`)[]  } \| \{ `fields`: [`TypedDictField`](../interfaces/agents_relevantDataManagerAgent.TypedDictField.md)[] ; `kind`: ``"typedDict"``  }

JSON description for a structured type that can be materialised by an MCP server.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:81](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L81)

## Functions

### createRelevantDataManagerAgent

▸ **createRelevantDataManagerAgent**(): [`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Returns

[`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1212](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L1212)
