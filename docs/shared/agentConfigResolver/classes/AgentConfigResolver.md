---
title: Agent Config Resolver
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentConfigResolver](../README.md) / AgentConfigResolver

# Class: AgentConfigResolver

Defined in: [src/shared/agentConfigResolver.ts:61](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigResolver.ts#L61)

## Constructors

### Constructor

> **new AgentConfigResolver**(`configPath`): `AgentConfigResolver`

Defined in: [src/shared/agentConfigResolver.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigResolver.ts#L62)

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

#### Returns

`AgentConfigResolver`

## Methods

### getEffectiveExecutionProfile()

> **getEffectiveExecutionProfile**(`agentId`): `Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

Defined in: [src/shared/agentConfigResolver.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentConfigResolver.ts#L68)

Returns the effective execution profile for an agent after applying runtime overrides.
Enforces global constraints (e.g., maxExecutionTime).

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

#### Returns

`Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

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
