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

• **new Orchestrator**(`manager?`, `databaseAgent?`, `dataAgent?`): [`Orchestrator`](agents_orchestrator.Orchestrator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`RelevantDataManagerAgent`](agents_relevantDataManagerAgent.RelevantDataManagerAgent.md) |
| `databaseAgent?` | [`DatabaseAgent`](agents_databaseAgent.DatabaseAgent.md) |
| `dataAgent?` | [`DataAgent`](agents_dataAgent.DataAgent.md) |

#### Returns

[`Orchestrator`](agents_orchestrator.Orchestrator.md)

#### Defined in

[src/agents/orchestrator.ts:121](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L121)

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

[src/agents/orchestrator.ts:142](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L142)

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

[src/agents/orchestrator.ts:255](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L255)

___

### listCatalogue

▸ **listCatalogue**(): [`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

Return the consolidated dataset catalogue.

#### Returns

[`DatasetCatalogueEntry`](../interfaces/agents_relevantDataManagerAgent.DatasetCatalogueEntry.md)[]

#### Defined in

[src/agents/orchestrator.ts:137](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L137)

___

### listCategories

▸ **listCategories**(): [`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

List the categories known to the orchestrator.

#### Returns

[`CategorySummary`](../interfaces/agents_relevantDataManagerAgent.CategorySummary.md)[]

#### Defined in

[src/agents/orchestrator.ts:132](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L132)
