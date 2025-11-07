[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [mcpSync](../modules/mcpSync.md) / MCPTool

# Interface: MCPTool

[mcpSync](../modules/mcpSync.md).MCPTool

Full MCP tool definition returned by `listTools`.

## Table of contents

### Properties

- [description](mcpSync.MCPTool.md#description)
- [input\_schema](mcpSync.MCPTool.md#input_schema)
- [name](mcpSync.MCPTool.md#name)
- [summary](mcpSync.MCPTool.md#summary)
- [tags](mcpSync.MCPTool.md#tags)
- [title](mcpSync.MCPTool.md#title)

## Properties

### description

• **description**: `string`

Rich description detailing the tool purpose.

#### Defined in

[src/mcpSync.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L49)

___

### input\_schema

• `Optional` **input\_schema**: [`MCPInputSchema`](mcpSync.MCPInputSchema.md)

JSON schema describing the tool arguments.

#### Defined in

[src/mcpSync.ts:55](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L55)

___

### name

• **name**: `string`

Machine-readable tool identifier.

#### Defined in

[src/mcpSync.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L45)

___

### summary

• `Optional` **summary**: `string`

Optional extended summary for reference content.

#### Defined in

[src/mcpSync.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L51)

___

### tags

• `Optional` **tags**: `string`[]

Optional category or tags provided by the MCP server.

#### Defined in

[src/mcpSync.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L53)

___

### title

• **title**: `string`

Title displayed to VS Code users.

#### Defined in

[src/mcpSync.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/mcpSync.ts#L47)
