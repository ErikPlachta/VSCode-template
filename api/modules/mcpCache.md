[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpCache

# Module: mcpCache

## Table of contents

### Interfaces

- [SharedCacheEntry](../interfaces/mcpCache.SharedCacheEntry.md)
- [ToolLogEntry](../interfaces/mcpCache.ToolLogEntry.md)

### Functions

- [deleteSharedCacheEntry](mcpCache.md#deletesharedcacheentry)
- [ensureCacheDirectory](mcpCache.md#ensurecachedirectory)
- [listSharedCacheEntries](mcpCache.md#listsharedcacheentries)
- [logInvocation](mcpCache.md#loginvocation)
- [readSharedCacheEntry](mcpCache.md#readsharedcacheentry)
- [storeSharedCacheEntry](mcpCache.md#storesharedcacheentry)

## Functions

### deleteSharedCacheEntry

▸ **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Remove a shared cache entry when it is no longer relevant.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/mcpCache.ts:136](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L136)

___

### ensureCacheDirectory

▸ **ensureCacheDirectory**(): `Promise`\<`string`\>

Ensure the workspace has a `.mcp-cache` directory and return its path.

The directory is created in the current workspace when available, otherwise
the user's home directory is used as a fallback. This keeps diagnostic logs
local to the client, reducing storage pressure on the MCP backend.

#### Returns

`Promise`\<`string`\>

#### Defined in

[src/mcpCache.ts:55](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L55)

___

### listSharedCacheEntries

▸ **listSharedCacheEntries**\<`T`\>(`cacheDir`): `Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\>[]\>

Enumerate all cached artefacts currently stored on disk.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |

#### Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\>[]\>

#### Defined in

[src/mcpCache.ts:110](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L110)

___

### logInvocation

▸ **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Append an invocation log entry to `.mcp-cache/invocations.jsonl`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |
| `entry` | [`ToolLogEntry`](../interfaces/mcpCache.ToolLogEntry.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/mcpCache.ts:66](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L66)

___

### readSharedCacheEntry

▸ **readSharedCacheEntry**\<`T`\>(`cacheDir`, `key`): `Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Retrieve a shared cache entry by key.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |
| `key` | `string` |

#### Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> \| `undefined`\>

#### Defined in

[src/mcpCache.ts:89](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L89)

___

### storeSharedCacheEntry

▸ **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Persist a shared cache entry that can be re-used by other MCP tools.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |
| `entry` | [`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/mcpCache.ts:75](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpCache.ts#L75)
