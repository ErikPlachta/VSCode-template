[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / BaseAgentConfig

# Abstract Class: BaseAgentConfig

Defined in: [src/types/agentConfig.ts:481](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L481)

Base class for agent configuration management

## Extended by

- [`ClarificationAgent`](../../../agent/clarificationAgent/classes/ClarificationAgent.md)
- [`DataAgent`](../../../agent/dataAgent/classes/DataAgent.md)
- [`DatabaseAgent`](../../../agent/databaseAgent/classes/DatabaseAgent.md)
- [`Orchestrator`](../../../agent/orchestrator/classes/Orchestrator.md)

## Constructors

### Constructor

> **new BaseAgentConfig**(`config`): `BaseAgentConfig`

Defined in: [src/types/agentConfig.ts:492](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L492)

Initialize the base agent configuration wrapper.

#### Parameters

##### config

[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)

Fully-typed configuration object for the agent.

#### Returns

`BaseAgentConfig`

## Methods

### confirmConfigItems()

> **confirmConfigItems**(`requiredPaths`): `object`

Defined in: [src/types/agentConfig.ts:547](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L547)

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

### getApplicationFacingConfig()

> **getApplicationFacingConfig**(): [`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:655](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L655)

Get application-facing configuration.

#### Returns

[`ApplicationFacingConfig`](../interfaces/ApplicationFacingConfig.md) \| `undefined`

Operational details for internal use.

***

### getByDescriptor()

> **getByDescriptor**\<`T`\>(`descriptor`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:565](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L565)

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

Defined in: [src/types/agentConfig.ts:609](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L609)

Get a sanitized, public-facing view of the configuration suitable for diagnostics and UI.

#### Returns

`Partial`\<[`AgentConfigDefinition`](../interfaces/AgentConfigDefinition.md)\>

Minimal public configuration snapshot.

***

### getConfigId()

> **getConfigId**(): `string`

Defined in: [src/types/agentConfig.ts:664](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L664)

Get configuration schema ID.

#### Returns

`string`

Canonical configuration identifier.

***

### getConfigItem()

> **getConfigItem**\<`T`\>(`path`): `T` \| `undefined`

Defined in: [src/types/agentConfig.ts:506](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L506)

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

Defined in: [src/types/agentConfig.ts:637](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L637)

Get execution configuration.

#### Returns

[`ExecutionConfig`](../interfaces/ExecutionConfig.md) \| `undefined`

Execution settings when defined.

***

### getUserFacingConfig()

> **getUserFacingConfig**(): [`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

Defined in: [src/types/agentConfig.ts:646](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L646)

Get user-facing configuration.

#### Returns

[`UserFacingConfig`](../interfaces/UserFacingConfig.md) \| `undefined`

User documentation and examples when defined.

***

### setByDescriptor()

> **setByDescriptor**(`descriptor`, `value`, `env?`): `void`

Defined in: [src/types/agentConfig.ts:578](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L578)

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

Defined in: [src/types/agentConfig.ts:527](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L527)

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

Defined in: [src/types/agentConfig.ts:592](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/bd905499aa24766e14e9248e3e46a7ba633506e2/src/types/agentConfig.ts#L592)

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
