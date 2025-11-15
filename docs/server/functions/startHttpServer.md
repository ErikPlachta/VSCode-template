[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / startHttpServer

# Function: startHttpServer()

> **startHttpServer**(`port`): `Promise`\<\{ `port`: `number`; `server`: `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>; \}\>

Defined in: [src/server/index.ts:452](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/index.ts#L452)

Start an HTTP JSON-RPC server that reuses the same dispatcher as stdio.
Enabled only when MCP_HTTP_ENABLED=true. Intended for local debugging.

## Parameters

### port

`number` = `...`

Port to listen on (0 uses an ephemeral port for tests).

## Returns

`Promise`\<\{ `port`: `number`; `server`: `Server`\<*typeof* `IncomingMessage`, *typeof* `ServerResponse`\>; \}\>

The created Node HTTP server instance and the bound port.
