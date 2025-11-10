[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ApplicationRecord

# Interface: ApplicationRecord

Defined in: src/types/userContext.types.ts:127

Application record with system information

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:130

***

### documentation?

> `optional` **documentation**: `string`

Defined in: src/types/userContext.types.ts:135

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:128

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:129

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: src/types/userContext.types.ts:133

***

### status

> **status**: `string`

Defined in: src/types/userContext.types.ts:132

***

### supportContacts

> **supportContacts**: `string`[]

Defined in: src/types/userContext.types.ts:136

***

### title?

> `optional` **title**: `string`

Defined in: src/types/userContext.types.ts:88

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)

***

### type

> **type**: `string`

Defined in: src/types/userContext.types.ts:131

***

### url?

> `optional` **url**: `string`

Defined in: src/types/userContext.types.ts:134
