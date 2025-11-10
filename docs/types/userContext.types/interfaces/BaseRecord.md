[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / BaseRecord

# Interface: BaseRecord

Defined in: src/types/userContext.types.ts:82

Base record interface - all records must have an ID and either name or title

## Extended by

- [`PersonRecord`](PersonRecord.md)
- [`DepartmentRecord`](DepartmentRecord.md)
- [`ApplicationRecord`](ApplicationRecord.md)
- [`CompanyPolicyRecord`](CompanyPolicyRecord.md)
- [`CompanyResourceRecord`](CompanyResourceRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:84

Unique identifier for this record

***

### name?

> `optional` **name**: `string`

Defined in: src/types/userContext.types.ts:86

Human-readable name (optional, but either name or title required)

***

### title?

> `optional` **title**: `string`

Defined in: src/types/userContext.types.ts:88

Alternative to name (optional, but either name or title required)
