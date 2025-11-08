---
title: Clarification Agent Input
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationAgentInput

# Interface: ClarificationAgentInput

Defined in: [src/agent/clarificationAgent/index.ts:15](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L15)

Input parameters for the clarification agent.

## Properties

### candidateAgents

> **candidateAgents**: `string`[]

Defined in: [src/agent/clarificationAgent/index.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L23)

List of candidate agents that could handle the query.

---

### missingSignals?

> `optional` **missingSignals**: `string`[]

Defined in: [src/agent/clarificationAgent/index.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L21)

Signals that were missing from the original query.

---

### question

> **question**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L17)

The user's question that needs clarification.

---

### topic?

> `optional` **topic**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L19)

Optional topic context for the question.

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
