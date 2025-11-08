---
title: Dataset Catalogue Entry
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DatasetCatalogueEntry

# Interface: DatasetCatalogueEntry

Defined in: [src/agent/relevantDataManagerAgent/index.ts:233](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L233)

Consolidated index entry persisted to the shared cache.

## Properties

### description

> **description**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:236](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L236)

---

### id

> **id**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:234](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L234)

---

### name

> **name**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:235](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L235)

---

### primaryKeys

> **primaryKeys**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:237](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L237)

---

### recordIds

> **recordIds**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:238](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L238)

---

### relationships

> **relationships**: `object`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:239](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L239)

#### cardinality

> **cardinality**: `"one"` \| `"many"`

#### name

> **name**: `string`

#### targetCategory

> **targetCategory**: `string`

#### viaField

> **viaField**: `string`

---

### requirements?

> `optional` **requirements**: [`CategoryRequirements`](CategoryRequirements.md)

Defined in: [src/agent/relevantDataManagerAgent/index.ts:246](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L246)

---

### schemaNames

> **schemaNames**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:245](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L245)

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
