[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / startMCPServer

# ~~Function: startMCPServer()~~

> **startMCPServer**(): `Promise`\<`string`\>

Defined in: [src/server/embedded.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/embedded.ts#L22)

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
