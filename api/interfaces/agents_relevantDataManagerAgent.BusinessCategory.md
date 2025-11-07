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

Alternative names that can be used to reference the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:185](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L185)

___

### config

• **config**: `Object`

Configuration metadata.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `folder` | [`FolderBlueprint`](agents_relevantDataManagerAgent.FolderBlueprint.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:186](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L186)

___

### description

• **description**: `string`

Narrative summary of the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:184](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L184)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

Example datasets.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:196](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L196)

___

### id

• **id**: [`CategoryId`](../modules/agents_relevantDataManagerAgent.md#categoryid)

Category identifier.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:182](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L182)

___

### name

• **name**: `string`

Human readable category name.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:183](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L183)

___

### pythonTypes

• **pythonTypes**: [`PythonTypeDefinition`](agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

Python typing hints.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:195](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L195)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Query blueprints.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:198](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L198)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

Records stored under the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:199](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L199)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

Associated JSON schemas.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L194)

___

### tests

• **tests**: [`CategoryTestArtefact`](agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

Test references.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:197](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L197)
