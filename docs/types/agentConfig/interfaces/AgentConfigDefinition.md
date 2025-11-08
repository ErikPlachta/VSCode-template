[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentConfigDefinition

# Interface: AgentConfigDefinition

Defined in: [src/types/agentConfig.ts:396](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L396)

Complete TypeScript-based agent configuration definition.

## Properties

### $configId

> **$configId**: `string`

Defined in: [src/types/agentConfig.ts:398](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L398)

Unique configuration schema identifier for validation and versioning

***

### agent

> **agent**: [`AgentIdentity`](AgentIdentity.md)

Defined in: [src/types/agentConfig.ts:401](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L401)

Basic agent identity and metadata

***

### applicationFacing?

> `optional` **applicationFacing**: [`ApplicationFacingConfig`](ApplicationFacingConfig.md)

Defined in: [src/types/agentConfig.ts:417](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L417)

Application-facing metadata

***

### clarification?

> `optional` **clarification**: [`ClarificationConfig`](ClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:407](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L407)

***

### data?

> `optional` **data**: [`DataConfig`](DataConfig.md)

Defined in: [src/types/agentConfig.ts:406](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L406)

***

### database?

> `optional` **database**: [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [src/types/agentConfig.ts:405](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L405)

***

### errorHandling?

> `optional` **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:448](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L448)

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

Defined in: [src/types/agentConfig.ts:411](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L411)

Runtime execution configuration

***

### orchestration?

> `optional` **orchestration**: [`OrchestrationConfig`](OrchestrationConfig.md)

Defined in: [src/types/agentConfig.ts:404](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L404)

Agent-specific configuration (varies by agent type)

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:420](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L420)

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

Defined in: [src/types/agentConfig.ts:408](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L408)

***

### telemetry?

> `optional` **telemetry**: `object`

Defined in: [src/types/agentConfig.ts:433](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L433)

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

Defined in: [src/types/agentConfig.ts:414](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L414)

User-facing metadata
