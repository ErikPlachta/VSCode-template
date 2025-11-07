[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpSync

# Module: mcpSync

**`Fileoverview`**

Fetches and normalises Model Context Protocol (MCP) tool
definitions.

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

When the server cannot be reached or returns an invalid payload.

**`Example`**

```ts
const tools = await fetchTools("https://mcp.example.com", "token");
console.log(tools.length);
```

#### Defined in

[src/mcpSync.ts:129](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/mcpSync.ts#L129)
