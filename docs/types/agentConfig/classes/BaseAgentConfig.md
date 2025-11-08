[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/types/agentConfig.ts:481](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L481)

Base class for agent configuration management

## Extended by

- [`ClarificationAgentConfig`](../../../agent/clarificationAgent/config/classes/ClarificationAgentConfig.md)
- [`DataAgentConfig`](../../../agent/dataAgent/config/classes/DataAgentConfig.md)
- [`DatabaseAgentConfig`](../../../agent/databaseAgent/config/classes/DatabaseAgentConfig.md)
- [`OrchestratorConfig`](../../../agent/orchestrator/config/classes/OrchestratorConfig.md)
- [`RelevantDataManagerAgentConfig`](../../../agent/relevantDataManagerAgent/config/classes/RelevantDataManagerAgentConfig.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/types/agentConfig.ts:490](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L490)

constructor function.

#### Parameters

##### config

[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)

config parameter.

#### Returns

`BaseAgentConfig`

- TODO: describe return value.

## Methods

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:545](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L545)

Get application-facing configuration

#### Returns

[`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

- TODO: describe return value.

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:499](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L499)

Get public-facing configuration (user and some application details)

#### Returns

`Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

- TODO: describe return value.

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:554](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L554)

Get configuration schema ID

#### Returns

`string`

- TODO: describe return value.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L527)

Get execution configuration

#### Returns

[`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

- TODO: describe return value.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:536](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/types/agentConfig.ts#L536)

Get user-facing configuration

#### Returns

[`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

- TODO: describe return value.
