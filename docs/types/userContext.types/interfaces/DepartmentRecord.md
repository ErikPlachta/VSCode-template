[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / DepartmentRecord

# Interface: DepartmentRecord

Defined in: [src/types/userContext.types.ts:128](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L128)

Department record with organizational structure

## Extends

- [`BaseRecord`](BaseRecord.md)

## Indexable

\[`key`: `string`\]: `unknown`

Additional dynamic properties

## Properties

### applicationIds

> **applicationIds**: `string`[]

Defined in: [src/types/userContext.types.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L134)

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:131](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L131)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:129](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L129)

Unique identifier for this record

#### Overrides

[`BaseRecord`](BaseRecord.md).[`id`](BaseRecord.md#id)

***

### leadId

> **leadId**: `string`

Defined in: [src/types/userContext.types.ts:132](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L132)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L130)

Human-readable name (optional, but either name or title required)

#### Overrides

[`BaseRecord`](BaseRecord.md).[`name`](BaseRecord.md#name)

***

### parentDepartmentId?

> `optional` **parentDepartmentId**: `string`

Defined in: [src/types/userContext.types.ts:133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L133)

***

### policyIds

> **policyIds**: `string`[]

Defined in: [src/types/userContext.types.ts:135](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L135)

***

### resourceIds

> **resourceIds**: `string`[]

Defined in: [src/types/userContext.types.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L136)

***

### title?

> `optional` **title**: `string`

Defined in: [src/types/userContext.types.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L88)

Alternative to name (optional, but either name or title required)

#### Inherited from

[`BaseRecord`](BaseRecord.md).[`title`](BaseRecord.md#title)
