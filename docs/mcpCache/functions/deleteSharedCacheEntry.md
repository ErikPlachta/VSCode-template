---
title: Delete Shared Cache Entry
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / deleteSharedCacheEntry

# Function: deleteSharedCacheEntry()

> **deleteSharedCacheEntry**(`cacheDir`, `key`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:175](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L175)

Remove a shared cache entry when it is no longer relevant.

## Parameters

### cacheDir

`string`

Directory returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### key

`string`

Cache entry key to delete.

## Returns

`Promise`\<`void`\>

- Resolves when the entry has been removed or did not exist.

## Throws

- When the delete operation fails for reasons other than missing files.

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
