---
title: Mcp Server Config
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

[mybusiness-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / McpServerConfig

# Interface: McpServerConfig

Defined in: [src/types/applicationConfig.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L22)

MCP server configuration settings.

## Properties

### defaultPort

> **defaultPort**: `number`

Defined in: [src/types/applicationConfig.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L26)

Default port for HTTP server.

---

### embedded

> **embedded**: `object`

Defined in: [src/types/applicationConfig.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L32)

Embedded server settings.

#### autoStart

> **autoStart**: `boolean`

Automatically start embedded server.

#### enabled

> **enabled**: `boolean`

Enable embedded server mode.

---

### protocol

> **protocol**: `"http"` \| `"stdio"` \| `"websocket"`

Defined in: [src/types/applicationConfig.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L24)

Protocol for MCP communication.

---

### retries

> **retries**: `number`

Defined in: [src/types/applicationConfig.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L30)

Number of retry attempts for failed requests.

---

### timeout

> **timeout**: `number`

Defined in: [src/types/applicationConfig.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L28)

Request timeout in milliseconds.

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
