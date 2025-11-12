[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigUtils

# Variable: ConfigUtils

> `const` **ConfigUtils**: `object`

Defined in: [src/types/configRegistry.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/2ccd6b8bbef47559b20524504c3e82ce2d944b63/src/types/configRegistry.ts#L191)

Utility functions for working with configuration IDs

## Type Declaration

### areCompatible()

> **areCompatible**(`configId1`, `configId2`): `boolean`

Check if two configuration IDs are compatible (same agent type, compatible version)

#### Parameters

##### configId1

`string`

First configuration ID.

##### configId2

`string`

Second configuration ID.

#### Returns

`boolean`

True if compatible; otherwise false.

### generateConfigId()

> **generateConfigId**(`agentType`, `major`, `minor`, `patch`): `string`

Generate a new configuration ID for an agent type and version

#### Parameters

##### agentType

`string`

Target agent type (e.g. "orchestrator").

##### major

`number`

Major version.

##### minor

`number`

Minor version.

##### patch

`number`

Patch version.

#### Returns

`string`

Constructed configuration ID string.

### getConfigsForAgent()

> **getConfigsForAgent**(`agentType`): `string`[]

Get all configuration IDs for a specific agent type

#### Parameters

##### agentType

`string`

Agent type key from metadata.

#### Returns

`string`[]

Array of configuration IDs for the agent type.

### getMetadata()

> **getMetadata**(`configId`): [`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

Get metadata for a configuration ID

#### Parameters

##### configId

`string`

Configuration ID to look up.

#### Returns

[`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

Metadata if found; otherwise undefined.

### isValidConfigId()

> **isValidConfigId**(`configId`): `boolean`

Validate that a configuration ID exists in the registry

#### Parameters

##### configId

`string`

Configuration ID to validate.

#### Returns

`boolean`

True if the ID exists in the registry; otherwise false.

### parseVersion()

> **parseVersion**(`configId`): \{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

Parse version information from a configuration ID

#### Parameters

##### configId

`string`

Configuration ID to parse.

#### Returns

\{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

Parsed version object, or undefined if not found.
