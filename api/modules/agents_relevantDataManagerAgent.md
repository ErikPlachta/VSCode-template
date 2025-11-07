[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / agents/relevantDataManagerAgent

# Module: agents/relevantDataManagerAgent

**`Fileoverview`**

Agent responsible for managing the mock "relevant data"
workspace that MCP servers expose to users. The agent keeps a rich catalogue
of categories (departments, people, applications, policies, resources) that
mirrors a repository folder structure complete with schemas, python type
hints, example datasets, tests, and remote query blueprints.

## Table of contents

### Classes

- [RelevantDataManagerAgent](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)
- [UnknownCategoryError](../classes/agents_relevantDataManagerAgent.UnknownCategoryError.md)

### Interfaces

- [BusinessCategory](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)
- [CategorySchema](../interfaces/agents_relevantDataManagerAgent.CategorySchema.md)
- [CategorySnapshot](../interfaces/agents_relevantDataManagerAgent.CategorySnapshot.md)
- [CategorySummary](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)
- [CategoryTestArtefact](../interfaces/agents_relevantDataManagerAgent.CategoryTestArtefact.md)
- [EntityConnections](../interfaces/agents_relevantDataManagerAgent.EntityConnections.md)
- [ExampleDataset](../interfaces/agents_relevantDataManagerAgent.ExampleDataset.md)
- [FolderBlueprint](../interfaces/agents_relevantDataManagerAgent.FolderBlueprint.md)
- [PythonTypeDefinition](../interfaces/agents_relevantDataManagerAgent.PythonTypeDefinition.md)
- [RelationshipDescription](../interfaces/agents_relevantDataManagerAgent.RelationshipDescription.md)
- [RemoteQueryBlueprint](../interfaces/agents_relevantDataManagerAgent.RemoteQueryBlueprint.md)

### Type Aliases

- [CategoryId](agents_relevantDataManagerAgent.md#categoryid)
- [CategoryRecord](agents_relevantDataManagerAgent.md#categoryrecord)

### Variables

- [MOCK\_RELEVANT\_DATASET](agents_relevantDataManagerAgent.md#mock_relevant_dataset)

### Functions

- [createRelevantDataManagerAgent](agents_relevantDataManagerAgent.md#createrelevantdatamanageragent)

## Type Aliases

### CategoryId

Ƭ **CategoryId**: ``"departments"`` \| ``"people"`` \| ``"applications"`` \| ``"companyPolicies"`` \| ``"companyResources"``

Unique identifier for each category in the mock repository.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:158](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L158)

___

### CategoryRecord

Ƭ **CategoryRecord**: `Record`\<`string`, `unknown`\> & \{ `id`: `string` ; `name?`: `string` ; `title?`: `string`  }

Minimal representation of a record stored under a category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:151](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L151)

## Variables

### MOCK\_RELEVANT\_DATASET

• `Const` **MOCK\_RELEVANT\_DATASET**: `Record`\<[`CategoryId`](agents_relevantDataManagerAgent.md#categoryid), [`BusinessCategory`](../interfaces/agents_relevantDataManagerAgent.BusinessCategory.md)\>

Static dataset that mimics the MCP relevant-data workspace.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:257](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L257)

## Functions

### createRelevantDataManagerAgent

▸ **createRelevantDataManagerAgent**(): [`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

Factory helper that constructs a [RelevantDataManagerAgent](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md).

#### Returns

[`RelevantDataManagerAgent`](../classes/agents_relevantDataManagerAgent.RelevantDataManagerAgent.md)

Configured manager instance.

**`Example`**

```ts
const manager = createRelevantDataManagerAgent();
```

#### Defined in

[src/agents/relevantDataManagerAgent.ts:1621](https://github.com/ErikPlachta/VSCode-template/blob/8a313d91ccb62295c1c7ec728031065ba0cad165/src/agents/relevantDataManagerAgent.ts#L1621)
