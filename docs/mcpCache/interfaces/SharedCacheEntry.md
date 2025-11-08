---
title: Shared Cache Entry
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / SharedCacheEntry

# Interface: SharedCacheEntry\<T\>

Defined in: [src/extension/mcpCache.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L19)

Minimal representation of a cached artefact that can be exchanged across
MCP tools.

## Type Parameters

### T

`T` = `unknown`

## Properties

### key

> **key**: `string`

Defined in: [src/extension/mcpCache.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L21)

Uniquely identifies the record on disk.

***

### metadata?

> `optional` **metadata**: `Record`\<`string`, `unknown`\>

Defined in: [src/extension/mcpCache.ts:29](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L29)

Optional metadata hints for downstream orchestration.

***

### timestamp

> **timestamp**: `string`

Defined in: [src/extension/mcpCache.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L25)

Timestamp recorded when the value was persisted.

***

### toolName

> **toolName**: `string`

Defined in: [src/extension/mcpCache.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L23)

Name of the tool that produced the cached payload.

***

### value

> **value**: `T`

Defined in: [src/extension/mcpCache.ts:27](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L27)

Arbitrary payload produced by the tool.


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
