[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DepartmentRecord

# Interface: DepartmentRecord

Defined in: src/types/userContext.types.ts:113

Department record with organizational structure

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: src/types/userContext.types.ts:119

***

### description

> **description**: `string`

Defined in: src/types/userContext.types.ts:116

***

### id

> **id**: `string`

Defined in: src/types/userContext.types.ts:114

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### leadId

> **leadId**: `string`

Defined in: src/types/userContext.types.ts:117

***

### name

> **name**: `string`

Defined in: src/types/userContext.types.ts:115

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### parentDepartmentId?

> `optional` **parentDepartmentId**: `string`

Defined in: src/types/userContext.types.ts:118

***

### policyIds

> **policyIds**: `string`[]

Defined in: src/types/userContext.types.ts:120

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: src/types/userContext.types.ts:121

***

### title?

> `optional` **title**: `string`

Defined in: src/types/userContext.types.ts:88

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
