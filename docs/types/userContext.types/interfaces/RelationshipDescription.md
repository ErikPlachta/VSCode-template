[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDescription

# Interface: RelationshipDescription

Defined in: [src/types/userContext.types.ts:224](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L224)

High-level relationship metadata surfaced to consumers

## Properties

### cardinality

> **cardinality**: `"one"` \| `"many"`

Defined in: [src/types/userContext.types.ts:232](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L232)

Expected cardinality of the relationship

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:234](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L234)

Narrative description of the relationship

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:226](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L226)

Relationship label

***

### targetCategory

> **targetCategory**: `string`

Defined in: [src/types/userContext.types.ts:228](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L228)

Category on the other side of the relationship

***

### viaField

> **viaField**: `string`

Defined in: [src/types/userContext.types.ts:230](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L230)

Field or property used to establish the link
