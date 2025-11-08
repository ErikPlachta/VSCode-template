---
title: Create Database Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [agent/databaseAgent](../README.md) / createDatabaseAgent

# Function: createDatabaseAgent()

> **createDatabaseAgent**(`dataSources`, `cacheDirectory`, `config?`): [`DatabaseAgent`](../classes/DatabaseAgent.md)

Defined in: [src/agent/databaseAgent/index.ts:446](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/databaseAgent/index.ts#L446)

Creates a new DatabaseAgent instance with the provided data sources.

## Parameters

### dataSources

[`DataSource`](../interfaces/DataSource.md)[]

Data sources for the agent to query

### cacheDirectory

`Promise`\<`string`\>

Cache directory path promise

### config?

`Partial`\<[`DatabaseAgentConfig`](../config/classes/DatabaseAgentConfig.md)\>

Optional agent configuration

## Returns

[`DatabaseAgent`](../classes/DatabaseAgent.md)

- New DatabaseAgent instance


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
