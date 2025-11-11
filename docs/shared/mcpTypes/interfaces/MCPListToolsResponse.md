[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPListToolsResponse

# Interface: MCPListToolsResponse

Defined in: [src/shared/mcpTypes.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/mcpTypes.ts#L59)

JSON-RPC 2.0 payload returned by the MCP server.

## Properties

### error?

> `optional` **error**: `object`

Defined in: [src/shared/mcpTypes.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/mcpTypes.ts#L63)

#### code?

> `optional` **code**: `number`

#### data?

> `optional` **data**: `unknown`

#### message

> **message**: `string`

***

### id

> **id**: `string` \| `number`

Defined in: [src/shared/mcpTypes.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/mcpTypes.ts#L61)

***

### jsonrpc

> **jsonrpc**: `string`

Defined in: [src/shared/mcpTypes.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/mcpTypes.ts#L60)

***

### result?

> `optional` **result**: `object`

Defined in: [src/shared/mcpTypes.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/mcpTypes.ts#L62)

#### tools?

> `optional` **tools**: [`MCPTool`](MCPTool.md)[]
