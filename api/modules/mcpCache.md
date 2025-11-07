[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpCache

# Module: mcpCache

**`Fileoverview`**

Utilities for managing the local `.mcp-cache` directory.

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

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |
| `key` | `string` | Cache entry key to delete. |

#### Returns

`Promise`\<`void`\>

Resolves when the entry has been removed or did not exist.

**`Throws`**

When the delete operation fails for reasons other than missing files.

#### Defined in

[src/mcpCache.ts:172](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L172)

___

### ensureCacheDirectory

▸ **ensureCacheDirectory**(): `Promise`\<`string`\>

Ensure the workspace has a `.mcp-cache` directory and return its path.

The directory is created in the current workspace when available, otherwise
the user's home directory is used as a fallback. This keeps diagnostic logs
local to the client, reducing storage pressure on the MCP backend.

#### Returns

`Promise`\<`string`\>

Absolute path to the cache directory.

**`Throws`**

When the directory cannot be created.

**`Example`**

```ts
const cacheDir = await ensureCacheDirectory();
```

#### Defined in

[src/mcpCache.ts:64](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L64)

___

### listSharedCacheEntries

▸ **listSharedCacheEntries**\<`T`\>(`cacheDir`): `Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\>[]\>

Enumerate all cached artefacts currently stored on disk.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |

#### Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\>[]\>

Array of cached entries.

**`Throws`**

When the directory cannot be read.

#### Defined in

[src/mcpCache.ts:141](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L141)

___

### logInvocation

▸ **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Append an invocation log entry to `.mcp-cache/invocations.jsonl`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |
| `entry` | [`ToolLogEntry`](../interfaces/mcpCache.ToolLogEntry.md) | Log entry to persist. |

#### Returns

`Promise`\<`void`\>

Resolves when the entry has been appended.

**`Throws`**

When the log file cannot be written.

#### Defined in

[src/mcpCache.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L80)

___

### readSharedCacheEntry

▸ **readSharedCacheEntry**\<`T`\>(`cacheDir`, `key`): `Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Retrieve a shared cache entry by key.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |
| `key` | `string` | Unique cache entry key. |

#### Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Stored entry or `undefined` if not found.

**`Throws`**

When the file exists but cannot be read.

#### Defined in

[src/mcpCache.ts:115](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L115)

___

### storeSharedCacheEntry

▸ **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Persist a shared cache entry that can be re-used by other MCP tools.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |
| `entry` | [`SharedCacheEntry`](../interfaces/mcpCache.SharedCacheEntry.md)\<`T`\> | Payload to store on disk. |

#### Returns

`Promise`\<`void`\>

Resolves when the entry has been written.

**`Throws`**

When the entry cannot be persisted.

#### Defined in

[src/mcpCache.ts:95](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpCache.ts#L95)
