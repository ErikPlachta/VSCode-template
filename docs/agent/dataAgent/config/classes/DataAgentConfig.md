[**myBusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[myBusiness-mcp-extension](../../../../modules.md) / [agent/dataAgent/config](../README.md) / DataAgentConfig

# Class: DataAgentConfig

Defined in: [src/agent/dataAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L19)

Data agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new DataAgentConfig**(`config?`): `DataAgentConfig`

Defined in: [src/agent/dataAgent/config.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L29)

constructor function.

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`DataAgentConfig`

- TODO: describe return value.

#### Throws

- May throw an error.

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getAnalysisConfig()

> **getAnalysisConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L49)

Get analysis configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:324](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L324)

Get analysis timeout in milliseconds

#### Returns

`number`

- TODO: describe return value.

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/dataAgent/config.ts:350](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L350)

Get error handling configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getExplorationConfig()

> **getExplorationConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:80](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L80)

Get exploration configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:289](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L289)

Get exploration priorities

#### Returns

`string`[]

- TODO: describe return value.

***

### getInsightCategories()

> **getInsightCategories**(): `string`[]

Defined in: [src/agent/dataAgent/config.ts:271](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L271)

Get insight categories to focus on

#### Returns

`string`[]

- TODO: describe return value.

***

### getInsightConfidenceThreshold()

> **getInsightConfidenceThreshold**(): `number`

Defined in: [src/agent/dataAgent/config.ts:235](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L235)

Get insight confidence threshold

#### Returns

`number`

- TODO: describe return value.

***

### getMaxExplorationSteps()

> **getMaxExplorationSteps**(): `number`

Defined in: [src/agent/dataAgent/config.ts:208](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L208)

Get maximum exploration steps

#### Returns

`number`

- TODO: describe return value.

***

### getMaxInsightDepth()

> **getMaxInsightDepth**(): `number`

Defined in: [src/agent/dataAgent/config.ts:199](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L199)

Get maximum insight depth

#### Returns

`number`

- TODO: describe return value.

***

### getMaxInsightsPerAnalysis()

> **getMaxInsightsPerAnalysis**(): `number`

Defined in: [src/agent/dataAgent/config.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L253)

Get maximum insights per analysis

#### Returns

`number`

- TODO: describe return value.

***

### getMaxRelationshipDepth()

> **getMaxRelationshipDepth**(): `number`

Defined in: [src/agent/dataAgent/config.ts:217](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L217)

Get maximum relationship depth

#### Returns

`number`

- TODO: describe return value.

***

### getMaxRelationshipsPerAnalysis()

> **getMaxRelationshipsPerAnalysis**(): `number`

Defined in: [src/agent/dataAgent/config.ts:262](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L262)

Get maximum relationships per analysis

#### Returns

`number`

- TODO: describe return value.

***

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L127)

Get performance configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:226](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L226)

Get plan complexity limit

#### Returns

`"high"` \| `"medium"` \| `"low"`

- TODO: describe return value.

***

### getQualityConfig()

> **getQualityConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:64](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L64)

Get quality configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:95](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L95)

Get relationships configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:244](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L244)

Get relationship strength threshold

#### Returns

`number`

- TODO: describe return value.

***

### getRelationshipTypes()

> **getRelationshipTypes**(): `string`[]

Defined in: [src/agent/dataAgent/config.ts:306](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L306)

Get relationship types to track

#### Returns

`string`[]

- TODO: describe return value.

***

### getSearchConfig()

> **getSearchConfig**(): `object`

Defined in: [src/agent/dataAgent/config.ts:145](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L145)

Get search configuration

#### Returns

`object`

- TODO: describe return value.

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

Defined in: [src/agent/dataAgent/config.ts:110](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L110)

Get synthesis configuration

#### Returns

`object`

- TODO: describe return value.

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

> **getTelemetryConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/dataAgent/config.ts:333](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L333)

Get telemetry configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### isAutomaticPlanGenerationEnabled()

> **isAutomaticPlanGenerationEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:190](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L190)

Check if automatic plan generation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isCrossCategoryAnalysisEnabled()

> **isCrossCategoryAnalysisEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:172](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L172)

Check if cross-category analysis is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isInsightGenerationEnabled()

> **isInsightGenerationEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L163)

Check if insight generation is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### isRelationshipMappingEnabled()

> **isRelationshipMappingEnabled**(): `boolean`

Defined in: [src/agent/dataAgent/config.ts:181](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/dataAgent/config.ts#L181)

Check if relationship mapping is enabled

#### Returns

`boolean`

- TODO: describe return value.
