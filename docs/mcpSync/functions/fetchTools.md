---
title: Fetch Tools
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---

[**mybusiness-mcp-extension v1.0.0**](../../README.md)

---

[mybusiness-mcp-extension](../../modules.md) / [mcpSync](../README.md) / fetchTools

# Function: fetchTools()

> **fetchTools**(`serverUrl`, `token?`): `Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

Defined in: [src/extension/mcpSync.ts:72](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpSync.ts#L72)

Fetch all available MCP tools from the configured server.

## Parameters

### serverUrl

`string`

Base URL of the MCP server.

### token?

`string`

Optional Bearer token.

## Returns

`Promise`\<[`MCPTool`](../../shared/mcpTypes/interfaces/MCPTool.md)[]\>

- Array of available MCP tools with enriched metadata.

## Throws

- When the server cannot be reached or returns an invalid payload.

## Example

```ts
const tools = await fetchTools("https://mcp.example.com", "token");
console.log(tools.length);
```

## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
