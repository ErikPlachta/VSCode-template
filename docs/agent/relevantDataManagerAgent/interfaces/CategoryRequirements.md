---
title: Category Requirements
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / CategoryRequirements

# Interface: CategoryRequirements

Defined in: [src/agent/relevantDataManagerAgent/index.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L62)

Requirements that each category must satisfy before being processed.

## Properties

### notes?

> `optional` **notes**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L68)

Free-form notes surfaced to orchestration layers.

---

### requiredRecordFields

> **requiredRecordFields**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L64)

Fields that every record must provide.

---

### requiredRelationshipFields?

> `optional` **requiredRelationshipFields**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L66)

Record properties that should align with relationship definitions.

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
