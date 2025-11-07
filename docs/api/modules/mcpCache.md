[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpCache

# Module: mcpCache

## Table of contents

### Interfaces

- [ToolLogEntry](../interfaces/mcpCache.ToolLogEntry.md)

### Functions

- [ensureCacheDirectory](mcpCache.md#ensurecachedirectory)
- [logInvocation](mcpCache.md#loginvocation)
- [pruneCache](mcpCache.md#prunecache)

## Functions

### ensureCacheDirectory

▸ **ensureCacheDirectory**(): `Promise`\<`string`\>

Ensure the workspace has a `.mybusinessMCP` directory and return its path.

The directory is created in the current workspace when available, otherwise
the user's home directory is used as a fallback. This keeps diagnostic logs
local to the client, reducing storage pressure on the MCP backend.

#### Returns

`Promise`\<`string`\>

#### Defined in

src/extension/mcpCache.ts:57

___

### logInvocation

▸ **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Append an invocation log entry to `.mybusinessMCP/invocations.jsonl`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheDir` | `string` |
| `entry` | [`ToolLogEntry`](../interfaces/mcpCache.ToolLogEntry.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/extension/mcpCache.ts:75

___

### pruneCache

▸ **pruneCache**(`cacheDir`, `retentionDays`): `Promise`\<`void`\>

Remove cache artefacts older than the configured retention window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheDir` | `string` | Directory returned by [ensureCacheDirectory](mcpCache.md#ensurecachedirectory). |
| `retentionDays` | `number` | Maximum number of days to retain cache entries. |

#### Returns

`Promise`\<`void`\>

#### Defined in

src/extension/mcpCache.ts:93
