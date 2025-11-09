[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DataConfig

# Interface: DataConfig

Defined in: [src/types/agentConfig.ts:204](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L204)

Data agent-specific configuration

## Properties

### analysis

> **analysis**: `object`

Defined in: [src/types/agentConfig.ts:205](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L205)

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

Defined in: [src/types/agentConfig.ts:223](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L223)

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

Defined in: [src/types/agentConfig.ts:257](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L257)

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

Defined in: [src/types/agentConfig.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L217)

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

Defined in: [src/types/agentConfig.ts:233](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L233)

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

Defined in: [src/types/agentConfig.ts:242](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L242)

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

Defined in: [src/types/agentConfig.ts:250](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/types/agentConfig.ts#L250)

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
