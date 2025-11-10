[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / RepositoryHealthAgent

# Class: RepositoryHealthAgent

Defined in: [src/tools/repositoryHealth.ts:71](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L71)

Orchestrates linting, schema validation, and documentation audits.

## Constructors

### Constructor

> **new RepositoryHealthAgent**(`baseDir`, `config`): `RepositoryHealthAgent`

Defined in: [src/tools/repositoryHealth.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L82)

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

Defined in: [src/tools/repositoryHealth.ts:308](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L308)

Ensure no legacy JSON configuration artifacts are present in the repository (outside of out/).

Rationale: Configuration source of truth is TypeScript. If external tools need JSON, it's emitted to out/mcp.config.json.
Any file named mcp.config.json outside the build output indicates drift or a regression.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result indicating success or listing offending file paths.

***

### runAllChecks()

> **runAllChecks**(): `Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Defined in: [src/tools/repositoryHealth.ts:149](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L149)

Execute every configured check (TS lint, JSON schema, Markdown metadata) and aggregate results.

#### Returns

`Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Composite report including per-check pass state and messages.

***

### runTypescriptLint()

> **runTypescriptLint**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:165](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L165)

Execute ESLint across configured TypeScript include globs.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Lint result summarizing pass/fail and diagnostic messages.

***

### validateJsonSchemas()

> **validateJsonSchemas**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:214](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L214)

Validate JSON artifacts against declared schemas using Ajv 2020 draft.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result object enumerating per-file schema validation failures.

***

### validateMarkdownDocuments()

> **validateMarkdownDocuments**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:256](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L256)

Validate Markdown documents for required front matter fields and required section headings.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Result summarizing metadata compliance across scanned documents.

***

### writeReport()

> **writeReport**(`report`): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:346](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L346)

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

Defined in: [src/tools/repositoryHealth.ts:140](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L140)

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

Defined in: [src/tools/repositoryHealth.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L125)

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

Defined in: [src/tools/repositoryHealth.ts:100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e3b55db1722f4cd35a6381c637c0156003e0830a/src/tools/repositoryHealth.ts#L100)

Load configuration from the typed application config (preferred) with a legacy JSON fallback.

#### Parameters

##### configPath

`string`

Path to legacy JSON config used only if the TS loader throws.

#### Returns

`Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

Resolved agent configuration object.
