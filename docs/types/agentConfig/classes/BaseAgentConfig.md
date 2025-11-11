[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/types/agentConfig.ts:560](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L560)

Base class for agent configuration management

## Extended by

- [`ClarificationAgent`](../../../agent/clarificationAgent/classes/ClarificationAgent.md)
- [`CommunicationAgent`](../../../agent/communicationAgent/classes/CommunicationAgent.md)
- [`DataAgent`](../../../agent/dataAgent/classes/DataAgent.md)
- [`DatabaseAgent`](../../../agent/databaseAgent/classes/DatabaseAgent.md)
- [`Orchestrator`](../../../agent/orchestrator/classes/Orchestrator.md)
- [`UserContextAgent`](../../../agent/userContextAgent/classes/UserContextAgent.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/types/agentConfig.ts:571](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L571)

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

Defined in: [src/types/agentConfig.ts:842](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L842)

Clear an override for a configuration item given its [ConfigDescriptor](../interfaces/ConfigDescriptor.md).

#### Parameters

##### descriptor

[`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)

Descriptor describing the config item.

##### env

Override scope to clear.

`"local"` | `"global"`

#### Returns

`void`

***

### confirmConfigItems()

> **confirmConfigItems**(`requiredPaths`): `object`

Defined in: [src/types/agentConfig.ts:626](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L626)

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

> **getAllDescriptors**(): `Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Defined in: [src/types/agentConfig.ts:857](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L857)

Get all descriptors for this agent (default implementation returns empty object).
Agents should override this method to provide their specific descriptors.

#### Returns

`Record`\<`string`, [`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)\>

Map of descriptor keys to their definitions.

***

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:734](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L734)

Get application-facing configuration.

#### Returns

[`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Operational details for internal use.

***

### getByDescriptor()

> **getByDescriptor**\<`T`\>(`descriptor`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:644](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L644)

Retrieve a configuration value using a [ConfigDescriptor](../interfaces/ConfigDescriptor.md) reference.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### descriptor

[`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)

Descriptor describing the config item.

#### Returns

`T` \| `undefined`

Resolved configuration value or undefined when not found.

***

### getConfig()

> **getConfig**(): `Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Defined in: [src/types/agentConfig.ts:688](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L688)

Get a sanitized, public-facing view of the configuration suitable for diagnostics and UI.

#### Returns

`Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Minimal public configuration snapshot.

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:743](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L743)

Get configuration schema ID.

#### Returns

`string`

Canonical configuration identifier.

***

### getConfigItem()

> **getConfigItem**\<`T`\>(`path`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:585](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L585)

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

Defined in: [src/types/agentConfig.ts:716](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L716)

Get execution configuration.

#### Returns

[`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Execution settings when defined.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:725](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L725)

Get user-facing configuration.

#### Returns

[`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

User documentation and examples when defined.

***

### setByDescriptor()

> **setByDescriptor**(`descriptor`, `value`, `env?`): `void`

Defined in: [src/types/agentConfig.ts:657](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L657)

Set a runtime override for a configuration item given its [ConfigDescriptor](../interfaces/ConfigDescriptor.md).

#### Parameters

##### descriptor

[`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)

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

Defined in: [src/types/agentConfig.ts:606](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L606)

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

Defined in: [src/types/agentConfig.ts:671](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/types/agentConfig.ts#L671)

Verify a descriptor's declared verifyPaths (or its own path if none provided) exist.

#### Parameters

##### descriptor

[`ConfigDescriptor`](../interfaces/ConfigDescriptor.md)

Descriptor whose paths will be validated.

#### Returns

`object`

Verification outcome.

##### missing

> **missing**: `string`[]

##### passed

> **passed**: `boolean`
