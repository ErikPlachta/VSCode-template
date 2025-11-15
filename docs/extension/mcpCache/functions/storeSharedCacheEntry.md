[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / storeSharedCacheEntry

# Function: storeSharedCacheEntry()

> **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:202](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/extension/mcpCache.ts#L202)

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
