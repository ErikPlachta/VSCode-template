---
title: README
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
[**mybusiness-mcp-extension v1.0.0**](../README.md)

***

[mybusiness-mcp-extension](../modules.md) / agent

# agent

Centralized exports for all agent implementations.

This file exports properly isolated agents that follow single responsibility principle.
Each agent has a distinct purpose and does not depend on other agents.
The Orchestrator coordinates all inter-agent communication.

## References

### AgentConfigurationService

Re-exports [AgentConfigurationService](../shared/agentConfigurationService/classes/AgentConfigurationService.md)

***

### AgentIdentifier

Re-exports [AgentIdentifier](../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

***

### AgentProfile

Re-exports [AgentProfile](../mcp/config/unifiedAgentConfig/type-aliases/AgentProfile.md)

***

### AgentRequest

Re-exports [AgentRequest](interfaces/interfaces/AgentRequest.md)

***

### AgentResponse

Re-exports [AgentResponse](interfaces/interfaces/AgentResponse.md)

***

### AnalysisInput

Re-exports [AnalysisInput](interfaces/interfaces/AnalysisInput.md)

***

### BusinessDataCatalogue

Re-exports [BusinessDataCatalogue](interfaces/interfaces/BusinessDataCatalogue.md)

***

### CategoryId

Re-exports [CategoryId](interfaces/type-aliases/CategoryId.md)

***

### CategoryInfo

Re-exports [CategoryInfo](interfaces/interfaces/CategoryInfo.md)

***

### CategoryRecord

Re-exports [CategoryRecord](interfaces/interfaces/CategoryRecord.md)

***

### CategorySchema

Re-exports [CategorySchema](interfaces/interfaces/CategorySchema.md)

***

### ClarificationAgent

Re-exports [ClarificationAgent](clarificationAgent/classes/ClarificationAgent.md)

***

### ClarificationAgentInterface

Re-exports [ClarificationAgentInterface](interfaces/interfaces/ClarificationAgentInterface.md)

***

### ClarificationAgentProfile

Re-exports [ClarificationAgentProfile](../mcp/config/unifiedAgentConfig/variables/ClarificationAgentProfile.md)

***

### ClarificationInput

Re-exports [ClarificationInput](interfaces/interfaces/ClarificationInput.md)

***

### ClarificationResponse

Re-exports [ClarificationResponse](interfaces/interfaces/ClarificationResponse.md)

***

### CrossCategoryConnection

Re-exports [CrossCategoryConnection](interfaces/interfaces/CrossCategoryConnection.md)

***

### DataAgent

Re-exports [DataAgent](dataAgent/classes/DataAgent.md)

***

### DataAgentInterface

Re-exports [DataAgentInterface](interfaces/interfaces/DataAgentInterface.md)

***

### DataAgentProfile

Re-exports [DataAgentProfile](../mcp/config/unifiedAgentConfig/variables/DataAgentProfile.md)

***

### DatabaseAgent

Re-exports [DatabaseAgent](databaseAgent/classes/DatabaseAgent.md)

***

### DatabaseAgentInterface

Re-exports [DatabaseAgentInterface](interfaces/interfaces/DatabaseAgentInterface.md)

***

### DatabaseAgentProfile

Re-exports [DatabaseAgentProfile](../mcp/config/unifiedAgentConfig/variables/DatabaseAgentProfile.md)

***

### DataInsight

Re-exports [DataInsight](interfaces/interfaces/DataInsight.md)

***

### DataSource

Re-exports [DataSource](interfaces/interfaces/DataSource.md)

***

### ExplorationPlan

Re-exports [ExplorationPlan](interfaces/interfaces/ExplorationPlan.md)

***

### ExplorationStep

Re-exports [ExplorationStep](interfaces/interfaces/ExplorationStep.md)

***

### getAgentConfigurationService

Re-exports [getAgentConfigurationService](../shared/agentConfigurationService/functions/getAgentConfigurationService.md)

***

### KnowledgeSnippet

Re-exports [KnowledgeSnippet](interfaces/interfaces/KnowledgeSnippet.md)

***

### KnownAgentProfile

Re-exports [KnownAgentProfile](../mcp/config/unifiedAgentConfig/type-aliases/KnownAgentProfile.md)

***

### OrchestrationWorkflow

Re-exports [OrchestrationWorkflow](interfaces/interfaces/OrchestrationWorkflow.md)

***

### Orchestrator

Re-exports [Orchestrator](orchestrator/classes/Orchestrator.md)

***

### OrchestratorProfile

Re-exports [OrchestratorProfile](../mcp/config/unifiedAgentConfig/variables/OrchestratorProfile.md)

***

### QueryResult

Re-exports [QueryResult](interfaces/interfaces/QueryResult.md)

***

### RelationshipDescription

Re-exports [RelationshipDescription](interfaces/interfaces/RelationshipDescription.md)

***

### RelevantDataManagerAgent

Re-exports [RelevantDataManagerAgent](relevantDataManagerAgent/classes/RelevantDataManagerAgent.md)

***

### RelevantDataManagerAgentProfile

Re-exports [RelevantDataManagerAgentProfile](../mcp/config/unifiedAgentConfig/variables/RelevantDataManagerAgentProfile.md)

***

### RelevantDataManagerInterface

Re-exports [RelevantDataManagerInterface](interfaces/interfaces/RelevantDataManagerInterface.md)

***

### RepositoryHealthAgent

Re-exports [RepositoryHealthAgent](../tools/repositoryHealth/classes/RepositoryHealthAgent.md)

***

### TopicSearchResult

Re-exports [TopicSearchResult](interfaces/interfaces/TopicSearchResult.md)

***

### ValidationResult

Re-exports [ValidationResult](interfaces/interfaces/ValidationResult.md)


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
