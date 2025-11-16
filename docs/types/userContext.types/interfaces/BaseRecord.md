[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / BaseRecord

# Interface: BaseRecord

Defined in: [src/types/userContext.types.ts:90](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L90)

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

Defined in: [src/types/userContext.types.ts:92](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L92)

Unique identifier for this record

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/userContext.types.ts:94](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L94)

Human-readable name (optional, but either name or title required)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/userContext.types.ts#L96)

Alternative to name (optional, but either name or title required)
