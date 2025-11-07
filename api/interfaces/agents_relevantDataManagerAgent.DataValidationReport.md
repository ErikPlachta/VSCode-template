[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / DataValidationReport

# Interface: DataValidationReport

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).DataValidationReport

Summary produced after normalising the dataset.

## Table of contents

### Properties

- [checkedAt](agents_relevantDataManagerAgent.DataValidationReport.md#checkedat)
- [issues](agents_relevantDataManagerAgent.DataValidationReport.md#issues)
- [status](agents_relevantDataManagerAgent.DataValidationReport.md#status)

## Properties

### checkedAt

• **checkedAt**: `string`

Timestamp when validation occurred.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:128](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/relevantDataManagerAgent.ts#L128)

___

### issues

• **issues**: [`DataValidationIssue`](agents_relevantDataManagerAgent.DataValidationIssue.md)[]

Detailed issues encountered during validation.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:132](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/relevantDataManagerAgent.ts#L132)

___

### status

• **status**: ``"pass"`` \| ``"fail"``

Overall status for the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:130](https://github.com/ErikPlachta/VSCode-template/blob/d11a73dc8620b42f0d3b79c19af0bc50268559b8/src/agents/relevantDataManagerAgent.ts#L130)
