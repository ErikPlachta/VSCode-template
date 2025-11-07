[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [shared/mcpTypes](../modules/shared_mcpTypes.md) / MCPTool

# Interface: MCPTool

[shared/mcpTypes](../modules/shared_mcpTypes.md).MCPTool

Full MCP tool definition returned by `listTools`.

## Table of contents

### Properties

- [description](shared_mcpTypes.MCPTool.md#description)
- [input\_schema](shared_mcpTypes.MCPTool.md#input_schema)
- [name](shared_mcpTypes.MCPTool.md#name)
- [summary](shared_mcpTypes.MCPTool.md#summary)
- [tags](shared_mcpTypes.MCPTool.md#tags)
- [title](shared_mcpTypes.MCPTool.md#title)

## Properties

### description

• **description**: `string`

Rich description detailing the tool purpose.

#### Defined in

[src/shared/mcpTypes.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L39)

___

### input\_schema

• `Optional` **input\_schema**: [`MCPInputSchema`](shared_mcpTypes.MCPInputSchema.md)

JSON schema describing the tool arguments.

#### Defined in

[src/shared/mcpTypes.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L45)

___

### name

• **name**: `string`

Machine-readable tool identifier.

#### Defined in

[src/shared/mcpTypes.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L35)

___

### summary

• `Optional` **summary**: `string`

Optional extended summary for reference content.

#### Defined in

[src/shared/mcpTypes.ts:41](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L41)

___

### tags

• `Optional` **tags**: `string`[]

Optional category or tags provided by the MCP server.

#### Defined in

[src/shared/mcpTypes.ts:43](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L43)

___

### title

• **title**: `string`

Title displayed to VS Code users.

#### Defined in

[src/shared/mcpTypes.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/shared/mcpTypes.ts#L37)
