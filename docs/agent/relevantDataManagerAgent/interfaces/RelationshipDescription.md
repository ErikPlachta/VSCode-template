[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / RelationshipDescription

# Interface: RelationshipDescription

Defined in: [src/agent/relevantDataManagerAgent/index.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L48)

High-level relationship metadata surfaced to consumers.

## Properties

### cardinality

> **cardinality**: `"one"` \| `"many"`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L56)

Expected cardinality of the relationship.

***

### description

> **description**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:58](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L58)

Narrative description of the relationship.

***

### name

> **name**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L50)

Relationship label.

***

### targetCategory

> **targetCategory**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L52)

Category on the other side of the relationship.

***

### viaField

> **viaField**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/relevantDataManagerAgent/index.ts#L54)

Field or property used to establish the link.
