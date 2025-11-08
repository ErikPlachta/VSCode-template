---
title: Data Validation Issue
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DataValidationIssue

# Interface: DataValidationIssue

Defined in: [src/agent/relevantDataManagerAgent/index.ts:113](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L113)

Issue detected while validating the raw data set for a category.

## Properties

### field?

> `optional` **field**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L119)

Field that failed validation if available.

---

### message

> **message**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:121](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L121)

Detailed error message.

---

### recordId

> **recordId**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L115)

Identifier for the record that failed validation.

---

### schema?

> `optional` **schema**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:117](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L117)

Optional schema name that triggered the error.

---

### type

> **type**: `"schema"` \| `"relationship"`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:123](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L123)

Type of validation that generated the issue.

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
