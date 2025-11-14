[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / stopMCPServer

# ~~Function: stopMCPServer()~~

> **stopMCPServer**(): `Promise`\<`void`\>

Defined in: [src/server/embedded.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/server/embedded.ts#L32)

Stops the (deprecated) embedded HTTP MCP server stub (no-op).

## Returns

`Promise`\<`void`\>

Resolves immediately; no resources are allocated.

## Deprecated

HTTP transport disabled; use stdio lifecycle in `src/server/index.ts`.
