[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [agent/orchestrator](../README.md) / Orchestrator

# Class: Orchestrator

Defined in: [src/agent/orchestrator/index.ts:48](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L48)

Configuration-driven orchestrator that routes questions to appropriate agents

## Constructors

### Constructor

> **new Orchestrator**(`config?`): `Orchestrator`

Defined in: [src/agent/orchestrator/index.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L63)

constructor function.

#### Parameters

##### config?

[`OrchestratorConfig`](../config/classes/OrchestratorConfig.md)

config parameter.

#### Returns

`Orchestrator`

- TODO: describe return value.

## Methods

### classify()

> **classify**(`questionOrInput`, `context?`): [`OrchestratorClassification`](../interfaces/OrchestratorClassification.md)

Defined in: [src/agent/orchestrator/index.ts:152](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L152)

Classify intent using configuration-driven approach.

#### Parameters

##### questionOrInput

questionOrInput parameter.

`string` | [`OrchestratorInput`](../interfaces/OrchestratorInput.md)

##### context?

context parameter.

###### topic?

`string`

#### Returns

[`OrchestratorClassification`](../interfaces/OrchestratorClassification.md)

- TODO: describe return value.

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/agent/orchestrator/index.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L98)

Get public configuration

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

***

### getCurrentConfig()

> **getCurrentConfig**(): `Record`\<`string`, `unknown`\>

Defined in: [src/agent/orchestrator/index.ts:426](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L426)

Get current configuration

#### Returns

`Record`\<`string`, `unknown`\>

- TODO: describe return value.

***

### getSupportedIntents()

> **getSupportedIntents**(): `string`[]

Defined in: [src/agent/orchestrator/index.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L107)

Get supported intents

#### Returns

`string`[]

- TODO: describe return value.

***

### handle()

> **handle**(`input`): `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

Defined in: [src/agent/orchestrator/index.ts:353](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L353)

Handle user requests by classifying intent and routing to appropriate agents.

#### Parameters

##### input

[`OrchestratorInput`](../interfaces/OrchestratorInput.md)

input parameter.

#### Returns

`Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

- TODO: describe return value.

***

### route()

> **route**(`input`): `Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

Defined in: [src/agent/orchestrator/index.ts:253](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L253)

Route request using configuration (simplified for now - delegates to original implementation)

#### Parameters

##### input

[`OrchestratorInput`](../interfaces/OrchestratorInput.md)

input parameter.

#### Returns

`Promise`\<[`OrchestratorResponse`](../interfaces/OrchestratorResponse.md)\>

- TODO: describe return value.

***

### createFromConfig()

> `static` **createFromConfig**(`configPath?`): `Promise`\<`Orchestrator`\>

Defined in: [src/agent/orchestrator/index.ts:79](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/index.ts#L79)

Create orchestrator instance with configuration loaded from file

#### Parameters

##### configPath?

`string`

configPath parameter.

#### Returns

`Promise`\<`Orchestrator`\>

- TODO: describe return value.
