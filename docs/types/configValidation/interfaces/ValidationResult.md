---
title: Validation Result
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

[mybusiness-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationResult

# Interface: ValidationResult

Defined in: [src/types/configValidation.ts:14](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L14)

Validation result with detailed error information

## Properties

### errors

> **errors**: [`ValidationError`](ValidationError.md)[]

Defined in: [src/types/configValidation.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L19)

List of validation errors found

***

### isValid

> **isValid**: `boolean`

Defined in: [src/types/configValidation.ts:16](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L16)

Whether validation passed

***

### warnings

> **warnings**: [`ValidationWarning`](ValidationWarning.md)[]

Defined in: [src/types/configValidation.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L22)

List of validation warnings (non-blocking issues)


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
