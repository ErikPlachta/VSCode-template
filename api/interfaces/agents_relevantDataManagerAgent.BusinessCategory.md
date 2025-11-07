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

[src/agents/relevantDataManagerAgent.ts:146](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L146)

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

[src/agents/relevantDataManagerAgent.ts:147](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L147)

___

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:145](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L145)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:158](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L158)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:143](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L143)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:144](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L144)

___

### pythonTypes

• **pythonTypes**: [`PythonTypeDefinition`](agents_relevantDataManagerAgent.PythonTypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:157](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L157)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:160](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L160)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:161](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L161)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:156](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L156)

___

### tests

• **tests**: [`CategoryTestArtefact`](agents_relevantDataManagerAgent.CategoryTestArtefact.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:159](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L159)
