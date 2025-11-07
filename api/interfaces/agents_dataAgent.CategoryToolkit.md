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

[src/agents/dataAgent.ts:154](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L154)

___

### folder

• **folder**: [`FolderBlueprint`](agents_relevantDataManagerAgent.FolderBlueprint.md)

Blueprint describing the folder layout for the category.

#### Defined in

[src/agents/dataAgent.ts:151](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L151)

___

### queries

• **queries**: [`RemoteQueryBlueprint`](agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)[]

Remote query definitions that fetch authoritative data.

#### Defined in

[src/agents/dataAgent.ts:156](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L156)

___

### schemas

• **schemas**: [`CategorySchema`](agents_relevantDataManagerAgent.CategorySchema.md)[]

Schemas that define expected record structure.

#### Defined in

[src/agents/dataAgent.ts:152](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L152)

___

### types

• **types**: [`TypeDefinition`](agents_relevantDataManagerAgent.TypeDefinition.md)[]

Structured typing hints for SDK implementers.

#### Defined in

[src/agents/dataAgent.ts:153](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L153)

___

### validation

• **validation**: [`DataValidationReport`](agents_relevantDataManagerAgent.DataValidationReport.md)

Validation summary for the category data.

#### Defined in

[src/agents/dataAgent.ts:155](https://github.com/ErikPlachta/VSCode-template/blob/339c99ef0246565d907bae55528ad8d2322e79b8/src/agents/dataAgent.ts#L155)
