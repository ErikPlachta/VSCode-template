[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / stopMCPServer

# ~~Function: stopMCPServer()~~

> **stopMCPServer**(): `Promise`\<`void`\>

Defined in: [src/server/embedded.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/embedded.ts#L32)

Stops the (deprecated) embedded HTTP MCP server stub (no-op).

## Returns

`Promise`\<`void`\>

Resolves immediately; no resources are allocated.

## Deprecated

HTTP transport disabled; use stdio lifecycle in `src/server/index.ts`.
