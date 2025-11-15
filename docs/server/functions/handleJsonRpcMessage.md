[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / handleJsonRpcMessage

# Function: handleJsonRpcMessage()

> **handleJsonRpcMessage**(`message`): `Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

Defined in: [src/server/index.ts:196](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/server/index.ts#L196)

Handle a single JSON-RPC request and produce a response.

## Parameters

### message

[`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)

JSON-RPC request.

## Returns

`Promise`\<[`JsonRpcResponse`](../interfaces/JsonRpcResponse.md)\>

JSON-RPC response.
