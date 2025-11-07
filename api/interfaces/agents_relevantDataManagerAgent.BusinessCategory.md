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

[src/agents/relevantDataManagerAgent.ts:182](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L182)

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

[src/agents/relevantDataManagerAgent.ts:183](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L183)

___

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:181](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L181)

___

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:195](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L195)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:179](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L179)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:180](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L180)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:196](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L196)

___

### records

• **records**: [`CategoryRecord`](../modules/agents_relevantDataManagerAgent.md#categoryrecord)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:197](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L197)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:193](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L193)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L194)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:198](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L198)
