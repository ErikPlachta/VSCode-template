[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / storeSharedCacheEntry

# Function: storeSharedCacheEntry()

> **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:86](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/extension/mcpCache.ts#L86)

Persist a shared cache entry that can be re-used by other MCP tools.

## Type Parameters

### T

`T`

Payload type of the value being stored.

## Parameters

### cacheDir

`string`

Absolute path returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### entry

[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>

Entry envelope to write.

## Returns

`Promise`\<`void`\>

Resolves when the entry is written.
