[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / storeSharedCacheEntry

# Function: storeSharedCacheEntry()

> **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:105](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/extension/mcpCache.ts#L105)

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
