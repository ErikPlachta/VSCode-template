[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / RawCategoryMetadata

# Interface: RawCategoryMetadata

Defined in: [src/types/userContext.types.ts:483](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L483)

Raw (unvalidated) category metadata structure read from category.json

## Properties

### aliases?

> `optional` **aliases**: `string`[]

Defined in: [src/types/userContext.types.ts:487](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L487)

***

### config

> **config**: `object`

Defined in: [src/types/userContext.types.ts:488](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L488)

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

Defined in: [src/types/userContext.types.ts:486](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L486)

***

### id

> **id**: `string`

Defined in: [src/types/userContext.types.ts:484](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L484)

***

### name

> **name**: `string`

Defined in: [src/types/userContext.types.ts:485](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/userContext.types.ts#L485)
