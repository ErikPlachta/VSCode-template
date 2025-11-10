[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RelationshipDefinition

# Interface: RelationshipDefinition

Defined in: src/types/userContext.types.ts:183

Relationship definition between categories

## Properties

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:198

Description of the relationship

***

### fields

> **fields**: `object`

Defined in: src/types/userContext.types.ts:191

Fields used to join/link records

#### source

> **source**: `string`

Field in source category

#### target

> **target**: `string`

Field in target category

***

### from

> **from**: `string`

Defined in: src/types/userContext.types.ts:185

Source category ID

***

### required?

> `optional` **required**: `boolean`

Defined in: src/types/userContext.types.ts:200

Whether the relationship is required

***

### to

> **to**: `string`

Defined in: src/types/userContext.types.ts:187

Target category ID

***

### type

> **type**: `string`

Defined in: src/types/userContext.types.ts:189

Type of relationship
