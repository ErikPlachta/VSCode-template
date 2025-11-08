[**myBusiness-mcp-extension v1.0.0**](../../../../README.md)

***

[myBusiness-mcp-extension](../../../../modules.md) / [agent/orchestrator/config](../README.md) / OrchestratorConfig

# Class: OrchestratorConfig

Defined in: [src/agent/orchestrator/config.ts:19](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L19)

Orchestrator-specific configuration class

## Extends

- [`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md)

## Constructors

### Constructor

> **new OrchestratorConfig**(`config?`): `OrchestratorConfig`

Defined in: [src/agent/orchestrator/config.ts:29](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L29)

constructor function.

#### Parameters

##### config?

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`OrchestratorConfig`

- TODO: describe return value.

#### Throws

- May throw an error.

#### Overrides

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`constructor`](../../../../types/agentConfig/classes/BaseAgentConfig.md#constructor)

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getApplicationFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getapplicationfacingconfig)

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfig)

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getConfigId`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getconfigid)

***

### getEscalationConfig()

> **getEscalationConfig**(): [`EscalationConfig`](../../../../types/agentConfig/interfaces/EscalationConfig.md)

Defined in: [src/agent/orchestrator/config.ts:112](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L112)

Get escalation configuration

#### Returns

[`EscalationConfig`](../../../../types/agentConfig/interfaces/EscalationConfig.md)

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getExecutionConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getexecutionconfig)

***

### getFallbackAgent()

> **getFallbackAgent**(): `string`

Defined in: [src/agent/orchestrator/config.ts:162](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L162)

Get fallback agent name

#### Returns

`string`

- TODO: describe return value.

***

### getIntentAgentMap()

> **getIntentAgentMap**(): `Record`\<`string`, `string`\>

Defined in: [src/agent/orchestrator/config.ts:127](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L127)

Get intent to agent mapping

#### Returns

`Record`\<`string`, `string`\>

- TODO: describe return value.

***

### getIntentConfig()

> **getIntentConfig**(`intent`): [`IntentConfig`](../../../../types/agentConfig/interfaces/IntentConfig.md) \| `undefined`

Defined in: [src/agent/orchestrator/config.ts:59](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L59)

Get intent configuration by name

#### Parameters

##### intent

`string`

intent parameter.

#### Returns

[`IntentConfig`](../../../../types/agentConfig/interfaces/IntentConfig.md) \| `undefined`

- TODO: describe return value.

***

### getIntents()

> **getIntents**(): `string`[]

Defined in: [src/agent/orchestrator/config.ts:49](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L49)

Get supported intents

#### Returns

`string`[]

- TODO: describe return value.

***

### getMessages()

> **getMessages**(): `object`

Defined in: [src/agent/orchestrator/config.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L174)

Get configurable user-facing messages

#### Returns

`object`

- TODO: describe return value.

##### errorOccurred?

> `optional` **errorOccurred**: `string`

##### guidance?

> `optional` **guidance**: `object`

###### guidance.clarificationPrompt?

> `optional` **clarificationPrompt**: `string`

###### guidance.insightOverview?

> `optional` **insightOverview**: `string`

###### guidance.insightPlan?

> `optional` **insightPlan**: `string`[]

###### guidance.insightRecommendations?

> `optional` **insightRecommendations**: `string`

###### guidance.metadata?

> `optional` **metadata**: `string`

###### guidance.recordsConnections?

> `optional` **recordsConnections**: `string`

###### guidance.recordsFiltering?

> `optional` **recordsFiltering**: `string`

##### missingSignalsHint?

> `optional` **missingSignalsHint**: `string`[]

##### needMoreContext?

> `optional` **needMoreContext**: `string`

##### noIntentDetected?

> `optional` **noIntentDetected**: `string`

##### questionTooVague?

> `optional` **questionTooVague**: `string`

##### summaries?

> `optional` **summaries**: `object`

###### summaries.clarification?

> `optional` **clarification**: `string`

###### summaries.defaultTopic?

> `optional` **defaultTopic**: `string`

###### summaries.insight?

> `optional` **insight**: `string`

###### summaries.metadata?

> `optional` **metadata**: `string`

###### summaries.records?

> `optional` **records**: `string`

***

### getMinimumKeywordLength()

> **getMinimumKeywordLength**(): `number`

Defined in: [src/agent/orchestrator/config.ts:103](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L103)

Get minimum keyword length

#### Returns

`number`

- TODO: describe return value.

***

### getScoringWeights()

> **getScoringWeights**(): `object`

Defined in: [src/agent/orchestrator/config.ts:88](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L88)

Get scoring weights

#### Returns

`object`

- TODO: describe return value.

##### focusMatch

> **focusMatch**: `number`

##### promptStarterMatch

> **promptStarterMatch**: `number`

##### signalMatch

> **signalMatch**: `number`

***

### getStopWords()

> **getStopWords**(): `Set`\<`string`\>

Defined in: [src/agent/orchestrator/config.ts:78](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L78)

Get stop words for text processing

#### Returns

`Set`\<`string`\>

- TODO: describe return value.

***

### getTargetAgent()

> **getTargetAgent**(`intent`): `string` \| `undefined`

Defined in: [src/agent/orchestrator/config.ts:69](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L69)

Get target agent for an intent

#### Parameters

##### intent

`string`

intent parameter.

#### Returns

`string` \| `undefined`

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.

#### Inherited from

[`BaseAgentConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md).[`getUserFacingConfig`](../../../../types/agentConfig/classes/BaseAgentConfig.md#getuserfacingconfig)

***

### getVaguePhrases()

> **getVaguePhrases**(): `string`[]

Defined in: [src/agent/orchestrator/config.ts:143](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L143)

Get vague phrases that should trigger clarification

#### Returns

`string`[]

- TODO: describe return value.

***

### createDefault()

> `static` **createDefault**(): `OrchestratorConfig`

Defined in: [src/agent/orchestrator/config.ts:240](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L240)

Create orchestrator configuration with defaults (uses TypeScript config)

#### Returns

`OrchestratorConfig`

- TODO: describe return value.

***

### loadFromFile()

> `static` **loadFromFile**(`configPath?`): `Promise`\<`OrchestratorConfig`\>

Defined in: [src/agent/orchestrator/config.ts:211](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/agent/orchestrator/config.ts#L211)

Load configuration from TypeScript config (preferred) or JSON fallback

#### Parameters

##### configPath?

`string`

configPath parameter.

#### Returns

`Promise`\<`OrchestratorConfig`\>

- TODO: describe return value.
