[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / PersonRecord

# Interface: PersonRecord

Defined in: [src/types/userContext.types.ts:111](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L111)

Person record with organizational and access information

NOTE: This is a UserContext-specific type for the current data model.
Modify or replace these types based on your actual business data.

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: [src/types/userContext.types.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L120)

***

### departmentId

> **departmentId**: `string`

Defined in: [src/types/userContext.types.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L116)

***

### email

> **email**: `string`

Defined in: [src/types/userContext.types.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L114)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:112](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L112)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### location

> **location**: `string`

Defined in: [src/types/userContext.types.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L118)

***

### managerId?

> `optional` **managerId**: `string`

Defined in: [src/types/userContext.types.ts:117](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L117)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L113)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### policyAcks

> **policyAcks**: `string`[]

Defined in: [src/types/userContext.types.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L121)

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: [src/types/userContext.types.ts:122](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L122)

***

### role

> **role**: `string`

Defined in: [src/types/userContext.types.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L115)

***

### skills

> **skills**: `string`[]

Defined in: [src/types/userContext.types.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L119)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
