[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / readSharedCacheEntry

# Function: readSharedCacheEntry()

> **readSharedCacheEntry**\<`T`\>(`cacheDir`, `key`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Defined in: [src/extension/mcpCache.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/extension/mcpCache.ts#L125)

Retrieve a shared cache entry by key.

## Type Parameters

### T

`T` = `unknown`

Payload type previously stored with [storeSharedCacheEntry](storeSharedCacheEntry.md).

## Parameters

### cacheDir

`string`

Absolute path returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### key

`string`

Unique key identifying the entry.

## Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\> \| `undefined`\>

The entry if present, otherwise undefined.

## Throws

Propagates filesystem errors other than missing file.
