[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/agentConfigResolver](../README.md) / AgentConfigResolver

# Class: AgentConfigResolver

Defined in: [src/shared/agentConfigResolver.ts:91](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentConfigResolver.ts#L91)

## Constructors

### Constructor

> **new AgentConfigResolver**(`configPath`): `AgentConfigResolver`

Defined in: [src/shared/agentConfigResolver.ts:98](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentConfigResolver.ts#L98)

constructor function.

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

configPath parameter.

#### Returns

`AgentConfigResolver`

- TODO: describe return value.

## Methods

### getEffectiveExecutionProfile()

> **getEffectiveExecutionProfile**(`agentId`): `Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

Defined in: [src/shared/agentConfigResolver.ts:106](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/agentConfigResolver.ts#L106)

Returns the effective execution profile for an agent after applying runtime overrides.

#### Parameters

##### agentId

[`AgentIdentifier`](../../../mcp/config/unifiedAgentConfig/type-aliases/AgentIdentifier.md)

agentId parameter.

#### Returns

`Promise`\<[`EffectiveExecutionProfile`](../interfaces/EffectiveExecutionProfile.md)\>

- TODO: describe return value.
