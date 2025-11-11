[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / ApplicationRecord

# Interface: ApplicationRecord

Defined in: [src/types/userContext.types.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L127)

Application record with system information

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L130)

***

### documentation?

> `optional` **documentation**: `string`

Defined in: [src/types/userContext.types.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L135)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L128)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:129](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L129)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: [src/types/userContext.types.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L133)

***

### status

> **status**: `string`

Defined in: [src/types/userContext.types.ts:132](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L132)

***

### supportContacts

> **supportContacts**: `string`[]

Defined in: [src/types/userContext.types.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L136)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)

***

### type

> **type**: `string`

Defined in: [src/types/userContext.types.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L131)

***

### url?

> `optional` **url**: `string`

Defined in: [src/types/userContext.types.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/userContext.types.ts#L134)
