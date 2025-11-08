---
title: Agent Config Definition
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

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentConfigDefinition

# Interface: AgentConfigDefinition

Defined in: [src/types/agentConfig.ts:384](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L384)

Complete TypeScript-based agent configuration definition.
This replaces the JSON-based approach with full type safety and documentation.

## Properties

### $configId

> **$configId**: `string`

Defined in: [src/types/agentConfig.ts:386](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L386)

Unique configuration schema identifier for validation and versioning

***

### agent

> **agent**: [`AgentIdentity`](AgentIdentity.md)

Defined in: [src/types/agentConfig.ts:389](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L389)

Basic agent identity and metadata

***

### applicationFacing?

> `optional` **applicationFacing**: [`ApplicationFacingConfig`](ApplicationFacingConfig.md)

Defined in: [src/types/agentConfig.ts:405](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L405)

Application-facing metadata

***

### clarification?

> `optional` **clarification**: [`ClarificationConfig`](ClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:395](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L395)

***

### data?

> `optional` **data**: [`DataConfig`](DataConfig.md)

Defined in: [src/types/agentConfig.ts:394](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L394)

***

### database?

> `optional` **database**: [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [src/types/agentConfig.ts:393](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L393)

***

### errorHandling?

> `optional` **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:436](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L436)

Error handling configuration

#### allowPartialAnalysis?

> `optional` **allowPartialAnalysis**: `boolean`

#### allowPartialClarification?

> `optional` **allowPartialClarification**: `boolean`

#### allowPartialDataLoad?

> `optional` **allowPartialDataLoad**: `boolean`

#### exponentialBackoff?

> `optional` **exponentialBackoff**: `boolean`

#### fallbackOnCacheError?

> `optional` **fallbackOnCacheError**: `boolean`

#### fallbackToCachedData?

> `optional` **fallbackToCachedData**: `boolean`

#### fallbackToGenericHelp?

> `optional` **fallbackToGenericHelp**: `boolean`

#### fallbackToSimpleAnalysis?

> `optional` **fallbackToSimpleAnalysis**: `boolean`

#### gracefulKnowledgeFailure?

> `optional` **gracefulKnowledgeFailure**: `boolean`

#### gracefulRelationshipHandling?

> `optional` **gracefulRelationshipHandling**: `boolean`

#### gracefulSchemaFailure?

> `optional` **gracefulSchemaFailure**: `boolean`

#### maxRetries?

> `optional` **maxRetries**: `number`

#### retryDelay?

> `optional` **retryDelay**: `number`

#### skipCorruptedRecords?

> `optional` **skipCorruptedRecords**: `boolean`

***

### execution?

> `optional` **execution**: [`ExecutionConfig`](ExecutionConfig.md)

Defined in: [src/types/agentConfig.ts:399](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L399)

Runtime execution configuration

***

### orchestration?

> `optional` **orchestration**: [`OrchestrationConfig`](OrchestrationConfig.md)

Defined in: [src/types/agentConfig.ts:392](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L392)

Agent-specific configuration (varies by agent type)

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:408](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L408)

Performance configuration

#### defaultOperationTimeout?

> `optional` **defaultOperationTimeout**: `number`

#### enableOperationCaching?

> `optional` **enableOperationCaching**: `boolean`

#### enableParallelProcessing?

> `optional` **enableParallelProcessing**: `boolean`

#### enableResponseCaching?

> `optional` **enableResponseCaching**: `boolean`

#### maxConcurrentOperations?

> `optional` **maxConcurrentOperations**: `number`

#### maxResponseTime?

> `optional` **maxResponseTime**: `number`

#### memoryOptimizationLevel?

> `optional` **memoryOptimizationLevel**: `string`

#### processingBatchSize?

> `optional` **processingBatchSize**: `number`

#### responseCacheTTL?

> `optional` **responseCacheTTL**: `number`

***

### relevantDataManager?

> `optional` **relevantDataManager**: [`RelevantDataManagerConfig`](RelevantDataManagerConfig.md)

Defined in: [src/types/agentConfig.ts:396](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L396)

***

### telemetry?

> `optional` **telemetry**: `object`

Defined in: [src/types/agentConfig.ts:421](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L421)

Telemetry configuration

#### logCacheStats?

> `optional` **logCacheStats**: `boolean`

#### logPerformance?

> `optional` **logPerformance**: `boolean`

#### logQueries?

> `optional` **logQueries**: `boolean`

#### slowQueryThreshold?

> `optional` **slowQueryThreshold**: `number`

#### trackClarificationSuccess?

> `optional` **trackClarificationSuccess**: `boolean`

#### trackDataQuality?

> `optional` **trackDataQuality**: `boolean`

#### trackInsightMetrics?

> `optional` **trackInsightMetrics**: `boolean`

#### trackRelationshipIntegrity?

> `optional` **trackRelationshipIntegrity**: `boolean`

#### trackRelationshipMetrics?

> `optional` **trackRelationshipMetrics**: `boolean`

#### trackSchemaValidation?

> `optional` **trackSchemaValidation**: `boolean`

#### trackUserSatisfaction?

> `optional` **trackUserSatisfaction**: `boolean`

***

### userFacing?

> `optional` **userFacing**: [`UserFacingConfig`](UserFacingConfig.md)

Defined in: [src/types/agentConfig.ts:402](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L402)

User-facing metadata


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
