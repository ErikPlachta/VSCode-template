[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / runHealthCheck

# Function: runHealthCheck()

> **runHealthCheck**(): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:466](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/566183273bc118fc1cea1f3b93a5f9fe451722a2/src/tools/repositoryHealth.ts#L466)

CLI-friendly runner that executes all checks, prints a summary, and writes the markdown report.

## Returns

`Promise`\<`void`\>

Resolves when checks and report persistence complete (exitCode set on failure).
