[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / PersonRecord

# Interface: PersonRecord

Defined in: src/types/userContext.types.ts:96

Person record with organizational and access information

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: src/types/userContext.types.ts:105

***

### departmentId

> **departmentId**: `string`

Defined in: src/types/userContext.types.ts:101

***

### email

> **email**: `string`

Defined in: src/types/userContext.types.ts:99

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:97

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### location

> **location**: `string`

Defined in: src/types/userContext.types.ts:103

***

### managerId?

> `optional` **managerId**: `string`

Defined in: src/types/userContext.types.ts:102

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:98

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### policyAcks

> **policyAcks**: `string`[]

Defined in: src/types/userContext.types.ts:106

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: src/types/userContext.types.ts:107

***

### role

> **role**: `string`

Defined in: src/types/userContext.types.ts:100

***

### skills

> **skills**: `string`[]

Defined in: src/types/userContext.types.ts:104

***

### title?

> `optional` **title**: `string`

Defined in: src/types/userContext.types.ts:88

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
