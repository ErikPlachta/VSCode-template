---
title: Database Config
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
[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [types/agentConfig](../README.md) / DatabaseConfig

# Interface: DatabaseConfig

Defined in: [src/types/agentConfig.ts:145](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L145)

Database agent-specific configuration

## Properties

### fieldAliases

> **fieldAliases**: `Record`\<`string`, `Record`\<`string`, `string`\>\>

Defined in: [src/types/agentConfig.ts:146](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L146)

***

### operations

> **operations**: `object`

Defined in: [src/types/agentConfig.ts:172](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L172)

#### aggregation

> **aggregation**: `object`

##### aggregation.enableGroupBy

> **enableGroupBy**: `boolean`

##### aggregation.functions

> **functions**: `string`[]

##### aggregation.maxGroups

> **maxGroups**: `number`

#### filtering

> **filtering**: `object`

##### filtering.caseInsensitiveStrings

> **caseInsensitiveStrings**: `boolean`

##### filtering.enableFuzzyMatching

> **enableFuzzyMatching**: `boolean`

##### filtering.operators

> **operators**: `string`[]

#### joins

> **joins**: `object`

##### joins.autoDiscoverRelationships

> **autoDiscoverRelationships**: `boolean`

##### joins.maxJoinRecords

> **maxJoinRecords**: `number`

##### joins.supportedJoinTypes

> **supportedJoinTypes**: `string`[]

***

### performance

> **performance**: `object`

Defined in: [src/types/agentConfig.ts:147](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L147)

#### caching

> **caching**: `object`

##### caching.cacheTTL

> **cacheTTL**: `number`

##### caching.defaultKeyPrefix

> **defaultKeyPrefix**: `string`

##### caching.enabledByDefault

> **enabledByDefault**: `boolean`

##### caching.maxCacheEntries

> **maxCacheEntries**: `number`

#### limits

> **limits**: `object`

##### limits.maxJoinDepth

> **maxJoinDepth**: `number`

##### limits.maxResultSize

> **maxResultSize**: `number`

##### limits.queryTimeout

> **queryTimeout**: `number`

***

### validation

> **validation**: `object`

Defined in: [src/types/agentConfig.ts:160](https://github.com/ErikPlachta/VSCode-template/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/agentConfig.ts#L160)

#### integrityChecks

> **integrityChecks**: `object`

##### integrityChecks.checkMissingReferences

> **checkMissingReferences**: `boolean`

##### integrityChecks.validateRelationships

> **validateRelationships**: `boolean`

##### integrityChecks.warnOnSchemaIssues

> **warnOnSchemaIssues**: `boolean`

#### schemaValidation

> **schemaValidation**: `object`

##### schemaValidation.allowUnknownFields

> **allowUnknownFields**: `boolean`

##### schemaValidation.autoTransformAliases

> **autoTransformAliases**: `boolean`

##### schemaValidation.enableStrictValidation

> **enableStrictValidation**: `boolean`


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
