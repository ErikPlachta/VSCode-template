[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPListToolsResponse

# Interface: MCPListToolsResponse

Defined in: [src/shared/mcpTypes.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/shared/mcpTypes.ts#L59)

JSON-RPC 2.0 payload returned by the MCP server.

## Properties

### error?

> `optional` **error**: `object`

Defined in: [src/shared/mcpTypes.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/shared/mcpTypes.ts#L63)

#### code?

> `optional` **code**: `number`

#### data?

> `optional` **data**: `unknown`

#### message

> **message**: `string`

***

### id

> **id**: `string` \| `number`

Defined in: [src/shared/mcpTypes.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/shared/mcpTypes.ts#L61)

***

### jsonrpc

> **jsonrpc**: `string`

Defined in: [src/shared/mcpTypes.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/shared/mcpTypes.ts#L60)

***

### result?

> `optional` **result**: `object`

Defined in: [src/shared/mcpTypes.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/shared/mcpTypes.ts#L62)

#### tools?

> `optional` **tools**: [`MCPTool`](MCPTool.md)[]
