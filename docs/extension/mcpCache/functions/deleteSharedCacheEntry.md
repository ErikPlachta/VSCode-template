[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / deleteSharedCacheEntry

# Function: deleteSharedCacheEntry()

> **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:279](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/extension/mcpCache.ts#L279)

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
