[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DatasetCatalogEntry

# Interface: DatasetCatalogEntry

Defined in: [src/types/userContext.types.ts:432](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L432)

Consolidated index entry persisted to the shared cache (American English primary form).

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:435](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L435)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:433](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L433)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:434](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L434)

***

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: [src/types/userContext.types.ts:436](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L436)

***

### recordIds

> **recordIds**: `string`[]

Defined in: [src/types/userContext.types.ts:437](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L437)

***

### relationships

> **relationships**: `object`[]

Defined in: [src/types/userContext.types.ts:438](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L438)

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

Defined in: [src/types/userContext.types.ts:445](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L445)

***

### schemaNames

> **schemaNames**: `string`[]

Defined in: [src/types/userContext.types.ts:444](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L444)
