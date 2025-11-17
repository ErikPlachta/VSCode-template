[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / validateAgentConfig

# Function: validateAgentConfig()

> **validateAgentConfig**(`config`): [`ValidationResult`](../interfaces/ValidationResult.md)

Defined in: [src/shared/validation/configValidation.ts:68](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/1e5d865769408edfe3205c1b04613b0b4271874f/src/shared/validation/configValidation.ts#L68)

Validates an unknown agent configuration object against registry metadata and business rules.

## Parameters

### config

`unknown`

Unknown configuration candidate object to validate.

## Returns

[`ValidationResult`](../interfaces/ValidationResult.md)

[ValidationResult](../interfaces/ValidationResult.md) listing blocking errors and non-blocking warnings.

## Remarks

Behavior duplicated from `src/types/configValidation.ts` (Phase 3).

## Example

```ts
const candidate = { $configId: 'agent.orchestrator.v1.0.0', agent: { id: 'orch', name: 'Orchestrator', version: '1.0.0', description: 'Routes intents' } };
const result = validateAgentConfig(candidate);
if (!result.isValid) {
  console.error(generateValidationReport(result));
}
```
