[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / readSharedCacheEntry

# Function: readSharedCacheEntry()

> **readSharedCacheEntry**\<`T`\>(`cacheDir`, `key`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Defined in: [src/extension/mcpCache.ts:222](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/extension/mcpCache.ts#L222)

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
