[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/interfaces

# types/interfaces

Agent interfaces for orchestrator communication.

Clean, dependency-light interfaces the Orchestrator uses to communicate with
specialized agents. Each agent has a distinct purpose and should only be used
for its specific function.

## Remarks

These are type-only contracts to preserve agent isolation: the Orchestrator
coordinates and returns typed data; agents implement these interfaces; the
CommunicationAgent owns all user-facing formatting.

## Interfaces

- [AgentRequest](interfaces/AgentRequest.md)
- [AgentResponse](interfaces/AgentResponse.md)
- [AnalysisInput](interfaces/AnalysisInput.md)
- [BusinessDataCatalog](interfaces/BusinessDataCatalog.md)
- [CategoryInfo](interfaces/CategoryInfo.md)
- [CategorySchema](interfaces/CategorySchema.md)
- [ClarificationAgentInterface](interfaces/ClarificationAgentInterface.md)
- [ClarificationInput](interfaces/ClarificationInput.md)
- [ClarificationResponse](interfaces/ClarificationResponse.md)
- [CrossCategoryConnection](interfaces/CrossCategoryConnection.md)
- [DataAgentInterface](interfaces/DataAgentInterface.md)
- [DatabaseAgentInterface](interfaces/DatabaseAgentInterface.md)
- [DataInsight](interfaces/DataInsight.md)
- [DataSource](interfaces/DataSource.md)
- [ExplorationPlan](interfaces/ExplorationPlan.md)
- [ExplorationStep](interfaces/ExplorationStep.md)
- [KnowledgeSnippet](interfaces/KnowledgeSnippet.md)
- [OrchestrationWorkflow](interfaces/OrchestrationWorkflow.md)
- [QueryResult](interfaces/QueryResult.md)
- [RelationshipDescription](interfaces/RelationshipDescription.md)
- [RelevantDataManagerInterface](interfaces/RelevantDataManagerInterface.md)
- [TopicSearchResult](interfaces/TopicSearchResult.md)
- [UserContextManagerInterface](interfaces/UserContextManagerInterface.md)
- [ValidationResult](interfaces/ValidationResult.md)

## Type Aliases

- [~~BusinessDataCatalogue~~](type-aliases/BusinessDataCatalogue.md)
- [UserContextCatalog](type-aliases/UserContextCatalog.md)
- [~~UserContextCatalogue~~](type-aliases/UserContextCatalogue.md)
