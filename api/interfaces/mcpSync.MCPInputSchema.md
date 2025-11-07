[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpSync](../modules/mcpSync.md) / MCPInputSchema

# Interface: MCPInputSchema

[mcpSync](../modules/mcpSync.md).MCPInputSchema

Minimal JSON schema definition used by MCP tool payloads.

## Table of contents

### Properties

- [properties](mcpSync.MCPInputSchema.md#properties)
- [required](mcpSync.MCPInputSchema.md#required)

## Properties

### properties

• `Optional` **properties**: `Record`\<`string`, [`MCPProperty`](mcpSync.MCPProperty.md) & `Record`\<`string`, `unknown`\>\>

Map of argument names to property descriptors.

#### Defined in

[src/mcpSync.ts:33](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L33)

___

### required

• `Optional` **required**: `string`[]

List of keys that must be present.

#### Defined in

[src/mcpSync.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/ab2acd92bf7619039c24f1f105bd13e718bc0d1f/src/mcpSync.ts#L35)
