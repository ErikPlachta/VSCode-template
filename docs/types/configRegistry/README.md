---
title: README
summary: >-
  Generated internal code documentation for extension, agents, and server
  modules.
roles:
  - documentation
  - engineering
associations:
  - extension
  - agent-framework
  - mcp-server
hierarchy:
  - docs
  - code
  - generated
---
[**mybusiness-mcp-extension v1.0.0**](../../README.md)

***

[mybusiness-mcp-extension](../../modules.md) / types/configRegistry

# types/configRegistry

Configuration ID Registry - Central registry for all agent configuration schema IDs

This file provides a centralized registry of unique configuration IDs (UIDs) for all
agent configurations. Instead of using file paths in schema references, each configuration
type has a unique ID that can be validated and versioned independently.

Benefits:
- Unique identification of configuration schemas
- Version tracking for configuration changes
- Validation and compatibility checking
- Decoupling from file system structure

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


## Summary

_TODO: Auto-generated placeholder._

## Responsibilities

_TODO: Auto-generated placeholder._

## Inputs

_TODO: Auto-generated placeholder._

## Outputs

_TODO: Auto-generated placeholder._

## Error Handling

_TODO: Auto-generated placeholder._

## Examples

_TODO: Auto-generated placeholder._

## Maintenance

_TODO: Auto-generated placeholder._
