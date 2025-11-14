[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CompanyPolicyRecord

# Interface: CompanyPolicyRecord

Defined in: [src/types/userContext.types.ts:167](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L167)

Company policy record

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicableDepartments

> **applicableDepartments**: `string`[]

Defined in: [src/types/userContext.types.ts:175](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L175)

***

### category

> **category**: `string`

Defined in: [src/types/userContext.types.ts:171](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L171)

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:170](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L170)

***

### effectiveDate

> **effectiveDate**: `string`

Defined in: [src/types/userContext.types.ts:172](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L172)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:168](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L168)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### lastUpdated

> **lastUpdated**: `string`

Defined in: [src/types/userContext.types.ts:173](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L173)

***

### name?

> `optional` **name**: `string`

Defined in: [src/types/userContext.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L96)

Human-readable name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### owner

> **owner**: `string`

Defined in: [src/types/userContext.types.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L174)

***

### requiresAcknowledgment

> **requiresAcknowledgment**: `boolean`

Defined in: [src/types/userContext.types.ts:176](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L176)

***

### title

> **title**: `string`

Defined in: [src/types/userContext.types.ts:169](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/userContext.types.ts#L169)

Alternative to name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
