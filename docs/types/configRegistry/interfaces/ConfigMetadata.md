---
title: Config Metadata
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

[mybusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigMetadata

# Interface: ConfigMetadata

Defined in: [src/types/configRegistry.ts:46](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L46)

Configuration metadata for each schema ID

## Properties

### agentType

> **agentType**: `string`

Defined in: [src/types/configRegistry.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L64)

Agent type this configuration is for

---

### breakingChanges?

> `optional` **breakingChanges**: `string`[]

Defined in: [src/types/configRegistry.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L70)

List of breaking changes from previous versions

---

### createdDate

> **createdDate**: `string`

Defined in: [src/types/configRegistry.ts:67](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L67)

Date this schema version was created

---

### description

> **description**: `string`

Defined in: [src/types/configRegistry.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L61)

Description of what this configuration schema covers

---

### id

> **id**: `string`

Defined in: [src/types/configRegistry.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L48)

Unique configuration ID

---

### migrationNotes?

> `optional` **migrationNotes**: `string`[]

Defined in: [src/types/configRegistry.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L73)

Migration notes for upgrading from previous versions

---

### name

> **name**: `string`

Defined in: [src/types/configRegistry.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L51)

Human-readable name

---

### version

> **version**: `object`

Defined in: [src/types/configRegistry.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L54)

Version information

#### major

> **major**: `number`

#### minor

> **minor**: `number`

#### patch

> **patch**: `number`

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
