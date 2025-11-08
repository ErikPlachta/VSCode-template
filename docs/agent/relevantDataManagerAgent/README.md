[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / agent/relevantDataManagerAgent

# agent/relevantDataManagerAgent

Agent responsible for managing the mock "relevant data"
workspace that MCP servers expose to users. The agent keeps a rich catalogue
of categories (departments, people, applications, policies, resources) that
mirrors a repository folder structure complete with schemas, type
definitions, example datasets, validation reports, and remote query blueprints.

## Classes

- [RelevantDataManagerAgent](classes/RelevantDataManagerAgent.md)
- [UnknownCategoryError](classes/UnknownCategoryError.md)

## Interfaces

- [AgentOrchestrationGuidance](interfaces/AgentOrchestrationGuidance.md)
- [BusinessCategory](interfaces/BusinessCategory.md)
- [CategoryOrchestrationConfig](interfaces/CategoryOrchestrationConfig.md)
- [CategoryRequirements](interfaces/CategoryRequirements.md)
- [CategorySchema](interfaces/CategorySchema.md)
- [CategorySnapshot](interfaces/CategorySnapshot.md)
- [CategorySummary](interfaces/CategorySummary.md)
- [DatasetCatalogueEntry](interfaces/DatasetCatalogueEntry.md)
- [DataValidationIssue](interfaces/DataValidationIssue.md)
- [DataValidationReport](interfaces/DataValidationReport.md)
- [EntityConnections](interfaces/EntityConnections.md)
- [ExampleDataset](interfaces/ExampleDataset.md)
- [FolderBlueprint](interfaces/FolderBlueprint.md)
- [RelationshipDescription](interfaces/RelationshipDescription.md)
- [RemoteQueryBlueprint](interfaces/RemoteQueryBlueprint.md)
- [TypedDictField](interfaces/TypedDictField.md)
- [TypeDefinition](interfaces/TypeDefinition.md)

## Type Aliases

- [CategoryId](type-aliases/CategoryId.md)
- [CategoryRecord](type-aliases/CategoryRecord.md)
- [PrimitiveTypeName](type-aliases/PrimitiveTypeName.md)
- [TypeSchema](type-aliases/TypeSchema.md)

## Functions

- [createRelevantDataManagerAgent](functions/createRelevantDataManagerAgent.md)

## References

### relevantDataManagerAgentConfig

Re-exports [relevantDataManagerAgentConfig](agent.config/variables/relevantDataManagerAgentConfig.md)

***

### RelevantDataManagerAgentConfig

Re-exports [RelevantDataManagerAgentConfig](config/classes/RelevantDataManagerAgentConfig.md)
