[**myBusiness-mcp-extension v1.0.0**](../../../README.md)

***

[myBusiness-mcp-extension](../../../modules.md) / [tools/repositoryHealth](../README.md) / RepositoryHealthAgent

# Class: RepositoryHealthAgent

Defined in: [src/tools/repositoryHealth.ts:70](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L70)

Orchestrates linting, schema validation, and documentation audits.

## Constructors

### Constructor

> **new RepositoryHealthAgent**(`baseDir`, `config`): `RepositoryHealthAgent`

Defined in: [src/tools/repositoryHealth.ts:82](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L82)

Create a new health agent using the provided configuration.

#### Parameters

##### baseDir

`string`

baseDir parameter.

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

config parameter.

#### Returns

`RepositoryHealthAgent`

- TODO: describe return value.

## Methods

### runAllChecks()

> **runAllChecks**(): `Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

Defined in: [src/tools/repositoryHealth.ts:149](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L149)

Execute every configured check and return a comprehensive report.

#### Returns

`Promise`\<[`HealthReport`](../interfaces/HealthReport.md)\>

- TODO: describe return value.

***

### runTypescriptLint()

> **runTypescriptLint**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:163](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L163)

Execute ESLint using project settings to ensure documentation coverage.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- TODO: describe return value.

***

### validateJsonSchemas()

> **validateJsonSchemas**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:189](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L189)

Validate JSON artifacts against defined schemas.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- TODO: describe return value.

***

### validateMarkdownDocuments()

> **validateMarkdownDocuments**(): `Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

Defined in: [src/tools/repositoryHealth.ts:231](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L231)

Validate Markdown documents for required metadata and content sections.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/CheckResult.md)\>

- TODO: describe return value.

***

### writeReport()

> **writeReport**(`report`): `Promise`\<`void`\>

Defined in: [src/tools/repositoryHealth.ts:281](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L281)

Persist a markdown report summarizing the check outcomes.

#### Parameters

##### report

[`HealthReport`](../interfaces/HealthReport.md)

report parameter.

#### Returns

`Promise`\<`void`\>

- TODO: describe return value.

***

### createFromConfig()

> `static` **createFromConfig**(`config`): `RepositoryHealthAgent`

Defined in: [src/tools/repositoryHealth.ts:140](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L140)

Create an agent using an already materialized AgentConfig.

#### Parameters

##### config

[`AgentConfig`](../interfaces/AgentConfig.md)

config parameter.

#### Returns

`RepositoryHealthAgent`

- TODO: describe return value.

***

### createFromDisk()

> `static` **createFromDisk**(`configPath`): `Promise`\<`RepositoryHealthAgent`\>

Defined in: [src/tools/repositoryHealth.ts:125](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L125)

Create an agent instance by reading the default configuration file or TS config.

#### Parameters

##### configPath

`string` = `"src/mcp.config.json"`

configPath parameter.

#### Returns

`Promise`\<`RepositoryHealthAgent`\>

- TODO: describe return value.

***

### loadConfig()

> `static` **loadConfig**(`configPath`): `Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

Defined in: [src/tools/repositoryHealth.ts:100](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/b85aa84fc9f3a7305e615bf832d755c74a119ffd/src/tools/repositoryHealth.ts#L100)

Load configuration from typed application config, falling back to legacy JSON.

#### Parameters

##### configPath

`string`

configPath parameter.

#### Returns

`Promise`\<[`AgentConfig`](../interfaces/AgentConfig.md)\>

- TODO: describe return value.
