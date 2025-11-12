[**UserContext-mcp-extension v1.0.0**](../../../README.md)

***

[UserContext-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / RepositoryHealthAgent

# Class: RepositoryHealthAgent

Defined in: [src/tools/repositoryHealth.ts:73](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L73)

Orchestrates linting, schema validation, and documentation audits.

## Constructors

### Constructor

> **new RepositoryHealthAgent**(`baseDir`, `config`): `RepositoryHealthAgent`

Defined in: [src/tools/repositoryHealth.ts:83](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L83)

Create a new health agent using the provided configuration.

#### Parameters

##### baseDir

`string`

Absolute repository root directory.

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

Fully resolved health agent configuration contract.

#### Returns

`RepositoryHealthAgent`

## Methods

### checkNoLegacyMcpConfigArtifacts()

> **checkNoLegacyMcpConfigArtifacts**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:343](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L343)

Ensure no legacy JSON configuration artifacts are present in the repository (outside of out/).

Rationale: Configuration source of truth is TypeScript. If external tools need JSON, it's emitted to out/mcp.config.json.
Any file named mcp.config.json outside the build output indicates drift or a regression.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result indicating success or listing offending file paths.

***

### runAllChecks()

> **runAllChecks**(): `Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Defined in: [src/tools/repositoryHealth.ts:143](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L143)

Execute every configured check (TS lint, JSON schema, Markdown metadata) and aggregate results.

#### Returns

`Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Composite report including per-check pass state and messages.

***

### runTypescriptLint()

> **runTypescriptLint**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:159](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L159)

Execute ESLint across configured TypeScript include globs.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Lint result summarizing pass/fail and diagnostic messages.

***

### validateJsonSchemas()

> **validateJsonSchemas**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:211](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L211)

Validate JSON artifacts against TypeScript type definitions using native type guards.

Note: JSON schema validation has been replaced with TypeScript type guards.
User data validation occurs at runtime through extension utilities.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result object enumerating per-file validation failures.

***

### validateMarkdownDocuments()

> **validateMarkdownDocuments**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:291](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L291)

Validate Markdown documents for required front matter fields and required section headings.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result summarizing metadata compliance across scanned documents.

***

### writeReport()

> **writeReport**(`report`): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:381](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L381)

Persist a markdown report summarizing the check outcomes to the configured output path.

#### Parameters

##### report

[`HealthReport`](../interfaces/HealthReport.md)

Completed health report to serialize.

#### Returns

`Promise`\<`void`\>

Resolves when the report has been written to disk.

***

### createFromConfig()

> `static` **createFromConfig**(`config`): `RepositoryHealthAgent`

Defined in: [src/tools/repositoryHealth.ts:134](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L134)

Create an agent using an already materialized configuration (skips disk IO).

#### Parameters

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

Pre-baked configuration object.

#### Returns

`RepositoryHealthAgent`

New agent instance.

***

### createFromDisk()

> `static` **createFromDisk**(`configPath`): `Promise`\<`RepositoryHealthAgent`\>

Defined in: [src/tools/repositoryHealth.ts:119](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L119)

Create an agent instance by reading the preferred TS application config (or legacy JSON fallback).

#### Parameters

##### configPath

`string` = `"out/mcp.config.json"`

Optional legacy JSON path used only if TS config resolution fails.

#### Returns

`Promise`\<`RepositoryHealthAgent`\>

Instantiated health agent ready to run checks.

***

### loadConfig()

> `static` **loadConfig**(`configPath`): `Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

Defined in: [src/tools/repositoryHealth.ts:94](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/a4612cf11a8e4895364ff4492326833e37841da7/src/tools/repositoryHealth.ts#L94)

Load configuration from the typed application config (preferred) with a legacy JSON fallback.

#### Parameters

##### configPath

`string`

Path to legacy JSON config used only if the TS loader throws.

#### Returns

`Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

Resolved agent configuration object.
