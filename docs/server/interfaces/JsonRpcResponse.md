[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / [server](../README.md) / JsonRpcResponse

# Interface: JsonRpcResponse

Defined in: [src/server/index.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L38)

JsonRpcResponse interface.

## Properties

### error?

> `optional` **error**: `object`

Defined in: [src/server/index.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L42)

#### code

> **code**: `number`

#### data?

> `optional` **data**: `unknown`

#### message

> **message**: `string`

***

### id

> **id**: `string` \| `number` \| `null`

Defined in: [src/server/index.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L40)

***

### jsonrpc

> **jsonrpc**: `"2.0"`

Defined in: [src/server/index.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L39)

***

### result?

> `optional` **result**: `unknown`

Defined in: [src/server/index.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/server/index.ts#L41)
