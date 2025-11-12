[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/userContext.types

# types/userContext.types

UserContext type definitions

Shared interfaces for user context data validation. These interfaces define
the structure for compile-time type checking while allowing runtime data
to be loaded from user-configurable JSON files.

## Interfaces

- [AgentOrchestrationGuidance](interfaces/AgentOrchestrationGuidance.md)
- [ApplicationRecord](interfaces/ApplicationRecord.md)
- [BaseRecord](interfaces/BaseRecord.md)
- [BusinessCategory](interfaces/BusinessCategory.md)
- [CategoryConfig](interfaces/CategoryConfig.md)
- [CategoryDiscoveryResult](interfaces/CategoryDiscoveryResult.md)
- [CategoryOrchestrationConfig](interfaces/CategoryOrchestrationConfig.md)
- [CategoryRequirements](interfaces/CategoryRequirements.md)
- [CategorySchema](interfaces/CategorySchema.md)
- [CategorySnapshot](interfaces/CategorySnapshot.md)
- [CategorySummary](interfaces/CategorySummary.md)
- [CompanyPolicyRecord](interfaces/CompanyPolicyRecord.md)
- [CompanyResourceRecord](interfaces/CompanyResourceRecord.md)
- [DatasetCatalogueEntry](interfaces/DatasetCatalogueEntry.md)
- [DataValidationIssue](interfaces/DataValidationIssue.md)
- [DataValidationReport](interfaces/DataValidationReport.md)
- [DepartmentRecord](interfaces/DepartmentRecord.md)
- [EntityConnections](interfaces/EntityConnections.md)
- [ExampleDataset](interfaces/ExampleDataset.md)
- [FolderBlueprint](interfaces/FolderBlueprint.md)
- [InternalRelationshipDefinition](interfaces/InternalRelationshipDefinition.md)
- [LoadedDataset](interfaces/LoadedDataset.md)
- [PersonRecord](interfaces/PersonRecord.md)
- [RawAgentOrchestrationGuidance](interfaces/RawAgentOrchestrationGuidance.md)
- [RawCategoryMetadata](interfaces/RawCategoryMetadata.md)
- [RawExampleFile](interfaces/RawExampleFile.md)
- [RawOrchestrationConfig](interfaces/RawOrchestrationConfig.md)
- [RawQueryFile](interfaces/RawQueryFile.md)
- [RawRelationshipEntry](interfaces/RawRelationshipEntry.md)
- [RawSchemaFile](interfaces/RawSchemaFile.md)
- [RawTypeFile](interfaces/RawTypeFile.md)
- [RelationshipDefinition](interfaces/RelationshipDefinition.md)
- [RelationshipDescription](interfaces/RelationshipDescription.md)
- [RelationshipLoadResult](interfaces/RelationshipLoadResult.md)
- [RemoteQueryBlueprint](interfaces/RemoteQueryBlueprint.md)
- [TypedDictField](interfaces/TypedDictField.md)
- [TypeDefinition](interfaces/TypeDefinition.md)
- [ValidationError](interfaces/ValidationError.md)
- [ValidationResult](interfaces/ValidationResult.md)

## Type Aliases

- [CategoryId](type-aliases/CategoryId.md)
- [CategoryRecord](type-aliases/CategoryRecord.md)
- [PrimitiveTypeName](type-aliases/PrimitiveTypeName.md)
- [TypeSchema](type-aliases/TypeSchema.md)

## Functions

- [formatValidationErrors](functions/formatValidationErrors.md)
- [isBaseRecord](functions/isBaseRecord.md)
- [isCategoryConfig](functions/isCategoryConfig.md)
- [isRecordArray](functions/isRecordArray.md)
- [validateCategoryConfig](functions/validateCategoryConfig.md)
- [validateCategoryRecord](functions/validateCategoryRecord.md)
- [validateRelationshipDefinition](functions/validateRelationshipDefinition.md)
