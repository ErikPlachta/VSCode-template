[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CompanyPolicyRecord

# Interface: CompanyPolicyRecord

Defined in: [src/types/userContext.types.ts:157](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L157)

Company policy record

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicableDepartments

> **applicableDepartments**: `string`[]

Defined in: [src/types/userContext.types.ts:165](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L165)

***

### category

> **category**: `string`

Defined in: [src/types/userContext.types.ts:161](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L161)

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:160](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L160)

***

### effectiveDate

> **effectiveDate**: `string`

Defined in: [src/types/userContext.types.ts:162](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L162)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:158](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L158)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### lastUpdated

> **lastUpdated**: `string`

Defined in: [src/types/userContext.types.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L163)

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/userContext.types.ts:86](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L86)

Human-readable name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: [src/types/userContext.types.ts:164](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L164)

***

### requiresAcknowledgment

> **requiresAcknowledgment**: `boolean`

Defined in: [src/types/userContext.types.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L166)

***

### title

> **title**: `string`

Defined in: [src/types/userContext.types.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L159)

Alternative to name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
