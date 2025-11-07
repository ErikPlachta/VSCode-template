[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).DatasetCatalogueEntry

Consolidated index entry persisted to the shared cache.

## Table of contents

### Properties

- [description](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#description)
- [id](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#id)
- [name](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#name)
- [primaryKeys](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#primarykeys)
- [recordIds](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#recordids)
- [relationships](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#relationships)
- [requirements](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#requirements)
- [schemaNames](agents_relevantDataManagerAgent.DatasetCatalogueEntry.md#schemanames)

## Properties

### description

• **description**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:229](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L229)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:227](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L227)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:228](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L228)

___

### primaryKeys

• **primaryKeys**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:230](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L230)

___

### recordIds

• **recordIds**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:231](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L231)

___

### relationships

• **relationships**: \{ `cardinality`: ``"one"`` \| ``"many"`` ; `name`: `string` ; `targetCategory`: `string` ; `viaField`: `string`  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:232](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L232)

___

### requirements

• `Optional` **requirements**: [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:239](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L239)

___

### schemaNames

• **schemaNames**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:238](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/relevantDataManagerAgent.ts#L238)
