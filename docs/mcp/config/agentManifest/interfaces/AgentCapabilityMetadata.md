---
title: Agent Capability Metadata
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

[mybusiness-mcp-extension](../../../../modules.md) / [mcp/config/agentManifest](../README.md) / AgentCapabilityMetadata

# Interface: AgentCapabilityMetadata

Defined in: [src/mcp/config/agentManifest.ts:17](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L17)

Description of an agent's shared responsibilities and boundaries.

## Properties

### dependsOn?

> `optional` **dependsOn**: [`AgentIdentifier`](../../unifiedAgentConfig/type-aliases/AgentIdentifier.md)[]

Defined in: [src/mcp/config/agentManifest.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L29)

Downstream agents or services that this agent commonly depends on.

---

### description

> **description**: `string`

Defined in: [src/mcp/config/agentManifest.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L23)

Summary of what the agent is responsible for.

---

### escalateWhen

> **escalateWhen**: `string`[]

Defined in: [src/mcp/config/agentManifest.ts:27](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L27)

Situations where the agent must escalate to another party.

---

### id

> **id**: [`AgentIdentifier`](../../unifiedAgentConfig/type-aliases/AgentIdentifier.md)

Defined in: [src/mcp/config/agentManifest.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L19)

Stable identifier that matches orchestrator routing names.

---

### primarySignals

> **primarySignals**: `string`[]

Defined in: [src/mcp/config/agentManifest.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L25)

Signals that strongly suggest this agent should be invoked.

---

### title

> **title**: `string`

Defined in: [src/mcp/config/agentManifest.ts:21](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/mcp/config/agentManifest.ts#L21)

Human readable agent name.

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
