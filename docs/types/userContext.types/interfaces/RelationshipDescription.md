[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDescription

# Interface: RelationshipDescription

Defined in: src/types/userContext.types.ts:224

High-level relationship metadata surfaced to consumers

## Properties

### cardinality

> **cardinality**: `"one"` \| `"many"`

Defined in: src/types/userContext.types.ts:232

Expected cardinality of the relationship

***

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:234

Narrative description of the relationship

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:226

Relationship label

***

### targetCategory

> **targetCategory**: `string`

Defined in: src/types/userContext.types.ts:228

Category on the other side of the relationship

***

### viaField

> **viaField**: `string`

Defined in: src/types/userContext.types.ts:230

Field or property used to establish the link
