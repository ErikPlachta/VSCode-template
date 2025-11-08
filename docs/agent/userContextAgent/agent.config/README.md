[**mybusiness-mcp-extension v1.0.0**](../../../README.md)

***

[mybusiness-mcp-extension](../../../modules.md) / agent/userContextAgent/agent.config

# agent/userContextAgent/agent.config

User Context Agent Configuration (renamed from Relevant Data Manager)

Transitional configuration that mirrors the legacy relevantDataManagerAgentConfig
but uses new identity fields. This allows gradual migration while keeping
backward compatibility. Once downstream references switch fully, legacy
exports can be removed.

## Variables

- [userContextAgentConfig](variables/userContextAgentConfig.md)

## References

### default

Renames and re-exports [userContextAgentConfig](variables/userContextAgentConfig.md)
