[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / generateValidationReport

# Function: generateValidationReport()

> **generateValidationReport**(`result`): `string`

Defined in: [src/shared/validation/configValidation.ts:447](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/33bfd1a9c24e1d43878717d24d385933ad1aba5a/src/shared/validation/configValidation.ts#L447)

Generates a human-readable multi-line report summarizing validation outcome.

## Parameters

### result

[`ValidationResult`](../interfaces/ValidationResult.md)

Validation outcome produced by a validator.

## Returns

`string`

Multi‑line string (errors listed first, then warnings).
