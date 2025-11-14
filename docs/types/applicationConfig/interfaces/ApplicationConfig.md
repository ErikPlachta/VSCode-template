[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [types/applicationConfig](../README.md) / ApplicationConfig

# Interface: ApplicationConfig

Defined in: [src/types/applicationConfig.ts:461](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L461)

Comprehensive application configuration structure.

## Remarks

Serves as the single entry point for app configuration. External tools can
generate or validate this structure during build.

## Example

```ts
See generated docs for a complete sample.
```

## See

 - docs/config/application.config/variables/applicationConfig.md
 - src/config/application.config.ts

## Properties

### agents

> **agents**: `object`

Defined in: [src/types/applicationConfig.ts:487](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L487)

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

##### definitions.userContext?

> `optional` **userContext**: [`AgentDefinition`](AgentDefinition.md)

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

##### profiles.userContext?

> `optional` **userContext**: [`AgentProfile`](AgentProfile.md)

#### templateReplacements?

> `optional` **templateReplacements**: `Record`\<`string`, `string`\>

Template replacement mappings.

***

### application

> **application**: `object`

Defined in: [src/types/applicationConfig.ts:463](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L463)

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

***

### data

> **data**: `object`

Defined in: [src/types/applicationConfig.ts:513](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L513)

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

***

### features

> **features**: `object`

Defined in: [src/types/applicationConfig.ts:568](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L568)

Feature flags and experimental settings.

#### experimental

> **experimental**: [`ExperimentalConfig`](ExperimentalConfig.md)

Experimental features configuration.

#### extensions

> **extensions**: [`ExtensionConfig`](ExtensionConfig.md)

Extension management configuration.

***

### jsonSchemas

> **jsonSchemas**: [`JsonSchemaConfig`](JsonSchemaConfig.md)[]

Defined in: [src/types/applicationConfig.ts:529](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L529)

JSON schema validation configurations.

***

### logging

> **logging**: `object`

Defined in: [src/types/applicationConfig.ts:538](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L538)

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

***

### markdown

> **markdown**: [`MarkdownConfig`](MarkdownConfig.md)

Defined in: [src/types/applicationConfig.ts:532](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L532)

Markdown validation configuration.

***

### mcp

> **mcp**: `object`

Defined in: [src/types/applicationConfig.ts:479](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L479)

MCP (Model Context Protocol) configuration.

#### client

> **client**: [`McpClientConfig`](McpClientConfig.md)

Client configuration settings.

#### server

> **server**: [`McpServerConfig`](McpServerConfig.md)

Server configuration settings.

***

### performance

> **performance**: `object`

Defined in: [src/types/applicationConfig.ts:560](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L560)

Performance configuration.

#### memory

> **memory**: [`MemoryConfig`](MemoryConfig.md)

Memory management settings.

#### monitoring

> **monitoring**: [`PerformanceMonitoringConfig`](PerformanceMonitoringConfig.md)

Performance monitoring settings.

***

### report

> **report**: [`ReportConfig`](ReportConfig.md)

Defined in: [src/types/applicationConfig.ts:535](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L535)

Report generation configuration.

***

### security

> **security**: `object`

Defined in: [src/types/applicationConfig.ts:550](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L550)

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

***

### typescript

> **typescript**: `object`

Defined in: [src/types/applicationConfig.ts:523](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/types/applicationConfig.ts#L523)

TypeScript compilation settings.

#### include

> **include**: `string`[]

Files to include in compilation.
