[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [shared/mcpTypes](../modules/shared_mcpTypes.md) / MCPListToolsResponse

# Interface: MCPListToolsResponse

[shared/mcpTypes](../modules/shared_mcpTypes.md).MCPListToolsResponse

JSON-RPC 2.0 payload returned by the MCP server.

## Table of contents

### Properties

- [error](shared_mcpTypes.MCPListToolsResponse.md#error)
- [id](shared_mcpTypes.MCPListToolsResponse.md#id)
- [jsonrpc](shared_mcpTypes.MCPListToolsResponse.md#jsonrpc)
- [result](shared_mcpTypes.MCPListToolsResponse.md#result)

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

[src/shared/mcpTypes.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L53)

___

### id

• **id**: `string` \| `number`

#### Defined in

[src/shared/mcpTypes.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L51)

___

### jsonrpc

• **jsonrpc**: `string`

#### Defined in

[src/shared/mcpTypes.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L50)

___

### result

• `Optional` **result**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `tools?` | [`MCPTool`](shared_mcpTypes.MCPTool.md)[] |

#### Defined in

[src/shared/mcpTypes.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L52)
