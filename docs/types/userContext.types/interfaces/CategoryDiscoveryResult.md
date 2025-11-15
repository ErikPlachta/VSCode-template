[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/userContext.types](../README.md) / CategoryDiscoveryResult

# Interface: CategoryDiscoveryResult

Defined in: [src/types/userContext.types.ts:104](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/userContext.types.ts#L104)

Result of a bulk category discovery operation from DataLoaderAgent

## Properties

### categories

> **categories**: `Map`\<`string`, \{ `config`: [`CategoryConfig`](CategoryConfig.md); `records`: [`BaseRecord`](BaseRecord.md)[]; \}\>

Defined in: [src/types/userContext.types.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/userContext.types.ts#L106)

Successfully loaded categories

***

### errors

> **errors**: `object`[]

Defined in: [src/types/userContext.types.ts:108](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/userContext.types.ts#L108)

Errors encountered during discovery

#### categoryName

> **categoryName**: `string`

#### error

> **error**: `Error`

***

### warnings

> **warnings**: `string`[]

Defined in: [src/types/userContext.types.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/userContext.types.ts#L110)

Warnings for skipped or partial categories
