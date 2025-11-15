[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpProvider](../README.md) / registerMcpProvider

# Function: registerMcpProvider()

> **registerMcpProvider**(`serverUrl`, `token`, `includeAuthHeader`, `context`): `void`

Defined in: [src/extension/mcpProvider.ts:16](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/extension/mcpProvider.ts#L16)

Register a McpServerDefinitionProvider to let VS Code discover the embedded MCP server.

## Parameters

### serverUrl

`string`

MCP server URL (ignored for stdio definition but kept for future expansion).

### token

`string`

Authentication token to use when contacting the server.

### includeAuthHeader

`boolean`

Whether to include the auth token as an HTTP header.

### context

`ExtensionContext`

Extension context for managing disposables.

## Returns

`void`

Nothing is returned; disposables are pushed to the provided context.
