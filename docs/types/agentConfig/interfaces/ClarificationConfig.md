[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ClarificationConfig

# Interface: ClarificationConfig

Defined in: [src/types/agentConfig.ts:271](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L271)

Clarification agent-specific configuration

## Properties

### contextAnalysis?

> `optional` **contextAnalysis**: `object`

Defined in: [src/types/agentConfig.ts:307](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L307)

#### contextConfidenceThreshold?

> `optional` **contextConfidenceThreshold**: `number`

#### enableIntentAnalysis?

> `optional` **enableIntentAnalysis**: `boolean`

#### handleDomainTerminology?

> `optional` **handleDomainTerminology**: `boolean`

#### identifyMissingComponents?

> `optional` **identifyMissingComponents**: `boolean`

#### suggestQueryStructure?

> `optional` **suggestQueryStructure**: `boolean`

***

### escalation

> **escalation**: `object`

Defined in: [src/types/agentConfig.ts:285](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L285)

#### clarificationTimeWindow?

> `optional` **clarificationTimeWindow**: `number`

#### escalationThreshold

> **escalationThreshold**: `number`

#### fallbackStrategies

> **fallbackStrategies**: `string`[]

#### maxClarificationRounds

> **maxClarificationRounds**: `number`

#### suggestHumanSupportAfterMaxRounds?

> `optional` **suggestHumanSupportAfterMaxRounds**: `boolean`

***

### guidance

> **guidance**: `object`

Defined in: [src/types/agentConfig.ts:272](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L272)

#### guidanceTypes?

> `optional` **guidanceTypes**: `string`[]

#### includeCategoryExamples

> **includeCategoryExamples**: `boolean`

#### includeQueryTemplates

> **includeQueryTemplates**: `boolean`

#### maxSuggestions

> **maxSuggestions**: `number`

#### responseStyle?

> `optional` **responseStyle**: `object`

##### responseStyle.formality?

> `optional` **formality**: `string`

##### responseStyle.includeEncouragement?

> `optional` **includeEncouragement**: `boolean`

##### responseStyle.maxResponseLength?

> `optional` **maxResponseLength**: `number`

##### responseStyle.tone?

> `optional` **tone**: `string`

#### suggestAlternativePhrasings?

> `optional` **suggestAlternativePhrasings**: `boolean`

***

### knowledgeBase

> **knowledgeBase**: `object`

Defined in: [src/types/agentConfig.ts:292](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L292)

#### enableKnowledgeRanking?

> `optional` **enableKnowledgeRanking**: `boolean`

#### enableKnowledgeSearch

> **enableKnowledgeSearch**: `boolean`

#### knowledgeSearchTimeout?

> `optional` **knowledgeSearchTimeout**: `number`

#### knowledgeSources?

> `optional` **knowledgeSources**: `string`[]

#### maxKnowledgeSnippets

> **maxKnowledgeSnippets**: `number`

#### relevanceThreshold

> **relevanceThreshold**: `number`

***

### performance?

> `optional` **performance**: `object`

Defined in: [src/types/agentConfig.ts:314](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L314)

#### enableParallelProcessing?

> `optional` **enableParallelProcessing**: `boolean`

#### enableResponseCaching?

> `optional` **enableResponseCaching**: `boolean`

#### maxResponseTime?

> `optional` **maxResponseTime**: `number`

#### processingBatchSize?

> `optional` **processingBatchSize**: `number`

#### responseCacheTTL?

> `optional` **responseCacheTTL**: `number`

***

### routing?

> `optional` **routing**: `object`

Defined in: [src/types/agentConfig.ts:300](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/ac681b9995fc70e0cb32ac36f59d91c5cc543916/src/types/agentConfig.ts#L300)

#### analyzeMissingSignals?

> `optional` **analyzeMissingSignals**: `boolean`

#### includeAgentCapabilitySummaries?

> `optional` **includeAgentCapabilitySummaries**: `boolean`

#### maxCandidateAgents?

> `optional` **maxCandidateAgents**: `number`

#### routingConfidenceThreshold?

> `optional` **routingConfidenceThreshold**: `number`

#### suggestAlternativeAgents?

> `optional` **suggestAlternativeAgents**: `boolean`
