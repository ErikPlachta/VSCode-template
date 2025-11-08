---
title: With Analytics
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / withAnalytics

# Function: withAnalytics()

> **withAnalytics**\<`T`\>(`agentName`, `methodName`, `handler`): `T`

Defined in: [src/shared/analyticsIntegration.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L119)

Analytics middleware for MCP method invocations.

## Type Parameters

### T

`T` _extends_ (...`args`) => `Promise`\<`any`\>

## Parameters

### agentName

`string`

### methodName

`string`

### handler

`T`

## Returns

`T`

- Wrapped handler with analytics tracking.

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
