[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [extension/mcpRegistration](../README.md) / ensureRegistration

# Function: ensureRegistration()

> **ensureRegistration**(`opts`, `pathOptions?`): `Promise`\<`string`\>

Defined in: [src/extension/mcpRegistration.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/extension/mcpRegistration.ts#L244)

Ensure an MCP server entry exists in mcp.json for Copilot Chat.
Supports both stdio and HTTP transports using the legacy format.

## Parameters

### opts

[`RegistrationOptions`](../interfaces/RegistrationOptions.md)

Registration parameters describing the server.

### pathOptions?

[`McpConfigPathOptions`](../interfaces/McpConfigPathOptions.md) = `{}`

Optional overrides used to resolve the configuration path.

## Returns

`Promise`\<`string`\>

Absolute path to the written `mcp.json` file.
