---
title: Clarification Config
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

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / ClarificationConfig

# Interface: ClarificationConfig

Defined in: [src/types/agentConfig.ts:260](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L260)

Clarification agent-specific configuration

## Properties

### contextAnalysis?

> `optional` **contextAnalysis**: `object`

Defined in: [src/types/agentConfig.ts:296](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L296)

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

Defined in: [src/types/agentConfig.ts:274](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L274)

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

Defined in: [src/types/agentConfig.ts:261](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L261)

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

Defined in: [src/types/agentConfig.ts:281](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L281)

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

Defined in: [src/types/agentConfig.ts:303](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L303)

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

Defined in: [src/types/agentConfig.ts:289](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L289)

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
