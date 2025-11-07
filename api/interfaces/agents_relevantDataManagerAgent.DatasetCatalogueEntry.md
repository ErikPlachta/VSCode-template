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

[src/agents/relevantDataManagerAgent.ts:231](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L231)

___

### id

• **id**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:229](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L229)

___

### name

• **name**: `string`

#### Defined in

[src/agents/relevantDataManagerAgent.ts:230](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L230)

___

### primaryKeys

• **primaryKeys**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:232](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L232)

___

### recordIds

• **recordIds**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:233](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L233)

___

### relationships

• **relationships**: \{ `cardinality`: ``"one"`` \| ``"many"`` ; `name`: `string` ; `targetCategory`: `string` ; `viaField`: `string`  }[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:234](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L234)

___

### requirements

• `Optional` **requirements**: [`CategoryRequirements`](agents_relevantDataManagerAgent.CategoryRequirements.md)

#### Defined in

[src/agents/relevantDataManagerAgent.ts:241](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L241)

___

### schemaNames

• **schemaNames**: `string`[]

#### Defined in

[src/agents/relevantDataManagerAgent.ts:240](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/relevantDataManagerAgent.ts#L240)
