[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / listSharedCacheEntries

# Function: listSharedCacheEntries()

> **listSharedCacheEntries**\<`T`\>(`cacheDir`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>[]\>

Defined in: [src/extension/mcpCache.ts:151](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/extension/mcpCache.ts#L151)

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
