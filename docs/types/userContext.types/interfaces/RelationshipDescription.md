[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDescription

# Interface: RelationshipDescription

Defined in: [src/types/userContext.types.ts:249](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L249)

High-level relationship metadata surfaced to consumers

## Properties

### cardinality

> **cardinality**: `"one"` \| `"many"`

Defined in: [src/types/userContext.types.ts:257](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L257)

Expected cardinality of the relationship

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:259](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L259)

Narrative description of the relationship

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L251)

Relationship label

***

### targetCategory

> **targetCategory**: `string`

Defined in: [src/types/userContext.types.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L253)

Category on the other side of the relationship

***

### viaField

> **viaField**: `string`

Defined in: [src/types/userContext.types.ts:255](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L255)

Field or property used to establish the link
