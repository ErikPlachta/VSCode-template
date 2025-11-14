[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataConfig

# Interface: DataConfig

Defined in: [src/types/agentConfig.ts:438](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L438)

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

Defined in: [src/types/agentConfig.ts:439](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L439)

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

Defined in: [src/types/agentConfig.ts:457](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L457)

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

Defined in: [src/types/agentConfig.ts:491](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L491)

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

Defined in: [src/types/agentConfig.ts:451](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L451)

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

Defined in: [src/types/agentConfig.ts:467](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L467)

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

Defined in: [src/types/agentConfig.ts:476](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L476)

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

Defined in: [src/types/agentConfig.ts:484](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L484)

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
