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
- [queries](agents_relevantDataManagerAgent.BusinessCategory.md#queries)
- [records](agents_relevantDataManagerAgent.BusinessCategory.md#records)
- [schemas](agents_relevantDataManagerAgent.BusinessCategory.md#schemas)
- [types](agents_relevantDataManagerAgent.BusinessCategory.md#types)
- [validation](agents_relevantDataManagerAgent.BusinessCategory.md#validation)

## Properties

### aliases

• **aliases**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:158](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L158)

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

[src/agents/relevantDataManagerAgent.ts:159](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L159)

___

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:157](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L157)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:170](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L170)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:155](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L155)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:156](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L156)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:171](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L171)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:172](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L172)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:168](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L168)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:169](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L169)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:173](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L173)
