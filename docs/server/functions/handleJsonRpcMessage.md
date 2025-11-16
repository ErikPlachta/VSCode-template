[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / handleJsonRpcMessage

# Function: handleJsonRpcMessage()

> **handleJsonRpcMessage**(`message`): `Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

Defined in: [src/server/index.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/server/index.ts#L196)

Handle a single JSON-RPC request and produce a response.

## Parameters

### message

[`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)

JSON-RPC request.

## Returns

`Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

JSON-RPC response.
