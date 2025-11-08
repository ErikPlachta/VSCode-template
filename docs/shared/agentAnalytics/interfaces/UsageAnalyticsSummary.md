---
title: Usage Analytics Summary
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / UsageAnalyticsSummary

# Interface: UsageAnalyticsSummary

Defined in: [src/shared/agentAnalytics.ts:74](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L74)

Usage analytics summary across all agents.

## Properties

### agentStats

> **agentStats**: [`AgentUsageStats`](AgentUsageStats.md)[]

Defined in: [src/shared/agentAnalytics.ts:84](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L84)

Per-agent statistics.

***

### averageResponseTime

> **averageResponseTime**: `number`

Defined in: [src/shared/agentAnalytics.ts:88](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L88)

Average response time across all agents.

***

### highestErrorRateAgent

> **highestErrorRateAgent**: `string`

Defined in: [src/shared/agentAnalytics.ts:92](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L92)

Agent with highest error rate.

***

### mostUsedAgent

> **mostUsedAgent**: `string`

Defined in: [src/shared/agentAnalytics.ts:90](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L90)

Most frequently used agent.

***

### overallSuccessRate

> **overallSuccessRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:86](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L86)

Overall success rate across all agents.

***

### periodEnd

> **periodEnd**: `Date`

Defined in: [src/shared/agentAnalytics.ts:82](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L82)

End of time period covered.

***

### periodStart

> **periodStart**: `Date`

Defined in: [src/shared/agentAnalytics.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L80)

Time period covered by the summary.

***

### timestamp

> **timestamp**: `Date`

Defined in: [src/shared/agentAnalytics.ts:76](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L76)

Summary generation timestamp.

***

### totalEvents

> **totalEvents**: `number`

Defined in: [src/shared/agentAnalytics.ts:78](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L78)

Total events processed.


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
