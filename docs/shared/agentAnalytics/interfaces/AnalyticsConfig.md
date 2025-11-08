---
title: Analytics Config
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

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentAnalytics](../README.md) / AnalyticsConfig

# Interface: AnalyticsConfig

Defined in: [src/shared/agentAnalytics.ts:98](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L98)

Configuration for analytics collection.

## Properties

### batchSize

> **batchSize**: `number`

Defined in: [src/shared/agentAnalytics.ts:108](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L108)

Batch size for event processing.

***

### enabled

> **enabled**: `boolean`

Defined in: [src/shared/agentAnalytics.ts:100](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L100)

Enable analytics collection.

***

### maxEvents

> **maxEvents**: `number`

Defined in: [src/shared/agentAnalytics.ts:104](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L104)

Maximum number of events to store.

***

### persistentStorage

> **persistentStorage**: `boolean`

Defined in: [src/shared/agentAnalytics.ts:110](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L110)

Enable persistent storage.

***

### retentionPeriod

> **retentionPeriod**: `number`

Defined in: [src/shared/agentAnalytics.ts:106](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L106)

Retention period in milliseconds.

***

### sampleRate

> **sampleRate**: `number`

Defined in: [src/shared/agentAnalytics.ts:102](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L102)

Sample rate for event collection (0-1).

***

### storageFile?

> `optional` **storageFile**: `string`

Defined in: [src/shared/agentAnalytics.ts:112](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/agentAnalytics.ts#L112)

Storage file path for persistent storage.


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
