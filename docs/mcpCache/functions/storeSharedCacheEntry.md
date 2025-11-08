---
title: Store Shared Cache Entry
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / storeSharedCacheEntry

# Function: storeSharedCacheEntry()

> **storeSharedCacheEntry**\<`T`\>(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:98](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L98)

Persist a shared cache entry that can be re-used by other MCP tools.

## Type Parameters

### T

`T`

## Parameters

### cacheDir

`string`

Directory returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### entry

[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\>

Payload to store on disk.

## Returns

`Promise`\<`void`\>

- Resolves when the entry has been written.

## Throws

- When the entry cannot be persisted.


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
