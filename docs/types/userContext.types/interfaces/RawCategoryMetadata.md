[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RawCategoryMetadata

# Interface: RawCategoryMetadata

Defined in: [src/types/userContext.types.ts:450](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L450)

Raw (unvalidated) category metadata structure read from category.json

## Properties

### aliases?

> `optional` **aliases**: `string`[]

Defined in: [src/types/userContext.types.ts:454](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L454)

***

### config

> **config**: `object`

Defined in: [src/types/userContext.types.ts:455](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L455)

#### access

> **access**: `string`

#### orchestration

> **orchestration**: [`RawOrchestrationConfig`](RawOrchestrationConfig.md)

#### primaryKeys

> **primaryKeys**: `string`[]

#### purpose

> **purpose**: `string`

#### requirements?

> `optional` **requirements**: [`CategoryRequirements`](CategoryRequirements.md)

#### updateCadence

> **updateCadence**: `string`

***

### description

> **description**: `string`

Defined in: [src/types/userContext.types.ts:453](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L453)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:451](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L451)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:452](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/dbd1f1b9fa5b16d372045236383e524b66205c7f/src/types/userContext.types.ts#L452)
