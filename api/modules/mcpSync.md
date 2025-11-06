[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpSync

# Module: mcpSync

## Table of contents

### Classes

- [MCPDiscoveryError](../classes/mcpSync.MCPDiscoveryError.md)

### Interfaces

- [MCPInputSchema](../interfaces/mcpSync.MCPInputSchema.md)
- [MCPListToolsResponse](../interfaces/mcpSync.MCPListToolsResponse.md)
- [MCPProperty](../interfaces/mcpSync.MCPProperty.md)
- [MCPTool](../interfaces/mcpSync.MCPTool.md)

### Functions

- [fetchTools](mcpSync.md#fetchtools)

## Functions

### fetchTools

▸ **fetchTools**(`serverUrl`, `token?`): `Promise`\<[`MCPTool`](../interfaces/mcpSync.MCPTool.md)[]\>

Fetch all available MCP tools from the configured server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverUrl` | `string` | Base URL of the MCP server. |
| `token?` | `string` | Optional Bearer token. |

#### Returns

`Promise`\<[`MCPTool`](../interfaces/mcpSync.MCPTool.md)[]\>

Array of available MCP tools with enriched metadata.

**`Throws`**

when the server cannot be reached or returns an
invalid payload.

#### Defined in

[src/mcpSync.ts:111](https://github.com/ErikPlachta/VSCode-template/blob/cdb46a59e46fc5b0b0e1bb6229c876631a15aa98/src/mcpSync.ts#L111)
