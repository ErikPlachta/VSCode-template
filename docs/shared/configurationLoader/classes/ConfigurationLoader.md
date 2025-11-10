[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / ConfigurationLoader

# Class: ConfigurationLoader

Defined in: [src/shared/configurationLoader.ts:62](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L62)

Configuration loader class for managing application settings.

## Constructors

### Constructor

> **new ConfigurationLoader**(`configPath`): `ConfigurationLoader`

Defined in: [src/shared/configurationLoader.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L71)

Creates a new configuration loader instance.

#### Parameters

##### configPath

`string` = `"out/mcp.config.json"`

Deprecated JSON config path for legacy fallback (kept for API compatibility).

#### Returns

`ConfigurationLoader`

## Methods

### getAgentConfig()

> **getAgentConfig**(`agentName`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/shared/configurationLoader.ts:118](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L118)

Gets agent-specific configuration merged with global defaults.

#### Parameters

##### agentName

`string`

Registered agent profile id.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

Concrete settings for the agent.

***

### getEnvironmentConfig()

> **getEnvironmentConfig**(`environment`): `Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:96](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L96)

Gets configuration for the requested environment.

#### Parameters

##### environment

`string` = `"development"`

Environment name (development|staging|production).

#### Returns

`Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

Environment-specific configuration slice.

***

### loadConfig()

> **loadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:80](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L80)

Load and return the merged application configuration (TS source of truth).

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Merged configuration object.

***

### reloadConfig()

> **reloadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:136](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L136)

Reload configuration (clears cache and re-reads TS config).

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Freshly loaded configuration.
