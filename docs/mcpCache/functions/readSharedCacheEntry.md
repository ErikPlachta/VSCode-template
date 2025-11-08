---
title: Read Shared Cache Entry
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / readSharedCacheEntry

# Function: readSharedCacheEntry()

> **readSharedCacheEntry**\<`T`\>(`cacheDir`, `key`): `Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\> \| `undefined`\>

Defined in: [src/extension/mcpCache.ts:118](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L118)

Retrieve a shared cache entry by key.

## Type Parameters

### T

`T` = `unknown`

## Parameters

### cacheDir

`string`

Directory returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### key

`string`

Unique cache entry key.

## Returns

`Promise`\<[`SharedCacheEntry`](../interfaces/SharedCacheEntry.md)\<`T`\> \| `undefined`\>

- Stored entry or `undefined` if not found.

## Throws

- When the file exists but cannot be read.


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
