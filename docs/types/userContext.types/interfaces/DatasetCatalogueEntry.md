[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

Defined in: [src/types/userContext.types.ts:422](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L422)

Consolidated index entry persisted to the shared cache

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:425](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L425)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:423](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L423)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:424](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L424)

***

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: [src/types/userContext.types.ts:426](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L426)

***

### recordIds

> **recordIds**: `string`[]

Defined in: [src/types/userContext.types.ts:427](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L427)

***

### relationships

> **relationships**: `object`[]

Defined in: [src/types/userContext.types.ts:428](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L428)

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

Defined in: [src/types/userContext.types.ts:435](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L435)

***

### schemaNames

> **schemaNames**: `string`[]

Defined in: [src/types/userContext.types.ts:434](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L434)
