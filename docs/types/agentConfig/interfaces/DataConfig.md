[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataConfig

# Interface: DataConfig

Defined in: [src/types/agentConfig.ts:314](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L314)

DataAgent configuration governing analysis, exploration, relationships, search, and performance.

## Example

```ts
const dataCfg: DataConfig = {
  analysis: { enableInsightGeneration: true, maxInsightDepth: 3, crossCategoryAnalysis: true, insightConfidenceThreshold: 0.6 },
  exploration: { maxExplorationSteps: 5, enableAutomaticPlanGeneration: true, planComplexityLimit: "medium" },
  relationships: { enableRelationshipMapping: true, maxRelationshipDepth: 2, includeWeakRelationships: false },
  search: { maxResults: 50, enableFuzzyMatching: true, minimumMatchScore: 0.5 },
};
```

## Properties

### analysis

> **analysis**: `object`

Defined in: [src/types/agentConfig.ts:315](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L315)

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

Defined in: [src/types/agentConfig.ts:333](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L333)

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

> **planComplexityLimit**: `"low"` \| `"medium"` \| `"high"`

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:367](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L367)

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

Defined in: [src/types/agentConfig.ts:327](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L327)

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

Defined in: [src/types/agentConfig.ts:343](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L343)

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

Defined in: [src/types/agentConfig.ts:352](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L352)

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

Defined in: [src/types/agentConfig.ts:360](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/types/agentConfig.ts#L360)

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
