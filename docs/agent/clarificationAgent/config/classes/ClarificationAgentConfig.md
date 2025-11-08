---
title: Clarification Agent Config
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

[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

---

[mybusiness-mcp-extension](../../../../modules.md) / [agent/clarificationAgent/config](../README.md) / ClarificationAgentConfig

# Class: ClarificationAgentConfig

Defined in: [src/agent/clarificationAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L19)

Clarification agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new ClarificationAgentConfig**(`config?`): `ClarificationAgentConfig`

Defined in: [src/agent/clarificationAgent/config.ts:22](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L22)

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

#### Returns

`ClarificationAgentConfig`

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L516)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

---

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:478](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L478)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

---

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:523](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L523)

Get configuration schema ID

#### Returns

`string`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

---

### getContextAnalysisConfig()

> **getContextAnalysisConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L100)

Get context analysis configuration

#### Returns

`object`

##### contextConfidenceThreshold?

> `optional` **contextConfidenceThreshold**: `number`

##### enableIntentAnalysis?

> `optional` **enableIntentAnalysis**: `boolean`

##### handleDomainTerminology?

> `optional` **handleDomainTerminology**: `boolean`

##### identifyMissingComponents?

> `optional` **identifyMissingComponents**: `boolean`

##### suggestQueryStructure?

> `optional` **suggestQueryStructure**: `boolean`

---

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:288](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L288)

Get error handling configuration

#### Returns

`object`

##### allowPartialClarification

> **allowPartialClarification**: `boolean`

##### exponentialBackoff

> **exponentialBackoff**: `boolean`

##### fallbackToGenericHelp

> **fallbackToGenericHelp**: `boolean`

##### gracefulKnowledgeFailure

> **gracefulKnowledgeFailure**: `boolean`

##### maxRetries

> **maxRetries**: `number`

##### retryDelay

> **retryDelay**: `number`

---

### getEscalationConfig()

> **getEscalationConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:54](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L54)

Get escalation configuration

#### Returns

`object`

##### clarificationTimeWindow?

> `optional` **clarificationTimeWindow**: `number`

##### escalationThreshold

> **escalationThreshold**: `number`

##### fallbackStrategies

> **fallbackStrategies**: `string`[]

##### maxClarificationRounds

> **maxClarificationRounds**: `number`

##### suggestHumanSupportAfterMaxRounds?

> `optional` **suggestHumanSupportAfterMaxRounds**: `boolean`

---

### getEscalationThreshold()

> **getEscalationThreshold**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:151](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L151)

Get escalation threshold

#### Returns

`number`

---

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:502](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L502)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

---

### getFallbackStrategies()

> **getFallbackStrategies**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:207](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L207)

Get fallback strategies

#### Returns

`string`[]

---

### getGuidanceConfig()

> **getGuidanceConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L41)

Get guidance configuration

#### Returns

`object`

##### guidanceTypes?

> `optional` **guidanceTypes**: `string`[]

##### includeCategoryExamples

> **includeCategoryExamples**: `boolean`

##### includeQueryTemplates

> **includeQueryTemplates**: `boolean`

##### maxSuggestions

> **maxSuggestions**: `number`

##### responseStyle?

> `optional` **responseStyle**: `object`

###### responseStyle.formality?

> `optional` **formality**: `string`

###### responseStyle.includeEncouragement?

> `optional` **includeEncouragement**: `boolean`

###### responseStyle.maxResponseLength?

> `optional` **maxResponseLength**: `number`

###### responseStyle.tone?

> `optional` **tone**: `string`

##### suggestAlternativePhrasings?

> `optional` **suggestAlternativePhrasings**: `boolean`

---

### getGuidanceTypes()

> **getGuidanceTypes**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L214)

Get guidance types to provide

#### Returns

`string`[]

---

### getKnowledgeBaseConfig()

> **getKnowledgeBaseConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L70)

Get knowledge base configuration

#### Returns

`object`

##### enableKnowledgeRanking?

> `optional` **enableKnowledgeRanking**: `boolean`

##### enableKnowledgeSearch

> **enableKnowledgeSearch**: `boolean`

##### knowledgeSearchTimeout?

> `optional` **knowledgeSearchTimeout**: `number`

##### knowledgeSources?

> `optional` **knowledgeSources**: `string`[]

##### maxKnowledgeSnippets

> **maxKnowledgeSnippets**: `number`

##### relevanceThreshold

> **relevanceThreshold**: `number`

---

### getKnowledgeSearchTimeout()

> **getKnowledgeSearchTimeout**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:258](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L258)

Get knowledge search timeout

#### Returns

`number`

---

### getKnowledgeSources()

> **getKnowledgeSources**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:229](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L229)

Get knowledge sources to search

#### Returns

`string`[]

---

### getMaxClarificationRounds()

> **getMaxClarificationRounds**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:158](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L158)

Get maximum clarification rounds

#### Returns

`number`

---

### getMaxKnowledgeSnippets()

> **getMaxKnowledgeSnippets**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:137](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L137)

Get maximum knowledge snippets

#### Returns

`number`

---

### getMaxResponseTime()

> **getMaxResponseTime**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:265](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L265)

Get maximum response time

#### Returns

`number`

---

### getMaxSuggestions()

> **getMaxSuggestions**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:130](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L130)

Get maximum suggestions to provide

#### Returns

`number`

---

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L115)

Get performance configuration

#### Returns

`object`

##### enableParallelProcessing?

> `optional` **enableParallelProcessing**: `boolean`

##### enableResponseCaching?

> `optional` **enableResponseCaching**: `boolean`

##### maxResponseTime?

> `optional` **maxResponseTime**: `number`

##### processingBatchSize?

> `optional` **processingBatchSize**: `number`

##### responseCacheTTL?

> `optional` **responseCacheTTL**: `number`

---

### getRelevanceThreshold()

> **getRelevanceThreshold**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:144](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L144)

Get relevance threshold for knowledge snippets

#### Returns

`number`

---

### getResponseStyle()

> **getResponseStyle**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L244)

Get response style configuration

#### Returns

`object`

##### formality?

> `optional` **formality**: `string`

##### includeEncouragement?

> `optional` **includeEncouragement**: `boolean`

##### maxResponseLength?

> `optional` **maxResponseLength**: `number`

##### tone?

> `optional` **tone**: `string`

---

### getRoutingConfig()

> **getRoutingConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:85](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L85)

Get routing configuration

#### Returns

`object`

- The routing configuration object

##### analyzeMissingSignals?

> `optional` **analyzeMissingSignals**: `boolean`

##### includeAgentCapabilitySummaries?

> `optional` **includeAgentCapabilitySummaries**: `boolean`

##### maxCandidateAgents?

> `optional` **maxCandidateAgents**: `number`

##### routingConfidenceThreshold?

> `optional` **routingConfidenceThreshold**: `number`

##### suggestAlternativeAgents?

> `optional` **suggestAlternativeAgents**: `boolean`

---

### getTelemetryConfig()

> **getTelemetryConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:272](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L272)

Get telemetry configuration

#### Returns

`object`

##### logCacheStats

> **logCacheStats**: `boolean`

##### logPerformance

> **logPerformance**: `boolean`

##### logQueries

> **logQueries**: `boolean`

##### slowQueryThreshold

> **slowQueryThreshold**: `number`

##### trackClarificationSuccess

> **trackClarificationSuccess**: `boolean`

##### trackUserSatisfaction

> **trackUserSatisfaction**: `boolean`

---

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:509](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L509)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

---

### isKnowledgeSearchEnabled()

> **isKnowledgeSearchEnabled**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:165](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L165)

Check if knowledge search is enabled

#### Returns

`boolean`

---

### shouldAnalyzeMissingSignals()

> **shouldAnalyzeMissingSignals**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:193](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L193)

Check if missing signals should be analyzed

#### Returns

`boolean`

---

### shouldIncludeCategoryExamples()

> **shouldIncludeCategoryExamples**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:172](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L172)

Check if category examples should be included

#### Returns

`boolean`

---

### shouldIncludeQueryTemplates()

> **shouldIncludeQueryTemplates**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:179](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L179)

Check if query templates should be included

#### Returns

`boolean`

---

### shouldSuggestAlternativeAgents()

> **shouldSuggestAlternativeAgents**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:200](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L200)

Check if alternative agents should be suggested

#### Returns

`boolean`

---

### shouldSuggestAlternativePhrasings()

> **shouldSuggestAlternativePhrasings**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:186](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/clarificationAgent/config.ts#L186)

Check if alternative phrasings should be suggested

#### Returns

`boolean`

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
