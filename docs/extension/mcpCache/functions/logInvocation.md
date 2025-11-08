[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [extension/mcpCache](../README.md) / logInvocation

# Function: logInvocation()

> **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/extension/mcpCache.ts#L69)

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
