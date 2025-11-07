[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / mcpSync

# Module: mcpSync

**`Fileoverview`**

Fetches and normalises Model Context Protocol (MCP) tool
definitions.

## Table of contents

### References

- [MCPInputSchema](mcpSync.md#mcpinputschema)
- [MCPListToolsResponse](mcpSync.md#mcplisttoolsresponse)
- [MCPProperty](mcpSync.md#mcpproperty)
- [MCPTool](mcpSync.md#mcptool)

### Classes

- [MCPDiscoveryError](../classes/mcpSync.MCPDiscoveryError.md)

### Functions

- [fetchTools](mcpSync.md#fetchtools)

## References

### MCPInputSchema

Re-exports [MCPInputSchema](../interfaces/shared_mcpTypes.MCPInputSchema.md)

___

### MCPListToolsResponse

Re-exports [MCPListToolsResponse](../interfaces/shared_mcpTypes.MCPListToolsResponse.md)

___

### MCPProperty

Re-exports [MCPProperty](../interfaces/shared_mcpTypes.MCPProperty.md)

___

### MCPTool

Re-exports [MCPTool](../interfaces/shared_mcpTypes.MCPTool.md)

## Functions

### fetchTools

▸ **fetchTools**(`serverUrl`, `token?`): `Promise`\<[`MCPTool`](../interfaces/shared_mcpTypes.MCPTool.md)[]\>

Fetch all available MCP tools from the configured server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `serverUrl` | `string` | Base URL of the MCP server. |
| `token?` | `string` | Optional Bearer token. |

#### Returns

`Promise`\<[`MCPTool`](../interfaces/shared_mcpTypes.MCPTool.md)[]\>

Array of available MCP tools with enriched metadata.

**`Throws`**

When the server cannot be reached or returns an invalid payload.

**`Example`**

```ts
const tools = await fetchTools("https://mcp.example.com", "token");
console.log(tools.length);
```

#### Defined in

[src/extension/mcpSync.ts:72](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/extension/mcpSync.ts#L72)
