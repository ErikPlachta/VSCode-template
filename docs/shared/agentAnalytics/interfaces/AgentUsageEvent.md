---
title: Agent Usage Event
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageEvent

# Interface: AgentUsageEvent

Defined in: [src/shared/agentAnalytics.ts:18](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L18)

Agent usage event data structure.

## Properties

### agentName

> **agentName**: `string`

Defined in: [src/shared/agentAnalytics.ts:24](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L24)

Name of the agent that was invoked.

---

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [src/shared/agentAnalytics.ts:36](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L36)

Error message if execution failed.

---

### executionTime

> **executionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:30](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L30)

Duration of execution in milliseconds.

---

### id

> **id**: `string`

Defined in: [src/shared/agentAnalytics.ts:20](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L20)

Unique identifier for the event.

---

### inputSize

> **inputSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:32](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L32)

Input parameters passed to the agent.

---

### metadata?

> `optional` **metadata**: `Record`\<`string`, `any`\>

Defined in: [src/shared/agentAnalytics.ts:40](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L40)

Additional context metadata.

---

### method

> **method**: `string`

Defined in: [src/shared/agentAnalytics.ts:26](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L26)

Method or operation that was called.

---

### outputSize

> **outputSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L34)

Output data size in bytes.

---

### status

> **status**: [`AgentExecutionStatus`](../enumerations/AgentExecutionStatus.md)

Defined in: [src/shared/agentAnalytics.ts:28](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L28)

Execution status of the agent call.

---

### timestamp

> **timestamp**: `Date`

Defined in: [src/shared/agentAnalytics.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L22)

Timestamp when the event occurred.

---

### userId?

> `optional` **userId**: `string`

Defined in: [src/shared/agentAnalytics.ts:38](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L38)

User or session identifier.

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
