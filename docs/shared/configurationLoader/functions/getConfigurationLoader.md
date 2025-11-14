[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / getConfigurationLoader

# Function: getConfigurationLoader()

> **getConfigurationLoader**(`configPath?`): [`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Defined in: [src/shared/configurationLoader.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/configurationLoader.ts#L191)

Get the global configuration loader (singleton).

## Parameters

### configPath?

`string`

Legacy JSON path (ignored in TS-first mode; kept for API compatibility).

## Returns

[`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Shared configuration loader instance.
