[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/agentConfigResolver](../README.md) / AgentConfigResolver

# Class: AgentConfigResolver

Defined in: [src/shared/agentConfigResolver.ts:92](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/agentConfigResolver.ts#L92)

## Constructors

### Constructor

> **new AgentConfigResolver**(`configPath`): `AgentConfigResolver`

Defined in: [src/shared/agentConfigResolver.ts:99](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/agentConfigResolver.ts#L99)

constructor function.

#### Parameters

##### configPath

`string` = `"out/mcp.config.json"`

configPath parameter.

#### Returns

`AgentConfigResolver`

- TODO: describe return value.

## Methods

### getEffectiveExecutionProfile()

> **getEffectiveExecutionProfile**(`agentId`): `Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

Defined in: [src/shared/agentConfigResolver.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/shared/agentConfigResolver.ts#L107)

Returns the effective execution profile for an agent after applying runtime overrides.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

- TODO: describe return value.
