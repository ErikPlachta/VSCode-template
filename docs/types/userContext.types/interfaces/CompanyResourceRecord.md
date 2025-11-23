[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CompanyResourceRecord

# Interface: CompanyResourceRecord

Defined in: [src/types/userContext.types.ts:180](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L180)

Company resource record

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### accessRequirements?

> `optional` **accessRequirements**: `string`[]

Defined in: [src/types/userContext.types.ts:187](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L187)

***

### category

> **category**: `string`

Defined in: [src/types/userContext.types.ts:185](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L185)

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:183](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L183)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:181](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L181)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### lastUpdated

> **lastUpdated**: `string`

Defined in: [src/types/userContext.types.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L189)

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/userContext.types.ts:94](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L94)

Human-readable name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: [src/types/userContext.types.ts:188](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L188)

***

### title

> **title**: `string`

Defined in: [src/types/userContext.types.ts:182](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L182)

Alternative to name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)

***

### type

> **type**: `string`

Defined in: [src/types/userContext.types.ts:184](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L184)

***

### url?

> `optional` **url**: `string`

Defined in: [src/types/userContext.types.ts:186](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/userContext.types.ts#L186)
