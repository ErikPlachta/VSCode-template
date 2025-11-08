---
title: CONFIG IDS
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

[mybusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / CONFIG_IDS

# Variable: CONFIG_IDS

> `const` **CONFIG_IDS**: `object`

Defined in: [src/types/configRegistry.ts:23](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L23)

Configuration ID format: agent.{agentType}.v{major}.{minor}.{patch}

Examples:

- agent.orchestrator.v1.0.0
- agent.database.v1.2.0
- agent.clarification.v2.0.0

## Type Declaration

### CLARIFICATION_AGENT

> `readonly` **CLARIFICATION_AGENT**: `"agent.clarification.v1.0.0"` = `"agent.clarification.v1.0.0"`

Clarification agent configuration schema

### DATA_AGENT

> `readonly` **DATA_AGENT**: `"agent.data.v1.0.0"` = `"agent.data.v1.0.0"`

Data agent configuration schema

### DATABASE_AGENT

> `readonly` **DATABASE_AGENT**: `"agent.database.v1.0.0"` = `"agent.database.v1.0.0"`

Database agent configuration schema

### ORCHESTRATOR

> `readonly` **ORCHESTRATOR**: `"agent.orchestrator.v1.0.0"` = `"agent.orchestrator.v1.0.0"`

Orchestrator agent configuration schema

### RELEVANT_DATA_MANAGER

> `readonly` **RELEVANT_DATA_MANAGER**: `"agent.relevant-data-manager.v1.0.0"` = `"agent.relevant-data-manager.v1.0.0"`

Relevant data manager agent configuration schema

### REPOSITORY_HEALTH

> `readonly` **REPOSITORY_HEALTH**: `"agent.repository-health.v1.0.0"` = `"agent.repository-health.v1.0.0"`

Repository health agent configuration schema

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
