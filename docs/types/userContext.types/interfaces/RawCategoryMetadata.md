[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RawCategoryMetadata

# Interface: RawCategoryMetadata

Defined in: [src/types/userContext.types.ts:467](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L467)

Raw (unvalidated) category metadata structure read from category.json

## Properties

### aliases?

> `optional` **aliases**: `string`[]

Defined in: [src/types/userContext.types.ts:471](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L471)

***

### config

> **config**: `object`

Defined in: [src/types/userContext.types.ts:472](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L472)

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

Defined in: [src/types/userContext.types.ts:470](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L470)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:468](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L468)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:469](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/82a5145af02a0dfcaf89b0463e3a24e33a8ba7ad/src/types/userContext.types.ts#L469)
