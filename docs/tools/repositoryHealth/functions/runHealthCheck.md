[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / runHealthCheck

# Function: runHealthCheck()

> **runHealthCheck**(): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:387](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e4060dce33bfbc073f09052e77af52b9f7e968d6/src/tools/repositoryHealth.ts#L387)

CLI-friendly runner that executes all checks, prints a summary, and writes the markdown report.

## Returns

`Promise`\<`void`\>

Resolves when checks and report persistence complete (exitCode set on failure).
