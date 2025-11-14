[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / AgentConfigDefinition

# Interface: AgentConfigDefinition

Defined in: [src/types/agentConfig.ts:864](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L864)

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

Defined in: [src/types/agentConfig.ts:866](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L866)

Unique configuration schema identifier for validation and versioning

***

### agent

> **agent**: [`AgentIdentity`](AgentIdentity.md)

Defined in: [src/types/agentConfig.ts:869](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L869)

Basic agent identity and metadata

***

### applicationFacing?

> `optional` **applicationFacing**: [`ApplicationFacingConfig`](ApplicationFacingConfig.md)

Defined in: [src/types/agentConfig.ts:887](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L887)

Application-facing metadata

***

### clarification?

> `optional` **clarification**: [`ClarificationConfig`](ClarificationConfig.md)

Defined in: [src/types/agentConfig.ts:875](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L875)

***

### communication?

> `optional` **communication**: [`CommunicationConfig`](CommunicationConfig.md)

Defined in: [src/types/agentConfig.ts:876](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L876)

***

### data?

> `optional` **data**: [`DataConfig`](DataConfig.md)

Defined in: [src/types/agentConfig.ts:874](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L874)

***

### database?

> `optional` **database**: [`DatabaseConfig`](DatabaseConfig.md)

Defined in: [src/types/agentConfig.ts:873](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L873)

***

### dataLoader?

> `optional` **dataLoader**: [`DataLoaderConfig`](DataLoaderConfig.md)

Defined in: [src/types/agentConfig.ts:877](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L877)

***

### errorHandling?

> `optional` **errorHandling**: `object`

Defined in: [src/types/agentConfig.ts:918](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L918)

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

Defined in: [src/types/agentConfig.ts:881](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L881)

Runtime execution configuration

***

### orchestration?

> `optional` **orchestration**: [`OrchestrationConfig`](OrchestrationConfig.md)

Defined in: [src/types/agentConfig.ts:872](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L872)

Agent-specific configuration (varies by agent type)

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:890](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L890)

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

Defined in: [src/types/agentConfig.ts:878](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L878)

***

### telemetry?

> `optional` **telemetry**: `object`

Defined in: [src/types/agentConfig.ts:903](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L903)

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

Defined in: [src/types/agentConfig.ts:884](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/types/agentConfig.ts#L884)

User-facing metadata
