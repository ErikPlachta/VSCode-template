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

[src/mcpSync.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpSync.ts#L35)

___

### required

• `Optional` **required**: `string`[]

List of keys that must be present.

#### Defined in

[src/mcpSync.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/3add38c617db9bafb49bb7828d0abe48e22be359/src/mcpSync.ts#L37)
