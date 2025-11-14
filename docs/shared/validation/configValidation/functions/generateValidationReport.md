[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / generateValidationReport

# Function: generateValidationReport()

> **generateValidationReport**(`result`): `string`

Defined in: [src/shared/validation/configValidation.ts:447](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/84c7df18722468bc459406ee76296926ff429dc0/src/shared/validation/configValidation.ts#L447)

Generates a human-readable multi-line report summarizing validation outcome.

## Parameters

### result

[`ValidationResult`](../interfaces/ValidationResult.md)

Validation outcome produced by a validator.

## Returns

`string`

Multi‑line string (errors listed first, then warnings).
