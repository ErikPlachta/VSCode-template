---
title: Configuration Loader
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---
[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / ConfigurationLoader

# Class: ConfigurationLoader

Defined in: [src/shared/configurationLoader.ts:64](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L64)

Configuration loader class for managing application settings.

## Constructors

### Constructor

> **new ConfigurationLoader**(`configPath`): `ConfigurationLoader`

Defined in: [src/shared/configurationLoader.ts:73](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L73)

Creates a new configuration loader instance.

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

#### Returns

`ConfigurationLoader`

## Methods

### getAgentConfig()

> **getAgentConfig**(`agentName`): `Promise`\<`any`\>

Defined in: [src/shared/configurationLoader.ts:174](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L174)

Gets agent-specific configuration.

#### Parameters

##### agentName

`string`

#### Returns

`Promise`\<`any`\>

- Promise resolving to agent configuration.

#### Throws

- When agent configuration cannot be found.

***

### getEnvironmentConfig()

> **getEnvironmentConfig**(`environment`): `Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:149](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L149)

Gets configuration for the current environment.

#### Parameters

##### environment

`string` = `"development"`

#### Returns

`Promise`\<[`EnvironmentConfig`](../../../types/applicationConfig/interfaces/EnvironmentConfig.md)\>

- Promise resolving to environment-specific configuration.

#### Throws

- When environment is not found or configuration cannot be loaded.

***

### loadConfig()

> **loadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:83](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L83)

Loads and validates the application configuration.

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

- Promise resolving to the loaded configuration.

#### Throws

- When configuration file cannot be loaded or is invalid.

***

### reloadConfig()

> **reloadConfig**(): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:194](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/shared/configurationLoader.ts#L194)

Reloads configuration from disk.

#### Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

- Promise resolving to reloaded configuration.


## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
