---
title: Log Invocation
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / logInvocation

# Function: logInvocation()

> **logInvocation**(`cacheDir`, `entry`): `Promise`\<`void`\>

Defined in: [src/extension/mcpCache.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L80)

Append an invocation log entry to `.mcp-cache/invocations.jsonl`.

## Parameters

### cacheDir

`string`

Directory returned by [ensureCacheDirectory](ensureCacheDirectory.md).

### entry

[`ToolLogEntry`](../interfaces/ToolLogEntry.md)

Log entry to persist.

## Returns

`Promise`\<`void`\>

- Resolves when the entry has been appended.

## Throws

- When the log file cannot be written.


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
