[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/configRegistry](../README.md) / ConfigUtils

# Variable: ConfigUtils

> `const` **ConfigUtils**: `object`

Defined in: [src/types/configRegistry.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/configRegistry.ts#L189)

Utility functions for working with configuration IDs.

## Type Declaration

### areCompatible()

> **areCompatible**(`configId1`, `configId2`): `boolean`

Check if two configuration IDs are compatible (same agent type, same major version).

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

#### Example

```ts
const ok = ConfigUtils.areCompatible(CONFIG_IDS.DATA_AGENT, CONFIG_IDS.DATA_AGENT);
```

### generateConfigId()

> **generateConfigId**(`agentType`, `major`, `minor`, `patch`): `string`

Generate a new configuration ID for an agent type and version.

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

#### Example

```ts
const id = ConfigUtils.generateConfigId("orchestrator", 1, 1, 0);
// "agent.orchestrator.v1.1.0"
```

### getConfigsForAgent()

> **getConfigsForAgent**(`agentType`): `string`[]

Get all configuration IDs for a specific agent type.

#### Parameters

##### agentType

`string`

Agent type key from metadata.

#### Returns

`string`[]

Array of configuration IDs for the agent type.

#### Example

```ts
const ids = ConfigUtils.getConfigsForAgent("data-agent");
```

### getMetadata()

> **getMetadata**(`configId`): [`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

Get metadata for a configuration ID.

#### Parameters

##### configId

`string`

Configuration ID to look up.

#### Returns

[`ConfigMetadata`](../interfaces/ConfigMetadata.md) \| `undefined`

Metadata if found; otherwise undefined.

#### Example

```ts
const meta = ConfigUtils.getMetadata(CONFIG_IDS.DATA_AGENT);
console.log(meta?.version.major);
```

### isValidConfigId()

> **isValidConfigId**(`configId`): `boolean`

Validate that a configuration ID exists in the registry.

#### Parameters

##### configId

`string`

Configuration ID to validate.

#### Returns

`boolean`

True if the ID exists in the registry; otherwise false.

#### Example

```ts
const ok = ConfigUtils.isValidConfigId(CONFIG_IDS.ORCHESTRATOR);
```

### parseVersion()

> **parseVersion**(`configId`): \{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

Parse version information from a configuration ID.

#### Parameters

##### configId

`string`

Configuration ID to parse.

#### Returns

\{ `major`: `number`; `minor`: `number`; `patch`: `number`; \} \| `undefined`

Parsed version object, or undefined if not found.

#### Example

```ts
const v = ConfigUtils.parseVersion(CONFIG_IDS.CLARIFICATION_AGENT);
if (v) {
  console.log(`${v.major}.${v.minor}.${v.patch}`);
}
```
