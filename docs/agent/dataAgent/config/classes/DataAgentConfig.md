---
title: Data Agent Config
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

***

[mybusiness-mcp-extension](../../../../modules.md) / [agent/dataAgent/config](../README.md) / DataAgentConfig

# Class: DataAgentConfig

Defined in: [src/agent/dataAgent/config.ts:19](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L19)

Data agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new DataAgentConfig**(`config?`): `DataAgentConfig`

Defined in: [src/agent/dataAgent/config.ts:22](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L22)

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

#### Returns

`DataAgentConfig`

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getAnalysisConfig()

> **getAnalysisConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:40](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L40)

Get analysis configuration

#### Returns

`object`

##### crossCategoryAnalysis

> **crossCategoryAnalysis**: `boolean`

##### enableInsightGeneration

> **enableInsightGeneration**: `boolean`

##### enableInsightRanking?

> `optional` **enableInsightRanking**: `boolean`

##### highlightRecordLimit?

> `optional` **highlightRecordLimit**: `number`

##### insightCategories?

> `optional` **insightCategories**: `string`[]

##### insightConfidenceThreshold?

> `optional` **insightConfidenceThreshold**: `number`

##### maxExampleHints?

> `optional` **maxExampleHints**: `number`

##### maxInsightDepth

> **maxInsightDepth**: `number`

##### maxInsightsPerAnalysis?

> `optional` **maxInsightsPerAnalysis**: `number`

##### maxSupportingRecords?

> `optional` **maxSupportingRecords**: `number`

***

### getAnalysisTimeout()

> **getAnalysisTimeout**(): `number`

Defined in: [src/agent/dataAgent/config.ts:271](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L271)

Get analysis timeout in milliseconds

#### Returns

`number`

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:516](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L516)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:478](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L478)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:523](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L523)

Get configuration schema ID

#### Returns

`string`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:293](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L293)

Get error handling configuration

#### Returns

`object`

##### allowPartialAnalysis

> **allowPartialAnalysis**: `boolean`

##### exponentialBackoff

> **exponentialBackoff**: `boolean`

##### fallbackToSimpleAnalysis

> **fallbackToSimpleAnalysis**: `boolean`

##### gracefulRelationshipHandling

> **gracefulRelationshipHandling**: `boolean`

##### maxRetries

> **maxRetries**: `number`

##### retryDelay

> **retryDelay**: `number`

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:502](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L502)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getExplorationConfig()

> **getExplorationConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:67](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L67)

Get exploration configuration

#### Returns

`object`

##### enableAutomaticPlanGeneration

> **enableAutomaticPlanGeneration**: `boolean`

##### enableDynamicPlanAdjustment?

> `optional` **enableDynamicPlanAdjustment**: `boolean`

##### explorationPriorities?

> `optional` **explorationPriorities**: `string`[]

##### includeDateValidationSteps?

> `optional` **includeDateValidationSteps**: `boolean`

##### includeExampleQueries?

> `optional` **includeExampleQueries**: `boolean`

##### maxExplorationSteps

> **maxExplorationSteps**: `number`

##### minSupportingResources?

> `optional` **minSupportingResources**: `number`

##### planComplexityLimit

> **planComplexityLimit**: `"high"` \| `"medium"` \| `"low"`

***

### getExplorationPriorities()

> **getExplorationPriorities**(): `string`[]

Defined in: [src/agent/dataAgent/config.ts:240](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L240)

Get exploration priorities

#### Returns

`string`[]

***

### getInsightCategories()

> **getInsightCategories**(): `string`[]

Defined in: [src/agent/dataAgent/config.ts:224](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L224)

Get insight categories to focus on

#### Returns

`string`[]

***

### getInsightConfidenceThreshold()

> **getInsightConfidenceThreshold**(): `number`

Defined in: [src/agent/dataAgent/config.ts:196](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L196)

Get insight confidence threshold

#### Returns

`number`

***

### getMaxExplorationSteps()

> **getMaxExplorationSteps**(): `number`

Defined in: [src/agent/dataAgent/config.ts:175](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L175)

Get maximum exploration steps

#### Returns

`number`

***

### getMaxInsightDepth()

> **getMaxInsightDepth**(): `number`

Defined in: [src/agent/dataAgent/config.ts:168](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L168)

Get maximum insight depth

#### Returns

`number`

***

### getMaxInsightsPerAnalysis()

> **getMaxInsightsPerAnalysis**(): `number`

Defined in: [src/agent/dataAgent/config.ts:210](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L210)

Get maximum insights per analysis

#### Returns

`number`

***

### getMaxRelationshipDepth()

> **getMaxRelationshipDepth**(): `number`

Defined in: [src/agent/dataAgent/config.ts:182](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L182)

Get maximum relationship depth

#### Returns

`number`

***

### getMaxRelationshipsPerAnalysis()

> **getMaxRelationshipsPerAnalysis**(): `number`

Defined in: [src/agent/dataAgent/config.ts:217](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L217)

Get maximum relationships per analysis

#### Returns

`number`

***

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:108](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L108)

Get performance configuration

#### Returns

`object`

##### analysisTimeout?

> `optional` **analysisTimeout**: `number`

##### enableParallelRelationshipMapping?

> `optional` **enableParallelRelationshipMapping**: `boolean`

##### enableTopicOverviewCaching?

> `optional` **enableTopicOverviewCaching**: `boolean`

##### maxConcurrentAnalyses?

> `optional` **maxConcurrentAnalyses**: `number`

##### processingBatchSize?

> `optional` **processingBatchSize**: `number`

##### topicOverviewCacheTTL?

> `optional` **topicOverviewCacheTTL**: `number`

***

### getPlanComplexityLimit()

> **getPlanComplexityLimit**(): `"high"` \| `"medium"` \| `"low"`

Defined in: [src/agent/dataAgent/config.ts:189](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L189)

Get plan complexity limit

#### Returns

`"high"` \| `"medium"` \| `"low"`

***

### getQualityConfig()

> **getQualityConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L53)

Get quality configuration

#### Returns

`object`

##### anomalyDetectionEnabled?

> `optional` **anomalyDetectionEnabled**: `boolean`

##### fieldCompletenessThreshold?

> `optional` **fieldCompletenessThreshold**: `number`

##### minimumRecordCount?

> `optional` **minimumRecordCount**: `number`

##### missingFieldThreshold?

> `optional` **missingFieldThreshold**: `number`

***

### getRelationshipsConfig()

> **getRelationshipsConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:80](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L80)

Get relationships configuration

#### Returns

`object`

##### enableImpactAssessment?

> `optional` **enableImpactAssessment**: `boolean`

##### enableRelationshipMapping

> **enableRelationshipMapping**: `boolean`

##### includeWeakRelationships

> **includeWeakRelationships**: `boolean`

##### maxRelationshipDepth

> **maxRelationshipDepth**: `number`

##### maxRelationshipsPerAnalysis?

> `optional` **maxRelationshipsPerAnalysis**: `number`

##### relationshipStrengthThreshold?

> `optional` **relationshipStrengthThreshold**: `number`

##### relationshipTypes?

> `optional` **relationshipTypes**: `string`[]

***

### getRelationshipStrengthThreshold()

> **getRelationshipStrengthThreshold**(): `number`

Defined in: [src/agent/dataAgent/config.ts:203](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L203)

Get relationship strength threshold

#### Returns

`number`

***

### getRelationshipTypes()

> **getRelationshipTypes**(): `string`[]

Defined in: [src/agent/dataAgent/config.ts:255](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L255)

Get relationship types to track

#### Returns

`string`[]

***

### getSearchConfig()

> **getSearchConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:124](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L124)

Get search configuration

#### Returns

`object`

##### enableCategoryFiltering?

> `optional` **enableCategoryFiltering**: `boolean`

##### enableFuzzyMatching?

> `optional` **enableFuzzyMatching**: `boolean`

##### maxResults?

> `optional` **maxResults**: `number`

##### minimumMatchScore?

> `optional` **minimumMatchScore**: `number`

##### prioritizeRecentResults?

> `optional` **prioritizeRecentResults**: `boolean`

##### searchTimeout?

> `optional` **searchTimeout**: `number`

***

### getSynthesisConfig()

> **getSynthesisConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:93](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L93)

Get synthesis configuration

#### Returns

`object`

##### enableMultiSourceSynthesis?

> `optional` **enableMultiSourceSynthesis**: `boolean`

##### enableTopicOverviews?

> `optional` **enableTopicOverviews**: `boolean`

##### includeValidationReports?

> `optional` **includeValidationReports**: `boolean`

##### maxHighlightRecords?

> `optional` **maxHighlightRecords**: `number`

##### synthesisConfidenceThreshold?

> `optional` **synthesisConfidenceThreshold**: `number`

***

### getTelemetryConfig()

> **getTelemetryConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:278](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L278)

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

##### trackInsightMetrics

> **trackInsightMetrics**: `boolean`

##### trackRelationshipMetrics

> **trackRelationshipMetrics**: `boolean`

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:509](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L509)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### isAutomaticPlanGenerationEnabled()

> **isAutomaticPlanGenerationEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:161](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L161)

Check if automatic plan generation is enabled

#### Returns

`boolean`

***

### isCrossCategoryAnalysisEnabled()

> **isCrossCategoryAnalysisEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:147](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L147)

Check if cross-category analysis is enabled

#### Returns

`boolean`

***

### isInsightGenerationEnabled()

> **isInsightGenerationEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:140](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L140)

Check if insight generation is enabled

#### Returns

`boolean`

***

### isRelationshipMappingEnabled()

> **isRelationshipMappingEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:154](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/agent/dataAgent/config.ts#L154)

Check if relationship mapping is enabled

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
