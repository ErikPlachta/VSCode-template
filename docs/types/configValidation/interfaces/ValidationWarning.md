---
title: Validation Warning
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

[mybusiness-mcp-extension](../../../modules.md) / [types/configValidation](../README.md) / ValidationWarning

# Interface: ValidationWarning

Defined in: [src/types/configValidation.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L51)

Validation warning (non-blocking issue)

## Extends

- `Omit`\<[`ValidationError`](ValidationError.md), `"level"`\>

## Properties

### actual?

> `optional` **actual**: `unknown`

Defined in: [src/types/configValidation.ts:45](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L45)

Actual value found

#### Inherited from

[`ValidationError`](ValidationError.md).[`actual`](ValidationError.md#actual)

---

### category

> **category**: `"schema"` \| `"type"` \| `"business_rule"` \| `"compatibility"`

Defined in: [src/types/configValidation.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L33)

Error category

#### Inherited from

[`ValidationError`](ValidationError.md).[`category`](ValidationError.md#category)

---

### expected?

> `optional` **expected**: `unknown`

Defined in: [src/types/configValidation.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L42)

Expected value or format

#### Inherited from

[`ValidationError`](ValidationError.md).[`expected`](ValidationError.md#expected)

---

### level

> **level**: `"warning"`

Defined in: [src/types/configValidation.ts:52](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L52)

---

### message

> **message**: `string`

Defined in: [src/types/configValidation.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L39)

Human-readable error message

#### Inherited from

[`ValidationError`](ValidationError.md).[`message`](ValidationError.md#message)

---

### path

> **path**: `string`

Defined in: [src/types/configValidation.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configValidation.ts#L36)

JSON path to the problematic field

#### Inherited from

[`ValidationError`](ValidationError.md).[`path`](ValidationError.md#path)

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
