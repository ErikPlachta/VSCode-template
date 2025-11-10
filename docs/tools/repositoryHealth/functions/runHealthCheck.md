[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / runHealthCheck

# Function: runHealthCheck()

> **runHealthCheck**(): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:449](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L449)

CLI-friendly runner that executes all checks, prints a summary, and writes the markdown report.

## Returns

`Promise`\<`void`\>

Resolves when checks and report persistence complete (exitCode set on failure).
