[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / startMCPServer

# ~~Function: startMCPServer()~~

> **startMCPServer**(): `Promise`\<`string`\>

Defined in: [src/server/embedded.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/embedded.ts#L22)

Starts the (deprecated) embedded HTTP MCP server stub.

## Returns

`Promise`\<`string`\>

Informational string indicating stdio-only transport.

## Deprecated

HTTP transport disabled; use stdio startup in `src/server/index.ts`.

## Example

```ts
const msg = await startMCPServer();
console.log(msg); // "stdio-only: no HTTP server"
```
