[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

Defined in: [src/types/userContext.types.ts:405](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L405)

Consolidated index entry persisted to the shared cache

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:408](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L408)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L406)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:407](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L407)

***

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: [src/types/userContext.types.ts:409](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L409)

***

### recordIds

> **recordIds**: `string`[]

Defined in: [src/types/userContext.types.ts:410](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L410)

***

### relationships

> **relationships**: `object`[]

Defined in: [src/types/userContext.types.ts:411](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L411)

#### cardinality

> **cardinality**: `"one"` \| `"many"`

#### name

> **name**: `string`

#### targetCategory

> **targetCategory**: `string`

#### viaField

> **viaField**: `string`

***

### requirements?

> `optional` **requirements**: [`CategoryRequirements`](CategoryRequirements.md)

Defined in: [src/types/userContext.types.ts:418](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L418)

***

### schemaNames

> **schemaNames**: `string`[]

Defined in: [src/types/userContext.types.ts:417](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/types/userContext.types.ts#L417)
