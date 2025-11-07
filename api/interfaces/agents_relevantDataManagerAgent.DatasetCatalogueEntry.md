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

[src/agents/relevantDataManagerAgent.ts:168](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L168)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:166](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L166)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:167](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L167)

___

### primaryKeys

• **primaryKeys**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:169](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L169)

___

### recordIds

• **recordIds**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:170](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L170)

___

### relationships

• **relationships**: \{ `cardinality`: ``"one"`` \| ``"many"`` ; `name`: `string` ; `targetCategory`: `string` ; `viaField`: `string`  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:171](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L171)

___

### requirements

• `Optional` **requirements**: [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:178](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L178)

___

### schemaNames

• **schemaNames**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:177](https://github.com/ErikPlachta/VSCode-template/blob/eeb646b9d32d2c20c6378d80bd96e761e0fa8136/src/agents/relevantDataManagerAgent.ts#L177)
