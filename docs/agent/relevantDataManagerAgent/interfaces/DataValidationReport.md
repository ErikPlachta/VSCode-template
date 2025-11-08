---
title: Data Validation Report
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

***

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / DataValidationReport

# Interface: DataValidationReport

Defined in: [src/agent/relevantDataManagerAgent/index.ts:127](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L127)

Summary produced after normalising the dataset.

## Properties

### checkedAt

> **checkedAt**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:129](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L129)

Timestamp when validation occurred.

***

### issues

> **issues**: [`DataValidationIssue`](DataValidationIssue.md)[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:133](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L133)

Detailed issues encountered during validation.

***

### status

> **status**: `"pass"` \| `"fail"`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:131](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L131)

Overall status for the category.


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
