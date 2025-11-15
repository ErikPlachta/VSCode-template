[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/types/agentConfig.ts:959](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L959)

Base class for agent configuration management

## Extended by

- [`ClarificationAgent`](../../../agent/clarificationAgent/classes/ClarificationAgent.md)
- [`CommunicationAgent`](../../../agent/communicationAgent/classes/CommunicationAgent.md)
- [`DataAgent`](../../../agent/dataAgent/classes/DataAgent.md)
- [`DatabaseAgent`](../../../agent/databaseAgent/classes/DatabaseAgent.md)
- [`DataLoaderAgent`](../../../agent/dataLoaderAgent/classes/DataLoaderAgent.md)
- [`Orchestrator`](../../../agent/orchestrator/classes/Orchestrator.md)
- [`UserContextAgent`](../../../agent/userContextAgent/classes/UserContextAgent.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/types/agentConfig.ts:970](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L970)

Initialize the base agent configuration wrapper.

#### Parameters

##### config

[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)

Fully-typed configuration object for the agent.

#### Returns

`BaseAgentConfig`

## Methods

### clearOverride()

> **clearOverride**(`descriptor`, `env`): `void`

Defined in: [src/types/agentConfig.ts:1241](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1241)

Clear an override for a configuration item given its [ConfigDescriptor](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md).

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)

Descriptor describing the config item.

##### env

Override scope to clear.

`"local"` | `"global"`

#### Returns

`void`

***

### confirmConfigItems()

> **confirmConfigItems**(`requiredPaths`): `object`

Defined in: [src/types/agentConfig.ts:1025](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1025)

Verify a list of required configuration paths are present after overrides are applied.

#### Parameters

##### requiredPaths

readonly `string`[]

Collection of dot-delimited paths that must exist.

#### Returns

`object`

Result indicating which required items are missing.

##### missing

> **missing**: `string`[]

##### passed

> **passed**: `boolean`

***

### getAllDescriptors()

> **getAllDescriptors**(): `Record`\<`string`, [`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:1256](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1256)

Get all descriptors for this agent (default implementation returns empty object).
Agents should override this method to provide their specific descriptors.

#### Returns

`Record`\<`string`, [`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)\>

Map of descriptor keys to their definitions.

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:1133](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1133)

Get application-facing configuration.

#### Returns

[`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Operational details for internal use.

***

### getByDescriptor()

> **getByDescriptor**\<`T`\>(`descriptor`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:1043](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1043)

Retrieve a configuration value using a [ConfigDescriptor](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md) reference.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)

Descriptor describing the config item.

#### Returns

`T` \| `undefined`

Resolved configuration value or undefined when not found.

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:1087](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1087)

Get a sanitized, public-facing view of the configuration suitable for diagnostics and UI.

#### Returns

`Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Minimal public configuration snapshot.

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:1142](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1142)

Get configuration schema ID.

#### Returns

`string`

Canonical configuration identifier.

***

### getConfigItem()

> **getConfigItem**\<`T`\>(`path`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:984](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L984)

Retrieve a configuration value by a dot-delimited path, with runtime overrides applied.

The path is resolved relative to the root AgentConfigDefinition (e.g.,
"orchestration.escalation.vaguePhrases" or "database.performance.caching.enabledByDefault").
Local overrides have higher precedence than global overrides, both override the base config.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### path

`string`

Dot-delimited key path within the configuration object.

#### Returns

`T` \| `undefined`

Resolved configuration value, or undefined when not found.

***

### getExecutionConfig()

> **getExecutionConfig**(): [`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:1115](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1115)

Get execution configuration.

#### Returns

[`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Execution settings when defined.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:1124](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1124)

Get user-facing configuration.

#### Returns

[`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

User documentation and examples when defined.

***

### setByDescriptor()

> **setByDescriptor**(`descriptor`, `value`, `env?`): `void`

Defined in: [src/types/agentConfig.ts:1056](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1056)

Set a runtime override for a configuration item given its [ConfigDescriptor](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md).

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)

Descriptor describing the config item.

##### value

`unknown`

New value to assign.

##### env?

Override environment scope.

`"local"` | `"global"`

#### Returns

`void`

***

### setConfigItem()

> **setConfigItem**(`path`, `value`, `env?`): `void`

Defined in: [src/types/agentConfig.ts:1005](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1005)

Set a runtime override for a configuration value.

This does not persist to disk; it is intended for live adjustments (e.g., UI or chat-driven changes).

#### Parameters

##### path

`string`

Dot-delimited key path to set.

##### value

`unknown`

New value for the configuration item.

##### env?

Scope for the override; local has higher precedence than global.

`"local"` | `"global"`

#### Returns

`void`

***

### verifyDescriptor()

> **verifyDescriptor**(`descriptor`): `object`

Defined in: [src/types/agentConfig.ts:1070](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/types/agentConfig.ts#L1070)

Verify a descriptor's declared verifyPaths (or its own path if none provided) exist.

#### Parameters

##### descriptor

[`ConfigDescriptor`](../../../shared/agentConfigDescriptors/interfaces/ConfigDescriptor.md)

Descriptor whose paths will be validated.

#### Returns

`object`

Verification outcome.

##### missing

> **missing**: `string`[]

##### passed

> **passed**: `boolean`
