---
title: Tracked Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/analyticsIntegration](../README.md) / TrackedAgent

# Abstract Class: TrackedAgent

Defined in: [src/shared/analyticsIntegration.ts:45](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L45)

Base class with built-in analytics tracking for agent implementations.

## Constructors

### Constructor

> **new TrackedAgent**(`agentName`): `TrackedAgent`

Defined in: [src/shared/analyticsIntegration.ts:54](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L54)

Creates a new tracked agent instance.

#### Parameters

##### agentName

`string`

#### Returns

`TrackedAgent`

## Methods

### getStats()

> **getStats**(`since?`): `any`

Defined in: [src/shared/analyticsIntegration.ts:106](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/analyticsIntegration.ts#L106)

Gets analytics statistics for this agent.

#### Parameters

##### since?

`Date`

#### Returns

`any`

- Agent statistics or null if no data.


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
