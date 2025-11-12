[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryDiscoveryResult

# Interface: CategoryDiscoveryResult

Defined in: [src/types/userContext.types.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L96)

Result of a bulk category discovery operation from DataLoaderAgent

## Properties

### categories

> **categories**: `Map`\<`string`, \{ `config`: [`CategoryConfig`](CategoryConfig.md); `records`: [`BaseRecord`](BaseRecord.md)[]; \}\>

Defined in: [src/types/userContext.types.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L98)

Successfully loaded categories

***

### errors

> **errors**: `object`[]

Defined in: [src/types/userContext.types.ts:100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L100)

Errors encountered during discovery

#### categoryName

> **categoryName**: `string`

#### error

> **error**: `Error`

***

### warnings

> **warnings**: `string`[]

Defined in: [src/types/userContext.types.ts:102](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/types/userContext.types.ts#L102)

Warnings for skipped or partial categories
