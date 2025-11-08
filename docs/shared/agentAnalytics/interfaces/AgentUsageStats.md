---
title: Agent Usage Stats
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AgentUsageStats

# Interface: AgentUsageStats

Defined in: [src/shared/agentAnalytics.ts:46](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L46)

Aggregated usage statistics for an agent.

## Properties

### agentName

> **agentName**: `string`

Defined in: [src/shared/agentAnalytics.ts:48](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L48)

Agent name.

***

### averageExecutionTime

> **averageExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:56](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L56)

Average execution time in milliseconds.

***

### failedInvocations

> **failedInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:54](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L54)

Number of failed invocations.

***

### lastInvocation

> **lastInvocation**: `Date`

Defined in: [src/shared/agentAnalytics.ts:66](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L66)

Most recent invocation timestamp.

***

### maxExecutionTime

> **maxExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:60](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L60)

Maximum execution time in milliseconds.

***

### minExecutionTime

> **minExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:58](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L58)

Minimum execution time in milliseconds.

***

### mostUsedMethod

> **mostUsedMethod**: `string`

Defined in: [src/shared/agentAnalytics.ts:68](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L68)

Most frequently called method.

***

### successfulInvocations

> **successfulInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L52)

Number of successful invocations.

***

### successRate

> **successRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:64](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L64)

Success rate as a percentage.

***

### totalExecutionTime

> **totalExecutionTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:62](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L62)

Total execution time in milliseconds.

***

### totalInvocations

> **totalInvocations**: `number`

Defined in: [src/shared/agentAnalytics.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L50)

Total number of invocations.


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
