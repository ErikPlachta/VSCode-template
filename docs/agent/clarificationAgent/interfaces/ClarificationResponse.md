---
title: Clarification Response
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/clarificationAgent](../README.md) / ClarificationResponse

# Interface: ClarificationResponse

Defined in: [src/agent/clarificationAgent/index.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L29)

Response from the clarification agent containing guidance and context.

## Properties

### knowledgeSnippets

> **knowledgeSnippets**: [`KnowledgeHit`](../../../mcp/knowledgeBase/interfaces/KnowledgeHit.md)[]

Defined in: [src/agent/clarificationAgent/index.ts:33](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L33)

Relevant knowledge snippets to provide context.

---

### prompt

> **prompt**: `string`

Defined in: [src/agent/clarificationAgent/index.ts:31](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/index.ts#L31)

The clarification prompt to guide the user.

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
