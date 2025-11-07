[mybusiness-mcp-extension - v1.0.0](../README.md) / [Exports](../modules.md) / [agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md) / DataValidationIssue

# Interface: DataValidationIssue

[agents/relevantDataManagerAgent](../modules/agents_relevantDataManagerAgent.md).DataValidationIssue

Issue detected while validating the raw data set for a category.

## Table of contents

### Properties

- [field](agents_relevantDataManagerAgent.DataValidationIssue.md#field)
- [message](agents_relevantDataManagerAgent.DataValidationIssue.md#message)
- [recordId](agents_relevantDataManagerAgent.DataValidationIssue.md#recordid)
- [schema](agents_relevantDataManagerAgent.DataValidationIssue.md#schema)
- [type](agents_relevantDataManagerAgent.DataValidationIssue.md#type)

## Properties

### field

• `Optional` **field**: `string`

Field that failed validation if available.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:118](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L118)

___

### message

• **message**: `string`

Detailed error message.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:120](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L120)

___

### recordId

• **recordId**: `string`

Identifier for the record that failed validation.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:114](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L114)

___

### schema

• `Optional` **schema**: `string`

Optional schema name that triggered the error.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:116](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L116)

___

### type

• **type**: ``"schema"`` \| ``"relationship"``

Type of validation that generated the issue.

#### Defined in

[src/agents/relevantDataManagerAgent.ts:122](https://github.com/ErikPlachta/VSCode-template/blob/b0db9269b6afdcfc7febac5c85910ca1321f42af/src/agents/relevantDataManagerAgent.ts#L122)
