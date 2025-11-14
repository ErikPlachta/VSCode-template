[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [shared/configurationLoader](../README.md) / loadApplicationConfig

# Function: loadApplicationConfig()

> **loadApplicationConfig**(`configPath?`): `Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Defined in: [src/shared/configurationLoader.ts:206](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/configurationLoader.ts#L206)

Convenience helper to load the application config via the global loader.

## Parameters

### configPath?

`string`

Optional legacy path (not used when TS config is present).

## Returns

`Promise`\<[`ApplicationConfig`](../../../types/applicationConfig/interfaces/ApplicationConfig.md)\>

Loaded application configuration.
