[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / CategoryOrchestrationConfig

# Interface: CategoryOrchestrationConfig

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).CategoryOrchestrationConfig

## Table of contents

### Properties

- [agents](agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md#agents)
- [escalateWhen](agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md#escalatewhen)
- [signals](agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md#signals)
- [summary](agents_relevantDataManagerAgent.CategoryOrchestrationConfig.md#summary)

## Properties

### agents

• **agents**: `Object`

Agent-specific routing guidance.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `dataAgent` | [`AgentOrchestrationGuidance`](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md) |
| `databaseAgent` | [`AgentOrchestrationGuidance`](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md) |
| `relevantDataManager` | [`AgentOrchestrationGuidance`](agents_relevantDataManagerAgent.AgentOrchestrationGuidance.md) |

#### Defined in

[src/agents/relevantDataManagerAgent.ts:173](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L173)

___

### escalateWhen

• `Optional` **escalateWhen**: `string`[]

Situations where orchestration should escalate for clarification.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:171](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L171)

___

### signals

• **signals**: `string`[]

Triggers that indicate the category is relevant to the request.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:169](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L169)

___

### summary

• **summary**: `string`

High-level framing of how orchestration should leverage the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:167](https://github.com/ErikPlachta/VSCode-template/blob/f8ce84aa509d59a276456b2a18219a97608ad4c4/src/agents/relevantDataManagerAgent.ts#L167)
