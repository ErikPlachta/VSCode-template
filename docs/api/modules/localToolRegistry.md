[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / localToolRegistry

# Module: localToolRegistry

## Table of contents

### Classes

- [LocalToolError](../classes/localToolRegistry.LocalToolError.md)

### Variables

- [LOCAL_MCP_TOOLS](localToolRegistry.md#local_mcp_tools)

### Functions

- [invokeLocalTool](localToolRegistry.md#invokelocaltool)
- [listLocalTools](localToolRegistry.md#listlocaltools)

## Variables

### LOCAL_MCP_TOOLS

• **LOCAL_MCP_TOOLS**: `MCPTool`[]

Catalogue of the MCP tools that ship with the extension.

#### Defined in

src/mcp/localToolRegistry.ts:75

## Functions

### invokeLocalTool

▸ **invokeLocalTool**(`name`, `args?`): `Promise`\<`unknown`\>

Execute a local MCP tool implementation using the bundled datasets.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | Tool identifier to run. |
| `args` | `Record`\<`string`, `unknown`\> | Arguments supplied by the chat participant. |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

src/mcp/localToolRegistry.ts:108

___

### listLocalTools

▸ **listLocalTools**(): `Promise`\<`MCPTool`[]\>

Return the locally available MCP tool catalogue.

#### Returns

`Promise`\<`MCPTool`[]\>

#### Defined in

src/mcp/localToolRegistry.ts:100
