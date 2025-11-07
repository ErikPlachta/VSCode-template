[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / BusinessCategory

# Interface: BusinessCategory

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).BusinessCategory

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

[src/agents/relevantDataManagerAgent.ts:184](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L184)

___

### config

• **config**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access` | `string` |
| `folder` | [`FolderBlueprint`](agents_relevantDataManagerAgent.FolderBlueprint.md) |
| `orchestration` | [`CategoryOrchestrationConfig`](agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md) |
| `primaryKeys` | `string`[] |
| `purpose` | `string` |
| `relationships` | [`RelationshipDescription`](agents_relevantDataManagerAgent.RelationshipDescription.md)[] |
| `requirements?` | [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md) |
| `updateCadence` | `string` |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:185](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L185)

___

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:183](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L183)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:197](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L197)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:181](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L181)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:182](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L182)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:198](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L198)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:199](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L199)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:195](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L195)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:196](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L196)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:200](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L200)
