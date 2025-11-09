[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPInputSchema

# Interface: MCPInputSchema

Defined in: [src/shared/mcpTypes.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/mcpTypes.ts#L29)

Minimal JSON schema definition used by MCP tool payloads.

## Properties

### properties?

> `optional` **properties**: `Record`\<`string`, [`MCPProperty`](MCPProperty.md) & `Record`\<`string`, `unknown`\>\>

Defined in: [src/shared/mcpTypes.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/mcpTypes.ts#L31)

Map of argument names to property descriptors.

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/shared/mcpTypes.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/shared/mcpTypes.ts#L33)

List of keys that must be present.
