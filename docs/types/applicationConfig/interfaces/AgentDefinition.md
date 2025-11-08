---
title: Agent Definition
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

[mybusiness-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / AgentDefinition

# Interface: AgentDefinition

Defined in: [src/types/applicationConfig.ts:60](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L60)

Agent definition with comprehensive metadata.

## Properties

### applicationFacing?

> `optional` **applicationFacing**: `object`

Defined in: [src/types/applicationConfig.ts:87](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L87)

Application-facing metadata for improved logging/logic.

#### dependencies?

> `optional` **dependencies**: `string`[]

Dependencies on other agents.

#### errorHandling?

> `optional` **errorHandling**: `object`

Error handling strategies.

##### errorHandling.fallbackAgent?

> `optional` **fallbackAgent**: `string`

##### errorHandling.maxRetries?

> `optional` **maxRetries**: `number`

##### errorHandling.retryStrategy?

> `optional` **retryStrategy**: `"none"` \| `"fixed"` \| `"exponential"`

#### monitoring?

> `optional` **monitoring**: `object`

Monitoring and metrics.

##### monitoring.alertThresholds?

> `optional` **alertThresholds**: `Record`\<`string`, `number`\>

##### monitoring.healthCheckEndpoint?

> `optional` **healthCheckEndpoint**: `string`

##### monitoring.metricsToTrack?

> `optional` **metricsToTrack**: `string`[]

#### performance?

> `optional` **performance**: `object`

Performance characteristics.

##### performance.complexity?

> `optional` **complexity**: `"high"` \| `"medium"` \| `"low"`

##### performance.expectedResponseTime?

> `optional` **expectedResponseTime**: `number`

##### performance.memoryUsage?

> `optional` **memoryUsage**: `string`

#### technicalDescription?

> `optional` **technicalDescription**: `string`

Detailed technical description.

---

### capabilities

> **capabilities**: `string`[]

Defined in: [src/types/applicationConfig.ts:72](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L72)

List of capabilities this agent provides.

---

### className

> **className**: `string`

Defined in: [src/types/applicationConfig.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L70)

Class name used for instantiation.

---

### description

> **description**: `string`

Defined in: [src/types/applicationConfig.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L64)

Human-readable description of agent purpose.

---

### displayName

> **displayName**: `string`

Defined in: [src/types/applicationConfig.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L68)

Formal display name for user interfaces.

---

### label

> **label**: `string`

Defined in: [src/types/applicationConfig.ts:66](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L66)

Short label for UI display and templates.

---

### name

> **name**: `string`

Defined in: [src/types/applicationConfig.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L62)

Technical name used in code/imports.

---

### responsibility

> **responsibility**: `string`

Defined in: [src/types/applicationConfig.ts:74](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L74)

Primary responsibility summary.

---

### userFacing?

> `optional` **userFacing**: `object`

Defined in: [src/types/applicationConfig.ts:76](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L76)

User-facing metadata for enhanced UX.

#### exampleQueries?

> `optional` **exampleQueries**: `string`[]

Example user queries.

#### friendlyDescription?

> `optional` **friendlyDescription**: `string`

Friendly description for end users.

#### helpText?

> `optional` **helpText**: `string`

Help text for users.

#### useWhen?

> `optional` **useWhen**: `string`[]

When users should use this agent.

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
