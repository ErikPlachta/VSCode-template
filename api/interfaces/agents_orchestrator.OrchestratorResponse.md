[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/orchestrator](../modules/agents_orchestrator.md) / OrchestratorResponse

# Interface: OrchestratorResponse

[agents/orchestrator](../modules/agents_orchestrator.md).OrchestratorResponse

Result of orchestrating a question across the available agents.

## Table of contents

### Properties

- [agent](agents_orchestrator.OrchestratorResponse.md#agent)
- [intent](agents_orchestrator.OrchestratorResponse.md#intent)
- [markdown](agents_orchestrator.OrchestratorResponse.md#markdown)
- [payload](agents_orchestrator.OrchestratorResponse.md#payload)
- [rationale](agents_orchestrator.OrchestratorResponse.md#rationale)
- [summary](agents_orchestrator.OrchestratorResponse.md#summary)

## Properties

### agent

• **agent**: ``"relevant-data-manager"`` \| ``"database-agent"`` \| ``"data-agent"`` \| ``"clarification-agent"`` \| ``"orchestrator"``

#### Defined in

[src/agents/orchestrator.ts:49](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L49)

___

### intent

• **intent**: [`OrchestratorIntent`](../modules/agents_orchestrator.md#orchestratorintent)

#### Defined in

[src/agents/orchestrator.ts:48](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L48)

___

### markdown

• **markdown**: `string`

#### Defined in

[src/agents/orchestrator.ts:53](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L53)

___

### payload

• **payload**: `unknown`

#### Defined in

[src/agents/orchestrator.ts:52](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L52)

___

### rationale

• **rationale**: `string`

#### Defined in

[src/agents/orchestrator.ts:51](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L51)

___

### summary

• **summary**: `string`

#### Defined in

[src/agents/orchestrator.ts:50](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/orchestrator.ts#L50)
