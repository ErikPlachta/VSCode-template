[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / deleteSharedCacheEntry

# Function: deleteSharedCacheEntry()

> **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:182](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/extension/mcpCache.ts#L182)

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
