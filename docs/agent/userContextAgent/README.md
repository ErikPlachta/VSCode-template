[**myBusiness-mcp-extension v1.0.0**](../../README.md)

***

[myBusiness-mcp-extension](../../modules.md) / agent/userContextAgent

# agent/userContextAgent

User Context Agent (renamed from Relevant Data Manager)

Thin compatibility layer that re-exports the legacy implementation under a new
name. This allows consumers to switch imports without altering behavior.

- Old: `@agent/relevantDataManagerAgent`
- New: `@agent/userContextAgent`

## References

### BusinessCategory

Re-exports [BusinessCategory](../relevantDataManagerAgent/interfaces/BusinessCategory.md)

***

### CategoryId

Re-exports [CategoryId](../relevantDataManagerAgent/type-aliases/CategoryId.md)

***

### CategorySchema

Re-exports [CategorySchema](../relevantDataManagerAgent/interfaces/CategorySchema.md)

***

### createUserContextAgent

Renames and re-exports [createRelevantDataManagerAgent](../relevantDataManagerAgent/functions/createRelevantDataManagerAgent.md)

***

### RelationshipDescription

Re-exports [RelationshipDescription](../relevantDataManagerAgent/interfaces/RelationshipDescription.md)

***

### UserContextAgent

Renames and re-exports [RelevantDataManagerAgent](../relevantDataManagerAgent/classes/RelevantDataManagerAgent.md)

***

### userContextAgentConfig

Re-exports [userContextAgentConfig](agent.config/variables/userContextAgentConfig.md)

***

### UserContextAgentConfig

Renames and re-exports [RelevantDataManagerAgentConfig](../relevantDataManagerAgent/config/classes/RelevantDataManagerAgentConfig.md)
