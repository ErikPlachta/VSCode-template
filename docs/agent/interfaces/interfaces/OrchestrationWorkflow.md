---
title: Orchestration Workflow
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/interfaces](../README.md) / OrchestrationWorkflow

# Interface: OrchestrationWorkflow

Defined in: [src/agent/interfaces.ts:241](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L241)

Orchestrator workflow for handling user requests:
1. Parse user input and classify intent
2. If ambiguous -> ClarificationAgent
3. If data needed -> RelevantDataManagerAgent (for schemas/metadata)
4. If query needed -> DatabaseAgent (for data retrieval)
5. If analysis needed -> DataAgent (for insights)
6. Coordinate results and respond to user

## Properties

### agentRequests

> **agentRequests**: [`AgentRequest`](AgentRequest.md)[]

Defined in: [src/agent/interfaces.ts:245](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L245)

***

### agentResponses

> **agentResponses**: [`AgentResponse`](AgentResponse.md)\<`unknown`\>[]

Defined in: [src/agent/interfaces.ts:246](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L246)

***

### classifiedIntent

> **classifiedIntent**: `string`

Defined in: [src/agent/interfaces.ts:243](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L243)

***

### finalResponse

> **finalResponse**: `string`

Defined in: [src/agent/interfaces.ts:247](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L247)

***

### requiredAgents

> **requiredAgents**: `string`[]

Defined in: [src/agent/interfaces.ts:244](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L244)

***

### userQuery

> **userQuery**: `string`

Defined in: [src/agent/interfaces.ts:242](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/interfaces.ts#L242)


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
