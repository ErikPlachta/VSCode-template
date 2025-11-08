---
title: MCPProperty
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/mcpTypes](../README.md) / MCPProperty

# Interface: MCPProperty

Defined in: [src/shared/mcpTypes.ts:11](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L11)

JSON schema fragment describing a tool argument.

## Properties

### default?

> `optional` **default**: `unknown`

Defined in: [src/shared/mcpTypes.ts:21](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L21)

Suggested default value supplied by the backend.

***

### description?

> `optional` **description**: `string`

Defined in: [src/shared/mcpTypes.ts:17](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L17)

Human readable description for prompts and docs.

***

### enum?

> `optional` **enum**: `string`[]

Defined in: [src/shared/mcpTypes.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L19)

Static enumeration, if provided by the schema.

***

### items?

> `optional` **items**: `MCPProperty`

Defined in: [src/shared/mcpTypes.ts:23](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L23)

Nested item type for array arguments.

***

### name

> **name**: `string`

Defined in: [src/shared/mcpTypes.ts:13](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L13)

Argument identifier used when invoking the tool.

***

### required?

> `optional` **required**: `boolean`

Defined in: [src/shared/mcpTypes.ts:25](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L25)

Whether the parameter is required.

***

### type?

> `optional` **type**: `string` \| `string`[]

Defined in: [src/shared/mcpTypes.ts:15](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/mcpTypes.ts#L15)

Primitive type such as `string`, `number`, `boolean`, or `array`.


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
