[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / PersonRecord

# Interface: PersonRecord

Defined in: [src/types/userContext.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L96)

Person record with organizational and access information

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: [src/types/userContext.types.ts:105](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L105)

***

### departmentId

> **departmentId**: `string`

Defined in: [src/types/userContext.types.ts:101](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L101)

***

### email

> **email**: `string`

Defined in: [src/types/userContext.types.ts:99](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L99)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:97](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L97)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### location

> **location**: `string`

Defined in: [src/types/userContext.types.ts:103](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L103)

***

### managerId?

> `optional` **managerId**: `string`

Defined in: [src/types/userContext.types.ts:102](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L102)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L98)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### policyAcks

> **policyAcks**: `string`[]

Defined in: [src/types/userContext.types.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L106)

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: [src/types/userContext.types.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L107)

***

### role

> **role**: `string`

Defined in: [src/types/userContext.types.ts:100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L100)

***

### skills

> **skills**: `string`[]

Defined in: [src/types/userContext.types.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L104)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
