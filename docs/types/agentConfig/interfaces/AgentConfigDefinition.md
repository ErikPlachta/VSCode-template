[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentConfigDefinition

# Interface: AgentConfigDefinition

Defined in: [src/types/agentConfig.ts:873](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L873)

Complete TypeScript-based agent configuration definition.

The single source of truth for all agent settings. Agents must not hardcode
business values in code; derive from this configuration or loaded data.

## Example

```ts
const cfg: AgentConfigDefinition = {
  $configId: "communication-agent",
  agent: { id: "communication-agent", name: "Communication Agent", version: "1.0.0", description: "Formats responses" },
  communication: { formatting: { defaultFormat: "markdown", tone: { success: "friendly", error: "helpful", progress: "informative", validation: "constructive" }, verbosity: "balanced", maxMessageLength: 1000 } },
};
```

## Properties

### $configId

> **$configId**: `string`

Defined in: [src/types/agentConfig.ts:875](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L875)

Unique configuration schema identifier for validation and versioning

***

### agent

> **agent**: [`AgentIdentity`](AgentIdentity.md)

Defined in: [src/types/agentConfig.ts:878](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L878)

Basic agent identity and metadata

***

### applicationFacing?

> `optional` **applicationFacing**: [`ApplicationFacingConfig`](ApplicationFacingConfig.md)

Defined in: [src/types/agentConfig.ts:896](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L896)

Application-facing metadata

***

### clarification?

> `optional` **clarification**: [`ClarificationConfig`](ClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:884](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L884)

***

### communication?

> `optional` **communication**: [`CommunicationConfig`](CommunicationConfig.md)

Defined in: [src/types/agentConfig.ts:885](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L885)

***

### data?

> `optional` **data**: [`DataConfig`](DataConfig.md)

Defined in: [src/types/agentConfig.ts:883](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L883)

***

### database?

> `optional` **database**: [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [src/types/agentConfig.ts:882](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L882)

***

### dataLoader?

> `optional` **dataLoader**: [`DataLoaderConfig`](DataLoaderConfig.md)

Defined in: [src/types/agentConfig.ts:886](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L886)

***

### errorHandling?

> `optional` **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:927](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L927)

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

Defined in: [src/types/agentConfig.ts:890](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L890)

Runtime execution configuration

***

### orchestration?

> `optional` **orchestration**: [`OrchestrationConfig`](OrchestrationConfig.md)

Defined in: [src/types/agentConfig.ts:881](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L881)

Agent-specific configuration (varies by agent type)

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:899](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L899)

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

Defined in: [src/types/agentConfig.ts:887](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L887)

***

### telemetry?

> `optional` **telemetry**: `object`

Defined in: [src/types/agentConfig.ts:912](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L912)

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

Defined in: [src/types/agentConfig.ts:893](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L893)

User-facing metadata
