[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CompanyResourceRecord

# Interface: CompanyResourceRecord

Defined in: src/types/userContext.types.ts:157

Company resource record

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### accessRequirements?

> `optional` **accessRequirements**: `string`[]

Defined in: src/types/userContext.types.ts:164

***

### category

> **category**: `string`

Defined in: src/types/userContext.types.ts:162

***

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:160

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:158

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### lastUpdated

> **lastUpdated**: `string`

Defined in: src/types/userContext.types.ts:166

***

### name?

> `optional` **name**: `string`

Defined in: src/types/userContext.types.ts:86

Human-readable name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: src/types/userContext.types.ts:165

***

### title

> **title**: `string`

Defined in: src/types/userContext.types.ts:159

Alternative to name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)

***

### type

> **type**: `string`

Defined in: src/types/userContext.types.ts:161

***

### url?

> `optional` **url**: `string`

Defined in: src/types/userContext.types.ts:163
