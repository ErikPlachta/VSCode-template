[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [server/embedded](../README.md) / startMCPServer

# Function: startMCPServer()

> **startMCPServer**(`port?`): `Promise`\<`string`\>

Defined in: [src/server/embedded.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/server/embedded.ts#L23)

Start the embedded MCP server on a provided or ephemeral port and resolve when it is ready.
- When a fixed port is provided, wait for the underlying server to emit `listening`.
- If the port is already in use, reject and clear any partial state so the caller can retry.
- When no port is provided, bind to an ephemeral port and resolve with the full URL once ready.

## Parameters

### port?

`number`

Preferred port to bind to. If omitted, an ephemeral port is chosen.

## Returns

`Promise`\<`string`\>

Fully qualified base URL (e.g., http://localhost:39200).
