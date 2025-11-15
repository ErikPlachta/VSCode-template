[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / handleJsonRpcMessage

# Function: handleJsonRpcMessage()

> **handleJsonRpcMessage**(`message`): `Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

Defined in: [src/server/index.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/server/index.ts#L196)

Handle a single JSON-RPC request and produce a response.

## Parameters

### message

[`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)

JSON-RPC request.

## Returns

`Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

JSON-RPC response.
