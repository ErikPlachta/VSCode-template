---
title: Tool Log Entry
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

***

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / ToolLogEntry

# Interface: ToolLogEntry

Defined in: [src/extension/mcpCache.ts:35](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L35)

Structure for log entries persisted inside `.mcp-cache`.

## Properties

### args

> **args**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:41](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L41)

Arguments sent to the MCP server.

***

### context

> **context**: `string`[]

Defined in: [src/extension/mcpCache.ts:43](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L43)

High-level conversation context that accompanied the request.

***

### error?

> `optional` **error**: `string`

Defined in: [src/extension/mcpCache.ts:47](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L47)

Human-readable error message when an invocation fails.

***

### response?

> `optional` **response**: `unknown`

Defined in: [src/extension/mcpCache.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L45)

Raw payload returned by the server, if any.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:37](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L37)

ISO timestamp when the invocation took place.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L39)

Tool identifier that generated the log entry.


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
