[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / runHealthCheck

# Function: runHealthCheck()

> **runHealthCheck**(): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:466](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/7c19ee49a3a6a5a04e34517f40b64b6722b18db8/src/tools/repositoryHealth.ts#L466)

CLI-friendly runner that executes all checks, prints a summary, and writes the markdown report.

## Returns

`Promise`\<`void`\>

Resolves when checks and report persistence complete (exitCode set on failure).
