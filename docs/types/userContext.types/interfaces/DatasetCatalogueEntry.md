[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

Defined in: src/types/userContext.types.ts:405

Consolidated index entry persisted to the shared cache

## Properties

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:408

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:406

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:407

***

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: src/types/userContext.types.ts:409

***

### recordIds

> **recordIds**: `string`[]

Defined in: src/types/userContext.types.ts:410

***

### relationships

> **relationships**: `object`[]

Defined in: src/types/userContext.types.ts:411

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

Defined in: src/types/userContext.types.ts:418

***

### schemaNames

> **schemaNames**: `string`[]

Defined in: src/types/userContext.types.ts:417
