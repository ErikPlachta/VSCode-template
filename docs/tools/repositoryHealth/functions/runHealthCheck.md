[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / runHealthCheck

# Function: runHealthCheck()

> **runHealthCheck**(): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:387](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/71969725308ebc3e692eaeafc61e692e33e07c8b/src/tools/repositoryHealth.ts#L387)

CLI-friendly runner that executes all checks, prints a summary, and writes the markdown report.

## Returns

`Promise`\<`void`\>

Resolves when checks and report persistence complete (exitCode set on failure).
