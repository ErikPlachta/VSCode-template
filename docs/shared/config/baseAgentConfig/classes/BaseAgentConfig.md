[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/config/baseAgentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/shared/config/baseAgentConfig.ts:25](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L25)

Base class for agent configuration management (runtime).

## Extended by

- [`ClarificationAgent`](../../../../agent/clarificationAgent/classes/ClarificationAgent.md)
- [`CommunicationAgent`](../../../../agent/communicationAgent/classes/CommunicationAgent.md)
- [`DataAgent`](../../../../agent/dataAgent/classes/DataAgent.md)
- [`DatabaseAgent`](../../../../agent/databaseAgent/classes/DatabaseAgent.md)
- [`DataLoaderAgent`](../../../../agent/dataLoaderAgent/classes/DataLoaderAgent.md)
- [`Orchestrator`](../../../../agent/orchestrator/classes/Orchestrator.md)
- [`UserContextAgent`](../../../../agent/userContextAgent/classes/UserContextAgent.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/shared/config/baseAgentConfig.ts:34](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L34)

Initialize the base agent configuration wrapper.

#### Parameters

##### config

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

Fully typed configuration object for the agent.

#### Returns

`BaseAgentConfig`

## Methods

### clearOverride()

> **clearOverride**(`descriptor`, `env`): `void`

Defined in: [src/shared/config/baseAgentConfig.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L156)

Clear an override for a configuration item.

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)

##### env

`"local"` | `"global"`

#### Returns

`void`

***

### confirmConfigItems()

> **confirmConfigItems**(`requiredPaths`): `object`

Defined in: [src/shared/config/baseAgentConfig.ts:72](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L72)

Verify a list of required configuration paths are present after overrides are applied.

#### Parameters

##### requiredPaths

readonly `string`[]

#### Returns

`object`

##### missing

> **missing**: `string`[]

##### passed

> **passed**: `boolean`

***

### getAllDescriptors()

> **getAllDescriptors**(): `Record`\<`string`, [`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)\>

Defined in: [src/shared/config/baseAgentConfig.ts:166](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L166)

Default descriptor map (agents should override).

#### Returns

`Record`\<`string`, [`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)\>

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/shared/config/baseAgentConfig.ts:146](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L146)

Get application-facing configuration.

#### Returns

[`ApplicationFacingConfig`](../../../../types/agentConfig/interfaces/ApplicationFacingConfig.md) \| `undefined`

***

### getByDescriptor()

> **getByDescriptor**\<`T`\>(`descriptor`): `T` \| `undefined`

Defined in: [src/shared/config/baseAgentConfig.ts:85](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L85)

Get a config value using a descriptor.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)

#### Returns

`T` \| `undefined`

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

Defined in: [src/shared/config/baseAgentConfig.ts:116](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L116)

Get a sanitized, public-facing view of the configuration suitable for diagnostics and UI.

#### Returns

`Partial`\<[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)\>

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/shared/config/baseAgentConfig.ts:151](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L151)

Get configuration schema ID.

#### Returns

`string`

***

### getConfigItem()

> **getConfigItem**\<`T`\>(`path`): `T` \| `undefined`

Defined in: [src/shared/config/baseAgentConfig.ts:41](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L41)

Retrieve a configuration value by a dot-delimited path, with overrides applied.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### path

`string`

#### Returns

`T` \| `undefined`

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/shared/config/baseAgentConfig.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L136)

Get execution configuration.

#### Returns

[`ExecutionConfig`](../../../../types/agentConfig/interfaces/ExecutionConfig.md) \| `undefined`

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/shared/config/baseAgentConfig.ts:141](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L141)

Get user-facing configuration.

#### Returns

[`UserFacingConfig`](../../../../types/agentConfig/interfaces/UserFacingConfig.md) \| `undefined`

***

### setByDescriptor()

> **setByDescriptor**(`descriptor`, `value`, `env`): `void`

Defined in: [src/shared/config/baseAgentConfig.ts:92](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L92)

Set a config value using a descriptor.

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)

##### value

`unknown`

##### env

`"local"` | `"global"`

#### Returns

`void`

***

### setConfigItem()

> **setConfigItem**(`path`, `value`, `env`): `void`

Defined in: [src/shared/config/baseAgentConfig.ts:55](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L55)

Set a runtime override for a configuration value.

#### Parameters

##### path

`string`

##### value

`unknown`

##### env

`"local"` | `"global"`

#### Returns

`void`

***

### verifyDescriptor()

> **verifyDescriptor**(`descriptor`): `object`

Defined in: [src/shared/config/baseAgentConfig.ts:101](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/config/baseAgentConfig.ts#L101)

Verify required paths for a descriptor.

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../descriptors/interfaces/ConfigDescriptor.md)

#### Returns

`object`

##### missing

> **missing**: `string`[]

##### passed

> **passed**: `boolean`
