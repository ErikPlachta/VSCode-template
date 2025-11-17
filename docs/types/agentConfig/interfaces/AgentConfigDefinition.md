[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentConfigDefinition

# Interface: AgentConfigDefinition

Defined in: [src/types/agentConfig.ts:704](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L704)

Complete TypeScript-based agent configuration definition.

The single source of truth for all agent settings. Agents must not hardcode
business values in code; derive from this configuration or loaded data.

Example removed for brevity.

## Properties

### $configId

> **$configId**: `string`

Defined in: [src/types/agentConfig.ts:706](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L706)

Unique configuration schema identifier for validation and versioning

***

### agent

> **agent**: [`AgentIdentity`](AgentIdentity.md)

Defined in: [src/types/agentConfig.ts:709](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L709)

Basic agent identity and metadata

***

### applicationFacing?

> `optional` **applicationFacing**: [`ApplicationFacingConfig`](ApplicationFacingConfig.md)

Defined in: [src/types/agentConfig.ts:727](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L727)

Application-facing metadata

***

### clarification?

> `optional` **clarification**: [`ClarificationConfig`](ClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:715](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L715)

***

### communication?

> `optional` **communication**: [`CommunicationConfig`](CommunicationConfig.md)

Defined in: [src/types/agentConfig.ts:716](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L716)

***

### data?

> `optional` **data**: [`DataConfig`](DataConfig.md)

Defined in: [src/types/agentConfig.ts:714](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L714)

***

### database?

> `optional` **database**: [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [src/types/agentConfig.ts:713](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L713)

***

### dataLoader?

> `optional` **dataLoader**: [`DataLoaderConfig`](DataLoaderConfig.md)

Defined in: [src/types/agentConfig.ts:717](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L717)

***

### errorHandling?

> `optional` **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:758](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L758)

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

Defined in: [src/types/agentConfig.ts:721](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L721)

Runtime execution configuration

***

### orchestration?

> `optional` **orchestration**: [`OrchestrationConfig`](OrchestrationConfig.md)

Defined in: [src/types/agentConfig.ts:712](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L712)

Agent-specific configuration (varies by agent type)

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:730](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L730)

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

Defined in: [src/types/agentConfig.ts:718](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L718)

***

### telemetry?

> `optional` **telemetry**: `object`

Defined in: [src/types/agentConfig.ts:743](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L743)

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

Defined in: [src/types/agentConfig.ts:724](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/types/agentConfig.ts#L724)

User-facing metadata
