/**
 * @packageDocumentation User Context Agent Configuration (renamed from Relevant Data Manager)
 *
 * Transitional configuration that mirrors the legacy relevantDataManagerAgentConfig
 * but uses new identity fields. This allows gradual migration while keeping
 * backward compatibility. Once downstream references switch fully, legacy
 * exports can be removed.
 */

import type { AgentConfigDefinition } from "@internal-types/agentConfig";
import { CONFIG_IDS } from "@internal-types/configRegistry";
import { relevantDataManagerAgentConfig } from "@agent/relevantDataManagerAgent/agent.config";

/**
 * User Context Agent configuration.
 * Currently delegates to the legacy relevant data manager configuration to avoid duplication.
 */
export const userContextAgentConfig: AgentConfigDefinition = {
  ...relevantDataManagerAgentConfig,
  agent: {
    ...relevantDataManagerAgentConfig.agent,
    id: "user-context",
    name: "User Context Agent",
    description:
      "Manages user-centric contextual datasets (formerly businessData) including schemas, relationships, and quality metadata.",
  },
  // Keep legacy section name for now; a later refactor will rename keys internally
  relevantDataManager: relevantDataManagerAgentConfig.relevantDataManager,
};

export default userContextAgentConfig;
