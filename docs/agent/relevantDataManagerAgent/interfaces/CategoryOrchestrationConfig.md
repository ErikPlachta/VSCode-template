---
title: Category Orchestration Config
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

Defined in: [src/agent/relevantDataManagerAgent/index.ts:170](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L170)

## Properties

### agents

> **agents**: `object`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:178](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L178)

Agent-specific routing guidance.

#### dataAgent

> **dataAgent**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

#### databaseAgent

> **databaseAgent**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

#### relevantDataManager

> **relevantDataManager**: [`AgentOrchestrationGuidance`](AgentOrchestrationGuidance.md)

***

### escalateWhen?

> `optional` **escalateWhen**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:176](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L176)

Situations where orchestration should escalate for clarification.

***

### signals

> **signals**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:174](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L174)

Triggers that indicate the category is relevant to the request.

***

### summary

> **summary**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:172](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L172)

High-level framing of how orchestration should leverage the category.


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
