[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPInputSchema

# Interface: MCPInputSchema

Defined in: [src/shared/mcpTypes.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/mcpTypes.ts#L29)

Minimal JSON schema definition used by MCP tool payloads.

## Properties

### properties?

> `optional` **properties**: `Record`\<`string`, [`MCPProperty`](MCPProperty.md) & `Record`\<`string`, `unknown`\>\>

Defined in: [src/shared/mcpTypes.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/mcpTypes.ts#L31)

Map of argument names to property descriptors.

***

### required?

> `optional` **required**: `string`[]

Defined in: [src/shared/mcpTypes.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/mcpTypes.ts#L33)

List of keys that must be present.
