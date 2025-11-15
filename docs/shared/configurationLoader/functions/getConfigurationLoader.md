[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / getConfigurationLoader

# Function: getConfigurationLoader()

> **getConfigurationLoader**(`configPath?`): [`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Defined in: [src/shared/configurationLoader.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b4c7eb91d4c81b0905b15627db7e7e79adb27331/src/shared/configurationLoader.ts#L191)

Get the global configuration loader (singleton).

## Parameters

### configPath?

`string`

Legacy JSON path (ignored in TS-first mode; kept for API compatibility).

## Returns

[`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Shared configuration loader instance.
