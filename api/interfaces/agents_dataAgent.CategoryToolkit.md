[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/dataAgent](../modules/agents_dataAgent.md) / CategoryToolkit

# Interface: CategoryToolkit

[agents/dataAgent](../modules/agents_dataAgent.md).CategoryToolkit

Bundle of artefacts that help contributors work with a category.

## Table of contents

### Properties

- [examples](agents_dataAgent.CategoryToolkit.md#examples)
- [folder](agents_dataAgent.CategoryToolkit.md#folder)
- [queries](agents_dataAgent.CategoryToolkit.md#queries)
- [schemas](agents_dataAgent.CategoryToolkit.md#schemas)
- [types](agents_dataAgent.CategoryToolkit.md#types)
- [validation](agents_dataAgent.CategoryToolkit.md#validation)

## Properties

### examples

• **examples**: [`ExampleDataset`](agents_relevantDataManagerAgent.ExampleDataset.md)[]

Example datasets demonstrating data shape.

#### Defined in

[src/agents/dataAgent.ts:157](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L157)

___

### folder

• **folder**: [`FolderBlueprint`](agents_relevantDataManagerAgent.FolderBlueprint.md)

Blueprint describing the folder layout for the category.

#### Defined in

[src/agents/dataAgent.ts:154](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L154)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Remote query definitions that fetch authoritative data.

#### Defined in

[src/agents/dataAgent.ts:159](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L159)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

Schemas that define expected record structure.

#### Defined in

[src/agents/dataAgent.ts:155](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L155)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

Structured typing hints for SDK implementers.

#### Defined in

[src/agents/dataAgent.ts:156](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L156)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

Validation summary for the category data.

#### Defined in

[src/agents/dataAgent.ts:158](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/dataAgent.ts#L158)
