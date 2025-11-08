---
title: MCPList Tools Response
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

[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

---

[mybusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPListToolsResponse

# Interface: MCPListToolsResponse

Defined in: [src/shared/mcpTypes.ts:53](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L53)

JSON-RPC 2.0 payload returned by the MCP server.

## Properties

### error?

> `optional` **error**: `object`

Defined in: [src/shared/mcpTypes.ts:57](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L57)

#### code?

> `optional` **code**: `number`

#### data?

> `optional` **data**: `unknown`

#### message

> **message**: `string`

---

### id

> **id**: `string` \| `number`

Defined in: [src/shared/mcpTypes.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L55)

---

### jsonrpc

> **jsonrpc**: `string`

Defined in: [src/shared/mcpTypes.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L54)

---

### result?

> `optional` **result**: `object`

Defined in: [src/shared/mcpTypes.ts:56](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L56)

#### tools?

> `optional` **tools**: [`MCPTool`](MCPTool.md)[]

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
