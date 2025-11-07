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
- [PythonTypedDictField](../interfaces/agents_relevantDataManagerAgent.PythonTypedDictField.md)
- [RelationshipDescription](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)
- [RemoteQueryBlueprint](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)

### Type Aliases

- [CategoryId](agents_relevantDataManagerAgent.md#categoryid)
- [CategoryRecord](agents_relevantDataManagerAgent.md#categoryrecord)
- [PythonPrimitiveType](agents_relevantDataManagerAgent.md#pythonprimitivetype)
- [PythonTypeSchema](agents_relevantDataManagerAgent.md#pythontypeschema)

### Functions

- [createRelevantDataManagerAgent](agents_relevantDataManagerAgent.md#createrelevantdatamanageragent)

## Type Aliases

### CategoryId

Ƭ **CategoryId**: `string`

Unique identifier for a category in the repository.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:139](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L139)

___

### CategoryRecord

Ƭ **CategoryRecord**: `Record`\<`string`, `unknown`\> & \{ `id`: `string` ; `name?`: `string` ; `title?`: `string`  }

Minimal representation of a record stored under a category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:136](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L136)

___

### PythonPrimitiveType

Ƭ **PythonPrimitiveType**: ``"str"`` \| ``"int"`` \| ``"float"`` \| ``"bool"`` \| ``"datetime"``

Supported Python type primitives within the schema definition.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:77](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L77)

___

### PythonTypeSchema

Ƭ **PythonTypeSchema**: \{ `kind`: ``"primitive"`` ; `name`: [`PythonPrimitiveType`](agents_relevantDataManagerAgent.md#pythonprimitivetype)  } \| \{ `kind`: ``"optional"`` ; `value`: [`PythonTypeSchema`](agents_relevantDataManagerAgent.md#pythontypeschema)  } \| \{ `element`: [`PythonTypeSchema`](agents_relevantDataManagerAgent.md#pythontypeschema) ; `kind`: ``"list"``  } \| \{ `kind`: ``"literal"`` ; `value`: `string` \| `number` \| `boolean` \| ``null``  } \| \{ `kind`: ``"enum"`` ; `values`: (`string` \| `number` \| `boolean`)[]  } \| \{ `fields`: [`PythonTypedDictField`](../interfaces/agents_relevantDataManagerAgent.PythonTypedDictField.md)[] ; `kind`: ``"typedDict"``  }

JSON description for a Python type that can be materialised by an MCP server.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L80)

## Functions

### createRelevantDataManagerAgent

▸ **createRelevantDataManagerAgent**(): [`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Returns

[`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:972](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L972)
