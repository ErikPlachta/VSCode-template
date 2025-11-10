[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RawCategoryMetadata

# Interface: RawCategoryMetadata

Defined in: [src/types/userContext.types.ts:450](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L450)

Raw (unvalidated) category metadata structure read from category.json

## Properties

### aliases?

> `optional` **aliases**: `string`[]

Defined in: [src/types/userContext.types.ts:454](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L454)

***

### config

> **config**: `object`

Defined in: [src/types/userContext.types.ts:455](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L455)

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

Defined in: [src/types/userContext.types.ts:453](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L453)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:451](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L451)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:452](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/types/userContext.types.ts#L452)
