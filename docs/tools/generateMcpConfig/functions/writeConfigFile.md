[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [tools/generateMcpConfig](../README.md) / writeConfigFile

# Function: writeConfigFile()

> **writeConfigFile**(`config`): `string`

Defined in: [src/tools/generateMcpConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0508d3321d479706f24b24b1470ab30317977c0/src/tools/generateMcpConfig.ts#L107)

Persist generated configuration to disk under out/mcp.config.json

## Parameters

### config

[`GeneratedMcpConfig`](../interfaces/GeneratedMcpConfig.md)

Generated configuration object.

## Returns

`string`

- Absolute path to written JSON file.
