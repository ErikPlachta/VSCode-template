[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDescription

# Interface: RelationshipDescription

Defined in: [src/types/userContext.types.ts:241](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L241)

High-level relationship metadata surfaced to consumers

## Properties

### cardinality

> **cardinality**: `"one"` \| `"many"`

Defined in: [src/types/userContext.types.ts:249](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L249)

Expected cardinality of the relationship

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:251](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L251)

Narrative description of the relationship

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:243](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L243)

Relationship label

***

### targetCategory

> **targetCategory**: `string`

Defined in: [src/types/userContext.types.ts:245](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L245)

Category on the other side of the relationship

***

### viaField

> **viaField**: `string`

Defined in: [src/types/userContext.types.ts:247](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L247)

Field or property used to establish the link
