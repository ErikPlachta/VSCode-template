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

[src/agents/relevantDataManagerAgent.ts:204](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L204)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:202](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L202)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:203](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L203)

___

### primaryKeys

• **primaryKeys**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:205](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L205)

___

### recordIds

• **recordIds**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:206](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L206)

___

### relationships

• **relationships**: \{ `cardinality`: ``"one"`` \| ``"many"`` ; `name`: `string` ; `targetCategory`: `string` ; `viaField`: `string`  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:207](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L207)

___

### requirements

• `Optional` **requirements**: [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:214](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L214)

___

### schemaNames

• **schemaNames**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:213](https://github.com/ErikPlachta/VSCode-template/blob/3d173d019b16cfafe321fa03cc66fd6b9a8b5a5d/src/agents/relevantDataManagerAgent.ts#L213)
