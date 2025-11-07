[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/orchestrator](../modules/agents_orchestrator.md) / Orchestrator

# Class: Orchestrator

[agents/orchestrator](../modules/agents_orchestrator.md).Orchestrator

Multi-agent orchestrator that decides which agent to invoke based on the
user's intent and available context.

## Table of contents

### Constructors

- [constructor](agents_orchestrator.Orchestrator.md#constructor)

### Methods

- [classify](agents_orchestrator.Orchestrator.md#classify)
- [handle](agents_orchestrator.Orchestrator.md#handle)
- [listCatalogue](agents_orchestrator.Orchestrator.md#listcatalogue)
- [listCategories](agents_orchestrator.Orchestrator.md#listcategories)

## Constructors

### constructor

• **new Orchestrator**(`manager?`, `databaseAgent?`, `dataAgent?`, `clarificationAgent?`): [`Orchestrator`](agents_orchestrator.Orchestrator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) |
| `databaseAgent?` | [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md) |
| `dataAgent?` | [`DataAgent`](agents_dataAgent.DataAgent.md) |
| `clarificationAgent?` | [`ClarificationAgent`](agents_clarificationAgent.ClarificationAgent.md) |

#### Returns

[`Orchestrator`](agents_orchestrator.Orchestrator.md)

#### Defined in

[src/agents/orchestrator.ts:138](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/orchestrator.ts#L138)

## Methods

### classify

▸ **classify**(`question`, `context?`): [`OrchestratorClassification`](../interfaces/agents_orchestrator.OrchestratorClassification.md)

Determine which agent should receive the question.

#### Parameters

| Name | Type |
| :------ | :------ |
| `question` | `string` |
| `context` | `Object` |
| `context.orchestration?` | [`CategoryOrchestrationConfig`](../interfaces/agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md) |
| `context.topic?` | `string` |

#### Returns

[`OrchestratorClassification`](../interfaces/agents_orchestrator.OrchestratorClassification.md)

#### Defined in

[src/agents/orchestrator.ts:174](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/orchestrator.ts#L174)

___

### handle

▸ **handle**(`input`): `Promise`\<[`OrchestratorResponse`](../interfaces/agents_orchestrator.OrchestratorResponse.md)\>

Execute the orchestration flow for the supplied input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`OrchestratorInput`](../interfaces/agents_orchestrator.OrchestratorInput.md) |

#### Returns

`Promise`\<[`OrchestratorResponse`](../interfaces/agents_orchestrator.OrchestratorResponse.md)\>

#### Defined in

[src/agents/orchestrator.ts:339](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/orchestrator.ts#L339)

___

### listCatalogue

▸ **listCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Return the consolidated dataset catalogue.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

#### Defined in

[src/agents/orchestrator.ts:169](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/orchestrator.ts#L169)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

List the categories known to the orchestrator.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/orchestrator.ts:164](https://github.com/ErikPlachta/VSCode-template/blob/c2a17be4dbd155b4047974e80e13de2e00582ad8/src/agents/orchestrator.ts#L164)
