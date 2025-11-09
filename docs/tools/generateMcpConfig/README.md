[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / tools/generateMcpConfig

# tools/generateMcpConfig

Build-time generator for mcp.config.json derived from TypeScript sources.

Source of truth: application + unified agent configs. This script materialises
a JSON file (not committed) consumed by external tooling that expects a JSON
manifest. It intentionally excludes any deprecated fields.

## Interfaces

- [GeneratedAgentConfig](interfaces/GeneratedAgentConfig.md)
- [GeneratedMcpConfig](interfaces/GeneratedMcpConfig.md)

## Functions

- [buildConfig](functions/buildConfig.md)
- [writeConfigFile](functions/writeConfigFile.md)
