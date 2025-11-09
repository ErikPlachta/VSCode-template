[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / deleteSharedCacheEntry

# Function: deleteSharedCacheEntry()

> **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:182](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/extension/mcpCache.ts#L182)

Remove a shared cache entry when it is no longer relevant.

## Parameters

### cacheDir

`string`

Absolute path returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### key

`string`

Unique key identifying the entry.

## Returns

`Promise`\<`void`\>

Resolves whether or not the file existed.

## Throws

Propagates filesystem errors other than missing file.
