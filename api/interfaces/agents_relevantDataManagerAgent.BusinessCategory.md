[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / BusinessCategory

# Interface: BusinessCategory

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).BusinessCategory

Full configuration stored for each business category.

## Table of contents

### Properties

- [aliases](agents_relevantDataManagerAgent.BusinessCategory.md#aliases)
- [config](agents_relevantDataManagerAgent.BusinessCategory.md#config)
- [description](agents_relevantDataManagerAgent.BusinessCategory.md#description)
- [examples](agents_relevantDataManagerAgent.BusinessCategory.md#examples)
- [id](agents_relevantDataManagerAgent.BusinessCategory.md#id)
- [name](agents_relevantDataManagerAgent.BusinessCategory.md#name)
- [pythonTypes](agents_relevantDataManagerAgent.BusinessCategory.md#pythontypes)
- [queries](agents_relevantDataManagerAgent.BusinessCategory.md#queries)
- [records](agents_relevantDataManagerAgent.BusinessCategory.md#records)
- [schemas](agents_relevantDataManagerAgent.BusinessCategory.md#schemas)
- [tests](agents_relevantDataManagerAgent.BusinessCategory.md#tests)

## Properties

### aliases

• **aliases**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:122](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L122)

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `folder` | [`FolderBlueprint`](agents_relevantDataManagerAgent.FolderBlueprint.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `requirements?` | [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md) |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:123](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L123)

___

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:121](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L121)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:134](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L134)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:119](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L119)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:120](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L120)

___

### pythonTypes

• **pythonTypes**: [`PythonTypeDefinition`](agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:133](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L133)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:136](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L136)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:137](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L137)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:132](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L132)

___

### tests

• **tests**: [`CategoryTestArtefact`](agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:135](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L135)
