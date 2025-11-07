[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md) / RepositoryHealthAgent

# Class: RepositoryHealthAgent

[agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md).RepositoryHealthAgent

RepositoryHealthAgent orchestrates linting, schema validation, and documentation audits.

**`Example`**

```ts
const agent = await RepositoryHealthAgent.createFromDisk();
const report = await agent.runAllChecks();
await agent.writeReport(report);
```

## Table of contents

### Constructors

- [constructor](agent_repositoryHealthAgent.RepositoryHealthAgent.md#constructor)

### Methods

- [runAllChecks](agent_repositoryHealthAgent.RepositoryHealthAgent.md#runallchecks)
- [runTypescriptLint](agent_repositoryHealthAgent.RepositoryHealthAgent.md#runtypescriptlint)
- [validateJsonSchemas](agent_repositoryHealthAgent.RepositoryHealthAgent.md#validatejsonschemas)
- [validateMarkdownDocuments](agent_repositoryHealthAgent.RepositoryHealthAgent.md#validatemarkdowndocuments)
- [writeReport](agent_repositoryHealthAgent.RepositoryHealthAgent.md#writereport)
- [createFromDisk](agent_repositoryHealthAgent.RepositoryHealthAgent.md#createfromdisk)
- [loadConfig](agent_repositoryHealthAgent.RepositoryHealthAgent.md#loadconfig)

## Constructors

### constructor

• **new RepositoryHealthAgent**(`baseDir`, `config`): [`RepositoryHealthAgent`](agent_repositoryHealthAgent.RepositoryHealthAgent.md)

Create a new health agent using the provided configuration.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseDir` | `string` | Repository root directory. |
| `config` | [`AgentConfig`](../interfaces/agent_repositoryHealthAgent.AgentConfig.md) | Parsed agent configuration contract. |

#### Returns

[`RepositoryHealthAgent`](agent_repositoryHealthAgent.RepositoryHealthAgent.md)

**`Example`**

```ts
const config = await RepositoryHealthAgent.loadConfig('agent.config.json');
const agent = new RepositoryHealthAgent(process.cwd(), config);
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:160](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L160)

## Methods

### runAllChecks

▸ **runAllChecks**(): `Promise`\<[`HealthReport`](../interfaces/agent_repositoryHealthAgent.HealthReport.md)\>

Execute every configured check and return a comprehensive report.

#### Returns

`Promise`\<[`HealthReport`](../interfaces/agent_repositoryHealthAgent.HealthReport.md)\>

Combined health report for lint, schema, and documentation enforcement.

**`Throws`**

If an unexpected failure occurs during execution.

**`Example`**

```ts
const report = await agent.runAllChecks();
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:218](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L218)

___

### runTypescriptLint

▸ **runTypescriptLint**(): `Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Execute ESLint using project settings to ensure documentation coverage.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Lint check result with aggregated error messages.

**`Throws`**

When ESLint cannot be executed.

**`Example`**

```ts
const lintResult = await agent.runTypescriptLint();
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:245](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L245)

___

### validateJsonSchemas

▸ **validateJsonSchemas**(): `Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Validate JSON artifacts against defined schemas.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Check result capturing schema validation compliance.

**`Throws`**

When schema compilation fails.

**`Example`**

```ts
const jsonResult = await agent.validateJsonSchemas();
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:279](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L279)

___

### validateMarkdownDocuments

▸ **validateMarkdownDocuments**(): `Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Validate Markdown documents for required metadata and content sections.

#### Returns

`Promise`\<[`CheckResult`](../interfaces/agent_repositoryHealthAgent.CheckResult.md)\>

Markdown compliance results with file specific diagnostics.

**`Throws`**

When Markdown files cannot be read.

**`Example`**

```ts
const markdownResult = await agent.validateMarkdownDocuments();
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:323](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L323)

___

### writeReport

▸ **writeReport**(`report`): `Promise`\<`void`\>

Persist a markdown report summarising the check outcomes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `report` | [`HealthReport`](../interfaces/agent_repositoryHealthAgent.HealthReport.md) | Generated report to persist. |

#### Returns

`Promise`\<`void`\>

Promise that resolves when the file has been written.

**`Throws`**

When the report directory cannot be created.

**`Example`**

```ts
const report = await agent.runAllChecks();
await agent.writeReport(report);
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:377](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L377)

___

### createFromDisk

▸ **createFromDisk**(`configPath?`): `Promise`\<[`RepositoryHealthAgent`](agent_repositoryHealthAgent.RepositoryHealthAgent.md)\>

Create an agent instance by reading the default configuration file.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `configPath?` | `string` | `'agent.config.json'` | Optional custom path to the configuration file. |

#### Returns

`Promise`\<[`RepositoryHealthAgent`](agent_repositoryHealthAgent.RepositoryHealthAgent.md)\>

Instantiated repository health agent.

**`Throws`**

When configuration loading fails.

**`Example`**

```ts
const agent = await RepositoryHealthAgent.createFromDisk();
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:202](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L202)

___

### loadConfig

▸ **loadConfig**(`configPath`): `Promise`\<[`AgentConfig`](../interfaces/agent_repositoryHealthAgent.AgentConfig.md)\>

Load configuration from disk using the default location.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configPath` | `string` | Relative path to the configuration file. |

#### Returns

`Promise`\<[`AgentConfig`](../interfaces/agent_repositoryHealthAgent.AgentConfig.md)\>

A parsed agent configuration object.

**`Throws`**

When the configuration file cannot be parsed.

**`Example`**

```ts
const config = await RepositoryHealthAgent.loadConfig('agent.config.json');
```

#### Defined in

[src/agent/repositoryHealthAgent.ts:184](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agent/repositoryHealthAgent.ts#L184)
