[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / getConfigurationLoader

# Function: getConfigurationLoader()

> **getConfigurationLoader**(`configPath?`): [`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Defined in: [src/shared/configurationLoader.ts:191](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/shared/configurationLoader.ts#L191)

Get the global configuration loader (singleton).

## Parameters

### configPath?

`string`

Legacy JSON path (ignored in TS-first mode; kept for API compatibility).

## Returns

[`ConfigurationLoader`](../classes/ConfigurationLoader.md)

Shared configuration loader instance.
