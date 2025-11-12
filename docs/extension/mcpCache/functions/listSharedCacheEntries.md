[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / listSharedCacheEntries

# Function: listSharedCacheEntries()

> **listSharedCacheEntries**\<`T`\>(`cacheDir`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>[]\>

Defined in: [src/extension/mcpCache.ts:151](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/extension/mcpCache.ts#L151)

Enumerate all cached artefacts currently stored on disk.

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
