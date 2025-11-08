---
title: Rich Metadata
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

[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

---

[mybusiness-mcp-extension](../../../../modules.md) / [mcp/config/unifiedAgentConfig](../README.md) / RichMetadata

# Interface: RichMetadata

Defined in: [src/mcp/config/unifiedAgentConfig.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L38)

Rich metadata for user and application interfaces

## Properties

### applicationFacing

> **applicationFacing**: `object`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:51](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L51)

#### dependencies

> **dependencies**: `string`[]

#### errorHandling

> **errorHandling**: `object`

##### errorHandling.fallbackAgent?

> `optional` **fallbackAgent**: `string`

##### errorHandling.maxRetries

> **maxRetries**: `number`

##### errorHandling.retryStrategy

> **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

#### monitoring

> **monitoring**: `object`

##### monitoring.alertThresholds

> **alertThresholds**: `object`

##### monitoring.alertThresholds.error_rate_percent

> **error_rate_percent**: `number`

##### monitoring.alertThresholds.response_time_ms

> **response_time_ms**: `number`

##### monitoring.metricsToTrack

> **metricsToTrack**: `string`[]

#### performance

> **performance**: `object`

##### performance.complexity

> **complexity**: `"high"` \| `"medium"` \| `"low"`

##### performance.expectedResponseTime

> **expectedResponseTime**: `number`

##### performance.memoryUsage

> **memoryUsage**: `"high"` \| `"medium"` \| `"low"`

#### technicalDescription

> **technicalDescription**: `string`

---

### capabilities

> **capabilities**: `string`[]

Defined in: [src/mcp/config/unifiedAgentConfig.ts:43](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L43)

---

### className

> **className**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:42](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L42)

---

### displayName

> **displayName**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L41)

---

### label

> **label**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L40)

---

### name

> **name**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:39](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L39)

---

### responsibility

> **responsibility**: `string`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:44](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L44)

---

### userFacing

> **userFacing**: `object`

Defined in: [src/mcp/config/unifiedAgentConfig.ts:45](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/unifiedAgentConfig.ts#L45)

#### exampleQueries

> **exampleQueries**: `string`[]

#### friendlyDescription

> **friendlyDescription**: `string`

#### helpText

> **helpText**: `string`

#### useWhen

> **useWhen**: `string`[]

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
