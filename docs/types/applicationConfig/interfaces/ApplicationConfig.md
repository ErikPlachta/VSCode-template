---
title: Application Config
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

---

[mybusiness-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / ApplicationConfig

# Interface: ApplicationConfig

Defined in: [src/types/applicationConfig.ts:270](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L270)

Comprehensive application configuration structure.

## Properties

### agents

> **agents**: `object`

Defined in: [src/types/applicationConfig.ts:296](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L296)

Agent configuration and profiles.

#### definitions

> **definitions**: `object`

Detailed agent definitions with metadata.

##### definitions.clarificationAgent

> **clarificationAgent**: [`AgentDefinition`](AgentDefinition.md)

##### definitions.dataAgent

> **dataAgent**: [`AgentDefinition`](AgentDefinition.md)

##### definitions.databaseAgent

> **databaseAgent**: [`AgentDefinition`](AgentDefinition.md)

##### definitions.orchestrator

> **orchestrator**: [`AgentDefinition`](AgentDefinition.md)

##### definitions.relevantDataManager

> **relevantDataManager**: [`AgentDefinition`](AgentDefinition.md)

#### global

> **global**: [`AgentGlobalConfig`](AgentGlobalConfig.md)

Global agent settings.

#### profiles

> **profiles**: `object`

Individual agent profiles.

##### profiles.clarificationAgent

> **clarificationAgent**: [`AgentProfile`](AgentProfile.md)

##### profiles.dataAgent

> **dataAgent**: [`AgentProfile`](AgentProfile.md)

##### profiles.databaseAgent

> **databaseAgent**: [`AgentProfile`](AgentProfile.md)

##### profiles.orchestrator

> **orchestrator**: [`AgentProfile`](AgentProfile.md)

##### profiles.relevantDataManager

> **relevantDataManager**: [`AgentProfile`](AgentProfile.md)

#### templateReplacements?

> `optional` **templateReplacements**: `Record`\<`string`, `string`\>

Template replacement mappings.

---

### application

> **application**: `object`

Defined in: [src/types/applicationConfig.ts:272](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L272)

Application metadata and environment settings.

#### description

> **description**: `string`

Application description.

#### environments

> **environments**: `object`

Environment-specific configurations.

##### environments.development

> **development**: [`EnvironmentConfig`](EnvironmentConfig.md)

##### environments.production

> **production**: [`EnvironmentConfig`](EnvironmentConfig.md)

##### environments.staging

> **staging**: [`EnvironmentConfig`](EnvironmentConfig.md)

#### name

> **name**: `string`

Application name.

#### version

> **version**: `string`

Application version.

---

### data

> **data**: `object`

Defined in: [src/types/applicationConfig.ts:320](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L320)

Data management configuration.

#### cache

> **cache**: [`CacheConfig`](CacheConfig.md)

Cache configuration.

#### categories

> **categories**: `string`[]

Available data categories.

#### validation

> **validation**: [`DataValidationConfig`](DataValidationConfig.md)

Data validation settings.

---

### features

> **features**: `object`

Defined in: [src/types/applicationConfig.ts:375](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L375)

Feature flags and experimental settings.

#### experimental

> **experimental**: [`ExperimentalConfig`](ExperimentalConfig.md)

Experimental features configuration.

#### extensions

> **extensions**: [`ExtensionConfig`](ExtensionConfig.md)

Extension management configuration.

---

### jsonSchemas

> **jsonSchemas**: [`JsonSchemaConfig`](JsonSchemaConfig.md)[]

Defined in: [src/types/applicationConfig.ts:336](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L336)

JSON schema validation configurations.

---

### logging

> **logging**: `object`

Defined in: [src/types/applicationConfig.ts:345](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L345)

Logging configuration.

#### file

> **file**: [`LoggingFileConfig`](LoggingFileConfig.md)

File logging configuration.

#### format

> **format**: `string`

Log output format.

#### level

> **level**: `string`

Default log level.

#### outputs

> **outputs**: `string`[]

Log output destinations.

---

### markdown

> **markdown**: [`MarkdownConfig`](MarkdownConfig.md)

Defined in: [src/types/applicationConfig.ts:339](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L339)

Markdown validation configuration.

---

### mcp

> **mcp**: `object`

Defined in: [src/types/applicationConfig.ts:288](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L288)

MCP (Model Context Protocol) configuration.

#### client

> **client**: [`McpClientConfig`](McpClientConfig.md)

Client configuration settings.

#### server

> **server**: [`McpServerConfig`](McpServerConfig.md)

Server configuration settings.

---

### performance

> **performance**: `object`

Defined in: [src/types/applicationConfig.ts:367](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L367)

Performance configuration.

#### memory

> **memory**: [`MemoryConfig`](MemoryConfig.md)

Memory management settings.

#### monitoring

> **monitoring**: [`PerformanceMonitoringConfig`](PerformanceMonitoringConfig.md)

Performance monitoring settings.

---

### report

> **report**: [`ReportConfig`](ReportConfig.md)

Defined in: [src/types/applicationConfig.ts:342](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L342)

Report generation configuration.

---

### security

> **security**: `object`

Defined in: [src/types/applicationConfig.ts:357](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L357)

Security configuration.

#### allowedOrigins

> **allowedOrigins**: `string`[]

Allowed origins for CORS.

#### enableCORS

> **enableCORS**: `boolean`

Enable CORS support.

#### rateLimit

> **rateLimit**: [`RateLimitConfig`](RateLimitConfig.md)

Rate limiting configuration.

---

### typescript

> **typescript**: `object`

Defined in: [src/types/applicationConfig.ts:330](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/30df51b386dfde8189b2a5aec97b736e2d5dab7f/src/types/applicationConfig.ts#L330)

TypeScript compilation settings.

#### include

> **include**: `string`[]

Files to include in compilation.

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
