[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / BaseRecord

# Interface: BaseRecord

Defined in: [src/types/userContext.types.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L82)

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

Defined in: [src/types/userContext.types.ts:84](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L84)

Unique identifier for this record

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/userContext.types.ts:86](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L86)

Human-readable name (optional, but either name or title required)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)
