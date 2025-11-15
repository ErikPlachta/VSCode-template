[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / stopMCPServer

# ~~Function: stopMCPServer()~~

> **stopMCPServer**(): `Promise`\<`void`\>

Defined in: [src/server/embedded.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/embedded.ts#L32)

Stops the (deprecated) embedded HTTP MCP server stub (no-op).

## Returns

`Promise`\<`void`\>

Resolves immediately; no resources are allocated.

## Deprecated

HTTP transport disabled; use stdio lifecycle in `src/server/index.ts`.
