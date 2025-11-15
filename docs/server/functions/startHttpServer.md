[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / startHttpServer

# Function: startHttpServer()

> **startHttpServer**(`port`): `Promise`\<\{ `port`: `number`; `server`: `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>; \}\>

Defined in: [src/server/index.ts:452](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/server/index.ts#L452)

Start an HTTP JSON-RPC server that reuses the same dispatcher as stdio.
Enabled only when MCP_HTTP_ENABLED=true. Intended for local debugging.

## Parameters

### port

`number` = `...`

Port to listen on (0 uses an ephemeral port for tests).

## Returns

`Promise`\<\{ `port`: `number`; `server`: `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>; \}\>

The created Node HTTP server instance and the bound port.
