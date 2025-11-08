[**mybusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[mybusiness-mcp-extension](../../../../modules.md) / [agent/clarificationAgent/config](../README.md) / ClarificationAgentConfig

# Class: ClarificationAgentConfig

Defined in: [src/agent/clarificationAgent/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L19)

Clarification agent-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new ClarificationAgentConfig**(`config?`): `ClarificationAgentConfig`

Defined in: [src/agent/clarificationAgent/config.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L29)

constructor function.

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`ClarificationAgentConfig`

- TODO: describe return value.

#### Throws

- May throw an error.

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getContextAnalysisConfig()

> **getContextAnalysisConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L115)

Get context analysis configuration

#### Returns

`object`

Context inference and terminology handling settings.

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

***

### getErrorHandlingConfig()

> **getErrorHandlingConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/clarificationAgent/config.ts:347](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L347)

Get error handling configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getEscalationConfig()

> **getEscalationConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:65](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L65)

Get escalation configuration

#### Returns

`object`

Escalation thresholds and fallback strategies.

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

***

### getEscalationThreshold()

> **getEscalationThreshold**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:180](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L180)

Get escalation threshold

#### Returns

`number`

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getFallbackStrategies()

> **getFallbackStrategies**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:252](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L252)

Get fallback strategies

#### Returns

`string`[]

- TODO: describe return value.

***

### getGuidanceConfig()

> **getGuidanceConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:50](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L50)

Get guidance configuration

#### Returns

`object`

Guidance settings including suggestion limits and style.

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

***

### getGuidanceTypes()

> **getGuidanceTypes**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:261](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L261)

Get guidance types to provide

#### Returns

`string`[]

- TODO: describe return value.

***

### getKnowledgeBaseConfig()

> **getKnowledgeBaseConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L83)

Get knowledge base configuration

#### Returns

`object`

Knowledge search limits and relevance thresholds.

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

***

### getKnowledgeSearchTimeout()

> **getKnowledgeSearchTimeout**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:311](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L311)

Get knowledge search timeout

#### Returns

`number`

- TODO: describe return value.

***

### getKnowledgeSources()

> **getKnowledgeSources**(): `string`[]

Defined in: [src/agent/clarificationAgent/config.ts:278](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L278)

Get knowledge sources to search

#### Returns

`string`[]

- TODO: describe return value.

***

### getMaxClarificationRounds()

> **getMaxClarificationRounds**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L189)

Get maximum clarification rounds

#### Returns

`number`

- TODO: describe return value.

***

### getMaxKnowledgeSnippets()

> **getMaxKnowledgeSnippets**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:162](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L162)

Get maximum knowledge snippets

#### Returns

`number`

- TODO: describe return value.

***

### getMaxResponseTime()

> **getMaxResponseTime**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:320](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L320)

Get maximum response time

#### Returns

`number`

- TODO: describe return value.

***

### getMaxSuggestions()

> **getMaxSuggestions**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:153](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L153)

Get maximum suggestions to provide

#### Returns

`number`

- TODO: describe return value.

***

### getPerformanceConfig()

> **getPerformanceConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L134)

Get performance configuration

#### Returns

`object`

Performance and caching related settings.

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

***

### getRelevanceThreshold()

> **getRelevanceThreshold**(): `number`

Defined in: [src/agent/clarificationAgent/config.ts:171](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L171)

Get relevance threshold for knowledge snippets

#### Returns

`number`

- TODO: describe return value.

***

### getResponseStyle()

> **getResponseStyle**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:295](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L295)

Get response style configuration

#### Returns

`object`

- TODO: describe return value.

##### formality?

> `optional` **formality**: `string`

##### includeEncouragement?

> `optional` **includeEncouragement**: `boolean`

##### maxResponseLength?

> `optional` **maxResponseLength**: `number`

##### tone?

> `optional` **tone**: `string`

***

### getRoutingConfig()

> **getRoutingConfig**(): `object`

Defined in: [src/agent/clarificationAgent/config.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L98)

Get routing configuration

#### Returns

`object`

Routing behaviour including alternative agent suggestions.

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

***

### getTelemetryConfig()

> **getTelemetryConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/clarificationAgent/config.ts:329](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L329)

Get telemetry configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### isKnowledgeSearchEnabled()

> **isKnowledgeSearchEnabled**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:198](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L198)

Check if knowledge search is enabled

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldAnalyzeMissingSignals()

> **shouldAnalyzeMissingSignals**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:234](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L234)

Check if missing signals should be analyzed

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldIncludeCategoryExamples()

> **shouldIncludeCategoryExamples**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:207](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L207)

Check if category examples should be included

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldIncludeQueryTemplates()

> **shouldIncludeQueryTemplates**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:216](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L216)

Check if query templates should be included

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldSuggestAlternativeAgents()

> **shouldSuggestAlternativeAgents**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:243](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L243)

Check if alternative agents should be suggested

#### Returns

`boolean`

- TODO: describe return value.

***

### shouldSuggestAlternativePhrasings()

> **shouldSuggestAlternativePhrasings**(): `boolean`

Defined in: [src/agent/clarificationAgent/config.ts:225](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b47dd1cc6e72353ede5a30309909c9d48eecc60a/src/agent/clarificationAgent/config.ts#L225)

Check if alternative phrasings should be suggested

#### Returns

`boolean`

- TODO: describe return value.
