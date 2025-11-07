[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpSync](../modules/mcpSync.md) / MCPListToolsResponse

# Interface: MCPListToolsResponse

[mcpSync](../modules/mcpSync.md).MCPListToolsResponse

JSON-RPC 2.0 payload returned by the MCP server.

## Table of contents

### Properties

- [error](mcpSync.MCPListToolsResponse.md#error)
- [id](mcpSync.MCPListToolsResponse.md#id)
- [jsonrpc](mcpSync.MCPListToolsResponse.md#jsonrpc)
- [result](mcpSync.MCPListToolsResponse.md#result)

## Properties

### error

• `Optional` **error**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `data?` | `unknown` |
| `message` | `string` |

#### Defined in

[src/mcpSync.ts:63](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L63)

___

### id

• **id**: `string` \| `number`

#### Defined in

[src/mcpSync.ts:61](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L61)

___

### jsonrpc

• **jsonrpc**: `string`

#### Defined in

[src/mcpSync.ts:60](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L60)

___

### result

• `Optional` **result**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tools?` | [`MCPTool`](mcpSync.MCPTool.md)[] |

#### Defined in

[src/mcpSync.ts:62](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L62)
