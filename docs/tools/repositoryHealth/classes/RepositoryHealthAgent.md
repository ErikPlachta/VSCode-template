---
title: Repository Health Agent
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

[mybusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / RepositoryHealthAgent

# Class: RepositoryHealthAgent

Defined in: src/tools/repositoryHealth.ts:63

Orchestrates linting, schema validation, and documentation audits.

## Constructors

### Constructor

> **new RepositoryHealthAgent**(`baseDir`, `config`): `RepositoryHealthAgent`

Defined in: src/tools/repositoryHealth.ts:74

Create a new health agent using the provided configuration.

#### Parameters

##### baseDir

`string`

Repository root directory.

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

Parsed agent configuration contract.

#### Returns

`RepositoryHealthAgent`

## Methods

### runAllChecks()

> **runAllChecks**(): `Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Defined in: src/tools/repositoryHealth.ts:141

Execute every configured check and return a comprehensive report.

#### Returns

`Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

- Combined report of all checks.

***

### runTypescriptLint()

> **runTypescriptLint**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: src/tools/repositoryHealth.ts:155

Execute ESLint using project settings to ensure documentation coverage.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- Lint check outcome.

***

### validateJsonSchemas()

> **validateJsonSchemas**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: src/tools/repositoryHealth.ts:181

Validate JSON artifacts against defined schemas.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- JSON schema validation outcome.

***

### validateMarkdownDocuments()

> **validateMarkdownDocuments**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: src/tools/repositoryHealth.ts:223

Validate Markdown documents for required metadata and content sections.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- Markdown validation outcome.

***

### writeReport()

> **writeReport**(`report`): `Promise`\<`void`\>

Defined in: src/tools/repositoryHealth.ts:273

Persist a markdown report summarizing the check outcomes.

#### Parameters

##### report

[`HealthReport`](../interfaces/HealthReport.md)

Generated report to persist.

#### Returns

`Promise`\<`void`\>

- Completion signal after file write.

***

### createFromConfig()

> `static` **createFromConfig**(`config`): `RepositoryHealthAgent`

Defined in: src/tools/repositoryHealth.ts:132

Create an agent using an already materialized AgentConfig.

#### Parameters

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

Agent configuration object.

#### Returns

`RepositoryHealthAgent`

- Repository health agent using provided configuration.

***

### createFromDisk()

> `static` **createFromDisk**(`configPath`): `Promise`\<`RepositoryHealthAgent`\>

Defined in: src/tools/repositoryHealth.ts:117

Create an agent instance by reading the default configuration file or TS config.

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

Optional custom path to the legacy configuration file.

#### Returns

`Promise`\<`RepositoryHealthAgent`\>

- Instantiated repository health agent.

***

### loadConfig()

> `static` **loadConfig**(`configPath`): `Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

Defined in: src/tools/repositoryHealth.ts:92

Load configuration from typed application config, falling back to legacy JSON.

#### Parameters

##### configPath

`string`

Legacy JSON path used for fallback during migration.

#### Returns

`Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

- Resolved agent configuration contract.


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
