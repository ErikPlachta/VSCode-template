---
title: Config Utils
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

---

[mybusiness-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigUtils

# Variable: ConfigUtils

> `const` **ConfigUtils**: `object`

Defined in: [src/types/configRegistry.ts:156](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/configRegistry.ts#L156)

Utility functions for working with configuration IDs

## Type Declaration

### areCompatible()

> **areCompatible**(`configId1`, `configId2`): `boolean`

Check if two configuration IDs are compatible (same agent type, compatible version)

#### Parameters

##### configId1

`string`

##### configId2

`string`

#### Returns

`boolean`

### generateConfigId()

> **generateConfigId**(`agentType`, `major`, `minor`, `patch`): `string`

Generate a new configuration ID for an agent type and version

#### Parameters

##### agentType

`string`

##### major

`number`

##### minor

`number`

##### patch

`number`

#### Returns

`string`

### getConfigsForAgent()

> **getConfigsForAgent**(`agentType`): `string`[]

Get all configuration IDs for a specific agent type

#### Parameters

##### agentType

`string`

#### Returns

`string`[]

### getMetadata()

> **getMetadata**(`configId`): [`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

Get metadata for a configuration ID

#### Parameters

##### configId

`string`

#### Returns

[`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

### isValidConfigId()

> **isValidConfigId**(`configId`): `boolean`

Validate that a configuration ID exists in the registry

#### Parameters

##### configId

`string`

#### Returns

`boolean`

### parseVersion()

> **parseVersion**(`configId`): \{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

Parse version information from a configuration ID

#### Parameters

##### configId

`string`

#### Returns

\{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

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
