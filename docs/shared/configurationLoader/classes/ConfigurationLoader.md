[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / ConfigurationLoader

# Class: ConfigurationLoader

Defined in: [src/shared/configurationLoader.ts:63](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L63)

Configuration loader class for managing application settings.

## Constructors

### Constructor

> **new ConfigurationLoader**(`configPath`): `ConfigurationLoader`

Defined in: [src/shared/configurationLoader.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L73)

Creates a new configuration loader instance.

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

configPath parameter.

#### Returns

`ConfigurationLoader`

- TODO: describe return value.

## Methods

### getAgentConfig()

> **getAgentConfig**(`agentName`): `Promise`\<`Record`\<`string`, `unknown`\>\>

Defined in: [src/shared/configurationLoader.ts:174](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L174)

Gets agent-specific configuration.

#### Parameters

##### agentName

`string`

agentName parameter.

#### Returns

`Promise`\<`Record`\<`string`, `unknown`\>\>

- TODO: describe return value.

#### Throws

- May throw an error.

***

### getEnvironmentConfig()

> **getEnvironmentConfig**(`environment`): `Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:149](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L149)

Gets configuration for the current environment.

#### Parameters

##### environment

`string` = `"development"`

environment parameter.

#### Returns

`Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

- TODO: describe return value.

#### Throws

- May throw an error.

***

### loadConfig()

> **loadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L83)

Loads and validates the application configuration.

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

- TODO: describe return value.

#### Throws

- May throw an error.

***

### reloadConfig()

> **reloadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:194](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/8f6b6620372b18eb20e9af44ec4f77c975b604d8/src/shared/configurationLoader.ts#L194)

Reloads configuration from disk.

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

- TODO: describe return value.
