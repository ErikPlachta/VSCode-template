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

• **agent**: ``"relevant-data-manager"`` \| ``"database-agent"`` \| ``"data-agent"`` \| ``"orchestrator"``

#### Defined in

[src/agents/orchestrator.ts:40](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L40)

___

### intent

• **intent**: [`OrchestratorIntent`](../modules/agents_orchestrator.md#orchestratorintent)

#### Defined in

[src/agents/orchestrator.ts:39](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L39)

___

### markdown

• **markdown**: `string`

#### Defined in

[src/agents/orchestrator.ts:44](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L44)

___

### payload

• **payload**: `unknown`

#### Defined in

[src/agents/orchestrator.ts:43](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L43)

___

### rationale

• **rationale**: `string`

#### Defined in

[src/agents/orchestrator.ts:42](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L42)

___

### summary

• **summary**: `string`

#### Defined in

[src/agents/orchestrator.ts:41](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/orchestrator.ts#L41)
