[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / logInvocation

# Function: logInvocation()

> **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/extension/mcpCache.ts#L88)

Append an invocation log entry to `.mcp-cache/invocations.jsonl`.

## Parameters

### cacheDir

`string`

Absolute path returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### entry

[`ToolLogEntry`](../interfaces/ToolLogEntry.md)

Log payload to append as a JSON line.

## Returns

`Promise`\<`void`\>

Resolves when the entry is written.
