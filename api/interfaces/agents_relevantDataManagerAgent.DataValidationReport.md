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

[src/agents/relevantDataManagerAgent.ts:126](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L126)

___

### issues

• **issues**: [`DataValidationIssue`](agents_relevantDataManagerAgent.DataValidationIssue.md)[]

Detailed issues encountered during validation.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:130](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L130)

___

### status

• **status**: ``"pass"`` \| ``"fail"``

Overall status for the category.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:128](https://github.com/ErikPlachta/VSCode-template/blob/1621c024ed17d379711fc500ce8ea61554a34e57/src/agents/relevantDataManagerAgent.ts#L128)
