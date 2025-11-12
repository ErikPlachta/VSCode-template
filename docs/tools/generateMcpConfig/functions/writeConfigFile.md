[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [tools/generateMcpConfig](../README.md) / writeConfigFile

# Function: writeConfigFile()

> **writeConfigFile**(`config`): `string`

Defined in: [src/tools/generateMcpConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/tools/generateMcpConfig.ts#L107)

Persist generated configuration to disk under out/mcp.config.json

## Parameters

### config

[`GeneratedMcpConfig`](../interfaces/GeneratedMcpConfig.md)

Generated configuration object.

## Returns

`string`

- Absolute path to written JSON file.
