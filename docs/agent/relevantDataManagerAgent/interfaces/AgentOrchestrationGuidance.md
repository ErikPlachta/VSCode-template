---
title: Agent Orchestration Guidance
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/relevantDataManagerAgent](../README.md) / AgentOrchestrationGuidance

# Interface: AgentOrchestrationGuidance

Defined in: [src/agent/relevantDataManagerAgent/index.ts:161](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L161)

Full configuration stored for each business category.

## Properties

### focus

> **focus**: `string`

Defined in: [src/agent/relevantDataManagerAgent/index.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L163)

Core responsibility for the agent when invoked for this category.

---

### promptStarters

> **promptStarters**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:167](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L167)

Prompt starters that the orchestrator can feed to the agent.

---

### signals

> **signals**: `string`[]

Defined in: [src/agent/relevantDataManagerAgent/index.ts:165](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/relevantDataManagerAgent/index.ts#L165)

Signals that hint the orchestrator should route the request to this agent.

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
