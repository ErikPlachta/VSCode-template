[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ClarificationConfig

# Interface: ClarificationConfig

Defined in: [src/types/agentConfig.ts:513](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L513)

ClarificationAgent configuration for guidance, escalation, knowledge search, routing, and performance.

## Example

```ts
const clarCfg: ClarificationConfig = {
  guidance: { maxSuggestions: 5, includeCategoryExamples: true, includeQueryTemplates: true },
  escalation: { escalationThreshold: 0.4, fallbackStrategies: ["rephrase", "handoff"], maxClarificationRounds: 1 },
  knowledgeBase: { enableKnowledgeSearch: true, maxKnowledgeSnippets: 3, relevanceThreshold: 0.5 },
};
```

## Properties

### contextAnalysis?

> `optional` **contextAnalysis**: `object`

Defined in: [src/types/agentConfig.ts:557](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L557)

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

Defined in: [src/types/agentConfig.ts:535](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L535)

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

Defined in: [src/types/agentConfig.ts:514](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L514)

#### guidanceTypes?

> `optional` **guidanceTypes**: `string`[]

#### helpSystem?

> `optional` **helpSystem**: `object`

##### helpSystem.enabled?

> `optional` **enabled**: `boolean`

##### helpSystem.includeCategorySummaries?

> `optional` **includeCategorySummaries**: `boolean`

##### helpSystem.includeExampleQueries?

> `optional` **includeExampleQueries**: `boolean`

##### helpSystem.listAgentCapabilities?

> `optional` **listAgentCapabilities**: `boolean`

##### helpSystem.maxCategoriesToList?

> `optional` **maxCategoriesToList**: `number`

##### helpSystem.maxExamplesPerAgent?

> `optional` **maxExamplesPerAgent**: `number`

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

Defined in: [src/types/agentConfig.ts:542](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L542)

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

Defined in: [src/types/agentConfig.ts:564](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L564)

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

Defined in: [src/types/agentConfig.ts:550](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/agentConfig.ts#L550)

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
