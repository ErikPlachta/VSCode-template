[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/agentConfig

# types/agentConfig

Agent configuration type declarations used across the application.

This module defines structures for agent identity, routing intents,
text processing, escalation logic, performance profiling, execution
control, scoring, and composite configuration objects consumed by
the Orchestrator and individual agents.

## Remarks

- Single source of truth for agent configuration related types.
- Keep runtime helper functions in shared modules; this file remains types-only.
- Add focused `@example` blocks on individual interfaces where helpful.
- Prefer concise property level comments over large top-level samples.

## Interfaces

- [AgentConfigDefinition](interfaces/AgentConfigDefinition.md)
- [AgentIdentity](interfaces/AgentIdentity.md)
- [AnalysisInput](interfaces/AnalysisInput.md)
- [ApplicationFacingConfig](interfaces/ApplicationFacingConfig.md)
- [CategoryRecord](interfaces/CategoryRecord.md)
- [CategorySchema](interfaces/CategorySchema.md)
- [ClarificationAgentInput](interfaces/ClarificationAgentInput.md)
- [ClarificationConfig](interfaces/ClarificationConfig.md)
- [ClarificationResponse](interfaces/ClarificationResponse.md)
- [CommunicationClarificationConfig](interfaces/CommunicationClarificationConfig.md)
- [CommunicationConfig](interfaces/CommunicationConfig.md)
- [CrossCategoryConnection](interfaces/CrossCategoryConnection.md)
- [DatabaseConfig](interfaces/DatabaseConfig.md)
- [DatabaseOperationsConfig](interfaces/DatabaseOperationsConfig.md)
- [DatabaseValidationConfig](interfaces/DatabaseValidationConfig.md)
- [DataConfig](interfaces/DataConfig.md)
- [DataInsight](interfaces/DataInsight.md)
- [DataLoaderConfig](interfaces/DataLoaderConfig.md)
- [DataSource](interfaces/DataSource.md)
- [ErrorHandlingConfig](interfaces/ErrorHandlingConfig.md)
- [EscalationConfig](interfaces/EscalationConfig.md)
- [ExecutionConfig](interfaces/ExecutionConfig.md)
- [ExplorationPlan](interfaces/ExplorationPlan.md)
- [ExplorationStep](interfaces/ExplorationStep.md)
- [IndividualAgentConfig](interfaces/IndividualAgentConfig.md)
- [IntentConfig](interfaces/IntentConfig.md)
- [MonitoringConfig](interfaces/MonitoringConfig.md)
- [OrchestrationConfig](interfaces/OrchestrationConfig.md)
- [OrchestratorClassification](interfaces/OrchestratorClassification.md)
- [OrchestratorInput](interfaces/OrchestratorInput.md)
- [OrchestratorResponse](interfaces/OrchestratorResponse.md)
- [PerformanceConfig](interfaces/PerformanceConfig.md)
- [QueryOptions](interfaces/QueryOptions.md)
- [QueryResult](interfaces/QueryResult.md)
- [RelationshipDescription](interfaces/RelationshipDescription.md)
- [RelevantDataManagerConfig](interfaces/RelevantDataManagerConfig.md)
- [TextProcessingConfig](interfaces/TextProcessingConfig.md)
- [TopicSearchResult](interfaces/TopicSearchResult.md)
- [UserFacingConfig](interfaces/UserFacingConfig.md)

## Type Aliases

- [CategoryId](type-aliases/CategoryId.md)
- [OrchestratorIntent](type-aliases/OrchestratorIntent.md)

## References

### ConfigDescriptor

Re-exports [ConfigDescriptor](../../shared/config/descriptors/interfaces/ConfigDescriptor.md)
