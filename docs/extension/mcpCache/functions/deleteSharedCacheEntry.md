[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / deleteSharedCacheEntry

# Function: deleteSharedCacheEntry()

> **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/extension/mcpCache.ts#L163)

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
