[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [tools/generateMcpConfig](../README.md) / writeConfigFile

# Function: writeConfigFile()

> **writeConfigFile**(`config`): `string`

Defined in: [src/tools/generateMcpConfig.ts:107](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/tools/generateMcpConfig.ts#L107)

Persist generated configuration to disk under out/mcp.config.json

## Parameters

### config

[`GeneratedMcpConfig`](../interfaces/GeneratedMcpConfig.md)

Generated configuration object.

## Returns

`string`

- Absolute path to written JSON file.
