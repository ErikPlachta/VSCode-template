[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / logInvocation

# Function: logInvocation()

> **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:185](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/extension/mcpCache.ts#L185)

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
