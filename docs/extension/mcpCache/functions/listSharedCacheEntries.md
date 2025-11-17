[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / listSharedCacheEntries

# Function: listSharedCacheEntries()

> **listSharedCacheEntries**\<`T`\>(`cacheDir`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>[]\>

Defined in: [src/extension/mcpCache.ts:248](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L248)

Enumerate all cached artifacts currently stored on disk.

## Type Parameters

### T

`T` = `unknown`

Payload type associated with entries.

## Parameters

### cacheDir

`string`

Absolute path returned by [ensureCacheDirectory](ensureCacheDirectory.md).

## Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>[]\>

Parsed entries found in the shared cache folder.

## Throws

Propagates filesystem errors other than missing directory.
