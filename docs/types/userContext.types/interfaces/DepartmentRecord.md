[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DepartmentRecord

# Interface: DepartmentRecord

Defined in: [src/types/userContext.types.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L113)

Department record with organizational structure

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: [src/types/userContext.types.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L119)

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L116)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:114](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L114)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### leadId

> **leadId**: `string`

Defined in: [src/types/userContext.types.ts:117](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L117)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L115)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### parentDepartmentId?

> `optional` **parentDepartmentId**: `string`

Defined in: [src/types/userContext.types.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L118)

***

### policyIds

> **policyIds**: `string`[]

Defined in: [src/types/userContext.types.ts:120](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L120)

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: [src/types/userContext.types.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L121)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
