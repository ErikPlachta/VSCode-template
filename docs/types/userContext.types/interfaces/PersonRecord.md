[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / PersonRecord

# Interface: PersonRecord

Defined in: [src/types/userContext.types.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L119)

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

Defined in: [src/types/userContext.types.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L128)

***

### departmentId

> **departmentId**: `string`

Defined in: [src/types/userContext.types.ts:124](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L124)

***

### email

> **email**: `string`

Defined in: [src/types/userContext.types.ts:122](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L122)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L120)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### location

> **location**: `string`

Defined in: [src/types/userContext.types.ts:126](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L126)

***

### managerId?

> `optional` **managerId**: `string`

Defined in: [src/types/userContext.types.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L125)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L121)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### policyAcks

> **policyAcks**: `string`[]

Defined in: [src/types/userContext.types.ts:129](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L129)

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: [src/types/userContext.types.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L130)

***

### role

> **role**: `string`

Defined in: [src/types/userContext.types.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L123)

***

### skills

> **skills**: `string`[]

Defined in: [src/types/userContext.types.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L127)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/types/userContext.types.ts#L96)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
