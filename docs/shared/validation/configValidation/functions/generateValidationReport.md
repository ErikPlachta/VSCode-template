[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / generateValidationReport

# Function: generateValidationReport()

> **generateValidationReport**(`result`): `string`

Defined in: [src/shared/validation/configValidation.ts:447](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/e0ff590bdf5a0d15840bcfb8a45d352ad9172eae/src/shared/validation/configValidation.ts#L447)

Generates a human-readable multi-line report summarizing validation outcome.

## Parameters

### result

[`ValidationResult`](../interfaces/ValidationResult.md)

Validation outcome produced by a validator.

## Returns

`string`

Multi‑line string (errors listed first, then warnings).
