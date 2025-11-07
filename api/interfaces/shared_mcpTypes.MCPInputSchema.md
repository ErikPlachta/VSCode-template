[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [shared/mcpTypes](../modules/shared_mcpTypes.md) / MCPInputSchema

# Interface: MCPInputSchema

[shared/mcpTypes](../modules/shared_mcpTypes.md).MCPInputSchema

Minimal JSON schema definition used by MCP tool payloads.

## Table of contents

### Properties

- [properties](shared_mcpTypes.MCPInputSchema.md#properties)
- [required](shared_mcpTypes.MCPInputSchema.md#required)

## Properties

### properties

• `Optional` **properties**: `Record`\<`string`, [`MCPProperty`](shared_mcpTypes.MCPProperty.md) & `Record`\<`string`, `unknown`\>\>

Map of argument names to property descriptors.

#### Defined in

[src/shared/mcpTypes.ts:27](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/shared/mcpTypes.ts#L27)

___

### required

• `Optional` **required**: `string`[]

List of keys that must be present.

#### Defined in

[src/shared/mcpTypes.ts:29](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/shared/mcpTypes.ts#L29)
