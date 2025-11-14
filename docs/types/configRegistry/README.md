[**UserContext-mcp-extension v1.0.0**](../../README.md)

***

[UserContext-mcp-extension](../../modules.md) / types/configRegistry

# types/configRegistry

Configuration ID Registry – Central registry for agent configuration schema IDs.

Centralized registry of unique configuration IDs (UIDs) for all agent configurations.
Instead of file-path based references, each configuration type has a stable ID that can
be validated and versioned independently.

## Remarks

Use these IDs across configs, validators, and tooling to avoid file-structure coupling.
Prefer type-safe references (`ConfigId`) and utility helpers (`ConfigUtils`) when working
with IDs at runtime.

## Interfaces

- [ConfigMetadata](interfaces/ConfigMetadata.md)

## Type Aliases

- [ConfigId](type-aliases/ConfigId.md)

## Variables

- [CONFIG\_IDS](variables/CONFIG_IDS.md)
- [CONFIG\_REGISTRY](variables/CONFIG_REGISTRY.md)
- [ConfigUtils](variables/ConfigUtils.md)

## Functions

- [validateConfig](functions/validateConfig.md)
