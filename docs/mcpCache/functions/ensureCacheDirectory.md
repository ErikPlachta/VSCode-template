---
title: Ensure Cache Directory
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

[mybusiness-mcp-extension](../../modules.md) / [mcpCache](../README.md) / ensureCacheDirectory

# Function: ensureCacheDirectory()

> **ensureCacheDirectory**(): `Promise`\<`string`\>

Defined in: [src/extension/mcpCache.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/extension/mcpCache.ts#L64)

Ensure the workspace has a `.mcp-cache` directory and return its path.

The directory is created in the current workspace when available, otherwise
the user's home directory is used as a fallback. This keeps diagnostic logs
local to the client, reducing storage pressure on the MCP backend.

## Returns

`Promise`\<`string`\>

- Absolute path to the cache directory.

## Throws

- When the directory cannot be created.

## Example

```ts
const cacheDir = await ensureCacheDirectory();
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
