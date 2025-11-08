[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPTool

# Interface: MCPTool

Defined in: [src/shared/mcpTypes.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L40)

Full MCP tool definition returned by `listTools`.

## Properties

### description

> **description**: `string`

Defined in: [src/shared/mcpTypes.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L46)

Rich description detailing the tool purpose.

***

### input\_schema?

> `optional` **input\_schema**: [`MCPInputSchema`](MCPInputSchema.md)

Defined in: [src/shared/mcpTypes.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L52)

JSON schema describing the tool arguments.

***

### name

> **name**: `string`

Defined in: [src/shared/mcpTypes.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L42)

Machine-readable tool identifier.

***

### summary?

> `optional` **summary**: `string`

Defined in: [src/shared/mcpTypes.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L48)

Optional extended summary for reference content.

***

### tags?

> `optional` **tags**: `string`[]

Defined in: [src/shared/mcpTypes.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L50)

Optional category or tags provided by the MCP server.

***

### title

> **title**: `string`

Defined in: [src/shared/mcpTypes.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a3104d879c581e8ecb29b10b43df8e8ea52971d4/src/shared/mcpTypes.ts#L44)

Title displayed to VS Code users.
