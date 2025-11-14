[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/agentConfig

# types/agentConfig

Type definitions for `agentConfig` used across the application.

This file defines all structures related to agent identity, routing,
scoring, profiling, escalation logic, and composite configuration.

## Remarks

### Developer & LLM Instructions:
- This is the **single source of truth** for all agent configuration types.
- Prefer placing comprehensive TSDoc comments here, rather than duplicating
  them in `agent.config.ts`.
- Add `@example` blocks to definitions where meaningful to clarify usage.
- Use `/** ... */` inline docblocks directly above each property.
- Avoid redundancy; focus on clarity and completeness in type definitions.
- Comments in `agent.config.ts` should be minimal and not diverge from this.

## Example

```ts
const agent: AgentIdentity = {
  id: "comm-agent",
  name: "Communications Agent",
  version: "1.0.0",
  description: "Handles formatting of outbound user-facing messages."
};
```

## See

 - [TSDoc Main Reference](https://tsdoc.org)
 - [Using TSDoc](https://tsdoc.org/pages/intro/using_tsdoc/)
 - [TypeScript JSDoc Reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)

## Classes

- [BaseAgentConfig](classes/BaseAgentConfig.md)

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

Re-exports [ConfigDescriptor](../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)

***

### createDescriptorMap

Re-exports [createDescriptorMap](../../shared/agentConfigDescriptors/functions/createDescriptorMap.md)
