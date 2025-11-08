---
title: Data Source
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/databaseAgent](../README.md) / DataSource

# Interface: DataSource

Defined in: [src/agent/databaseAgent/index.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L31)

Definition for a data source the agent can query.

## Properties

### fieldAliases?

> `optional` **fieldAliases**: `Record`\<`string`, `string`\>

Defined in: [src/agent/databaseAgent/index.ts:37](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L37)

Optional field mapping for this data source

---

### id

> **id**: `string`

Defined in: [src/agent/databaseAgent/index.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L32)

---

### name

> **name**: `string`

Defined in: [src/agent/databaseAgent/index.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L33)

---

### records

> **records**: [`CategoryRecord`](CategoryRecord.md)[]

Defined in: [src/agent/databaseAgent/index.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L34)

---

### schema?

> `optional` **schema**: `unknown`

Defined in: [src/agent/databaseAgent/index.ts:35](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L35)

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
