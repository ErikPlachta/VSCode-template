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

[src/agents/relevantDataManagerAgent.ts:192](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L192)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:190](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L190)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:191](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L191)

___

### primaryKeys

• **primaryKeys**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:193](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L193)

___

### recordIds

• **recordIds**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L194)

___

### relationships

• **relationships**: \{ `cardinality`: ``"one"`` \| ``"many"`` ; `name`: `string` ; `targetCategory`: `string` ; `viaField`: `string`  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:195](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L195)

___

### requirements

• `Optional` **requirements**: [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:202](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L202)

___

### schemaNames

• **schemaNames**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:201](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/agents/relevantDataManagerAgent.ts#L201)
