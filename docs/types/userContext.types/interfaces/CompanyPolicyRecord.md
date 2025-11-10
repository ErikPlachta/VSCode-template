[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CompanyPolicyRecord

# Interface: CompanyPolicyRecord

Defined in: src/types/userContext.types.ts:142

Company policy record

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicableDepartments

> **applicableDepartments**: `string`[]

Defined in: src/types/userContext.types.ts:150

***

### category

> **category**: `string`

Defined in: src/types/userContext.types.ts:146

***

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:145

***

### effectiveDate

> **effectiveDate**: `string`

Defined in: src/types/userContext.types.ts:147

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:143

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### lastUpdated

> **lastUpdated**: `string`

Defined in: src/types/userContext.types.ts:148

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

Defined in: src/types/userContext.types.ts:149

***

### requiresAcknowledgment

> **requiresAcknowledgment**: `boolean`

Defined in: src/types/userContext.types.ts:151

***

### title

> **title**: `string`

Defined in: src/types/userContext.types.ts:144

Alternative to name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
