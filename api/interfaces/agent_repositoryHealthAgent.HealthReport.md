[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md) / HealthReport

# Interface: HealthReport

[agent/repositoryHealthAgent](../modules/agent_repositoryHealthAgent.md).HealthReport

Aggregate report describing every compliance check outcome.

## Table of contents

### Properties

- [checks](agent_repositoryHealthAgent.HealthReport.md#checks)
- [generatedAt](agent_repositoryHealthAgent.HealthReport.md#generatedat)
- [passed](agent_repositoryHealthAgent.HealthReport.md#passed)

## Properties

### checks

• `Readonly` **checks**: readonly [`CheckResult`](agent_repositoryHealthAgent.CheckResult.md)[]

Individual check results.

#### Defined in

[src/agent/repositoryHealthAgent.ts:114](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agent/repositoryHealthAgent.ts#L114)

___

### generatedAt

• `Readonly` **generatedAt**: `string`

ISO timestamp representing when the agent executed.

#### Defined in

[src/agent/repositoryHealthAgent.ts:106](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agent/repositoryHealthAgent.ts#L106)

___

### passed

• `Readonly` **passed**: `boolean`

Overall pass/fail status.

#### Defined in

[src/agent/repositoryHealthAgent.ts:110](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agent/repositoryHealthAgent.ts#L110)
