---
title: Data Config
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

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataConfig

# Interface: DataConfig

Defined in: [src/types/agentConfig.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L194)

Data agent-specific configuration

## Properties

### analysis

> **analysis**: `object`

Defined in: [src/types/agentConfig.ts:195](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L195)

#### crossCategoryAnalysis

> **crossCategoryAnalysis**: `boolean`

#### enableInsightGeneration

> **enableInsightGeneration**: `boolean`

#### enableInsightRanking?

> `optional` **enableInsightRanking**: `boolean`

#### highlightRecordLimit?

> `optional` **highlightRecordLimit**: `number`

#### insightCategories?

> `optional` **insightCategories**: `string`[]

#### insightConfidenceThreshold?

> `optional` **insightConfidenceThreshold**: `number`

#### maxExampleHints?

> `optional` **maxExampleHints**: `number`

#### maxInsightDepth

> **maxInsightDepth**: `number`

#### maxInsightsPerAnalysis?

> `optional` **maxInsightsPerAnalysis**: `number`

#### maxSupportingRecords?

> `optional` **maxSupportingRecords**: `number`

***

### exploration

> **exploration**: `object`

Defined in: [src/types/agentConfig.ts:213](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L213)

#### enableAutomaticPlanGeneration

> **enableAutomaticPlanGeneration**: `boolean`

#### enableDynamicPlanAdjustment?

> `optional` **enableDynamicPlanAdjustment**: `boolean`

#### explorationPriorities?

> `optional` **explorationPriorities**: `string`[]

#### includeDateValidationSteps?

> `optional` **includeDateValidationSteps**: `boolean`

#### includeExampleQueries?

> `optional` **includeExampleQueries**: `boolean`

#### maxExplorationSteps

> **maxExplorationSteps**: `number`

#### minSupportingResources?

> `optional` **minSupportingResources**: `number`

#### planComplexityLimit

> **planComplexityLimit**: `"high"` \| `"medium"` \| `"low"`

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:247](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L247)

#### analysisTimeout?

> `optional` **analysisTimeout**: `number`

#### enableParallelRelationshipMapping?

> `optional` **enableParallelRelationshipMapping**: `boolean`

#### enableTopicOverviewCaching?

> `optional` **enableTopicOverviewCaching**: `boolean`

#### maxConcurrentAnalyses?

> `optional` **maxConcurrentAnalyses**: `number`

#### processingBatchSize?

> `optional` **processingBatchSize**: `number`

#### topicOverviewCacheTTL?

> `optional` **topicOverviewCacheTTL**: `number`

***

### quality?

> `optional` **quality**: `object`

Defined in: [src/types/agentConfig.ts:207](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L207)

#### anomalyDetectionEnabled?

> `optional` **anomalyDetectionEnabled**: `boolean`

#### fieldCompletenessThreshold?

> `optional` **fieldCompletenessThreshold**: `number`

#### minimumRecordCount?

> `optional` **minimumRecordCount**: `number`

#### missingFieldThreshold?

> `optional` **missingFieldThreshold**: `number`

***

### relationships

> **relationships**: `object`

Defined in: [src/types/agentConfig.ts:223](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L223)

#### enableImpactAssessment?

> `optional` **enableImpactAssessment**: `boolean`

#### enableRelationshipMapping

> **enableRelationshipMapping**: `boolean`

#### includeWeakRelationships

> **includeWeakRelationships**: `boolean`

#### maxRelationshipDepth

> **maxRelationshipDepth**: `number`

#### maxRelationshipsPerAnalysis?

> `optional` **maxRelationshipsPerAnalysis**: `number`

#### relationshipStrengthThreshold?

> `optional` **relationshipStrengthThreshold**: `number`

#### relationshipTypes?

> `optional` **relationshipTypes**: `string`[]

***

### search?

> `optional` **search**: `object`

Defined in: [src/types/agentConfig.ts:232](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L232)

#### enableCategoryFiltering?

> `optional` **enableCategoryFiltering**: `boolean`

#### enableFuzzyMatching?

> `optional` **enableFuzzyMatching**: `boolean`

#### maxResults?

> `optional` **maxResults**: `number`

#### minimumMatchScore?

> `optional` **minimumMatchScore**: `number`

#### prioritizeRecentResults?

> `optional` **prioritizeRecentResults**: `boolean`

#### searchTimeout?

> `optional` **searchTimeout**: `number`

***

### synthesis?

> `optional` **synthesis**: `object`

Defined in: [src/types/agentConfig.ts:240](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L240)

#### enableMultiSourceSynthesis?

> `optional` **enableMultiSourceSynthesis**: `boolean`

#### enableTopicOverviews?

> `optional` **enableTopicOverviews**: `boolean`

#### includeValidationReports?

> `optional` **includeValidationReports**: `boolean`

#### maxHighlightRecords?

> `optional` **maxHighlightRecords**: `number`

#### synthesisConfidenceThreshold?

> `optional` **synthesisConfidenceThreshold**: `number`


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
