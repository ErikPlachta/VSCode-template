[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [tools/generateMcpConfig](../README.md) / writeConfigFile

# Function: writeConfigFile()

> **writeConfigFile**(`config`): `string`

Defined in: [src/tools/generateMcpConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/tools/generateMcpConfig.ts#L107)

Persist generated configuration to disk under out/mcp.config.json

## Parameters

### config

[`GeneratedMcpConfig`](../interfaces/GeneratedMcpConfig.md)

Generated configuration object.

## Returns

`string`

- Absolute path to written JSON file.
