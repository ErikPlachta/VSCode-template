[**UserContext-mcp-extension v1.0.0**](../../../../README.md)

***

[UserContext-mcp-extension](../../../../modules.md) / [shared/validation/configValidation](../README.md) / validateCompatibility

# Function: validateCompatibility()

> **validateCompatibility**(`config1`, `config2`): [`ValidationResult`](../interfaces/ValidationResult.md)

Defined in: [src/shared/validation/configValidation.ts:414](https://github.com/ErikPlachta/vscode-extension-mcp-server/blob/34d5103edd858c3d7864722981843ec2d9768bc3/src/shared/validation/configValidation.ts#L414)

Checks compatibility between two configuration definitions (same agent type & major version).

## Parameters

### config1

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

Baseline configuration.

### config2

[`AgentConfigDefinition`](../../../../types/agentConfig/interfaces/AgentConfigDefinition.md)

Candidate configuration being compared.

## Returns

[`ValidationResult`](../interfaces/ValidationResult.md)

[ValidationResult](../interfaces/ValidationResult.md) describing compatibility outcome (errors only if incompatible).

## Remarks

Behavior duplicated for parity; future phases will remove the types version.

## Example

```ts
const a = { $configId: 'agent.orchestrator.v1.0.0' } as AgentConfigDefinition;
const b = { $configId: 'agent.orchestrator.v1.1.0' } as AgentConfigDefinition;
const compat = validateCompatibility(a, b);
console.log(compat.isValid);
```
