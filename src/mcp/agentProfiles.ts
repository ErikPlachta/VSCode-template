/**
 * @file agentProfiles implementation for mcp module
 */

export type AgentIdentifier =
  | "orchestrator"
  | "relevant-data-manager"
  | "database-agent"
  | "data-agent"
  | "clarification-agent";

export interface AgentProfile {
  readonly id: AgentIdentifier;
  readonly title: string;
  readonly description: string;
  readonly primarySignals: string[];
  readonly escalateWhen: string[];
}

export const RelevantDataManagerAgentProfile: AgentProfile = {
  id: "relevant-data-manager",
  title: "Relevant Data Manager",
  description: "curates category metadata, schemas, and validation artefacts",
  primarySignals: ["schema", "metadata", "catalogue", "snapshot"],
  escalateWhen: ["category folder is missing", "schema validation fails"],
};

export const OrchestratorProfile: AgentProfile = {
  id: "orchestrator",
  title: "Orchestrator",
  description:
    "routes questions to appropriate agents based on intent classification",
  primarySignals: ["routing", "coordination", "intent", "workflow"],
  escalateWhen: ["no suitable agent found", "multiple agents conflict"],
};

export const DatabaseAgentProfile: AgentProfile = {
  id: "database-agent",
  title: "Database Agent",
  description:
    "executes structured queries and saved blueprints against cached datasets",
  primarySignals: ["query", "records", "filter", "list"],
  escalateWhen: [
    "category metadata is missing",
    "no records match the criteria",
  ],
};

export const DataAgentProfile: AgentProfile = {
  id: "data-agent",
  title: "Exploration & Insight Agent",
  description:
    "crafts exploration plans and synthesises insights across datasets",
  primarySignals: ["insight", "plan", "narrative", "connections"],
  escalateWhen: [
    "relationships are missing",
    "no supporting records are available",
  ],
};

export const ClarificationAgentProfile: AgentProfile = {
  id: "clarification-agent",
  title: "Clarification Agent",
  description: "triages ambiguous requests and asks follow-up questions",
  primarySignals: ["unclear", "unknown", "missing context"],
  escalateWhen: [
    "the user cannot provide category context",
    "no agents match the request",
  ],
};

export type KnownAgentProfile =
  | typeof OrchestratorProfile
  | typeof RelevantDataManagerAgentProfile
  | typeof DatabaseAgentProfile
  | typeof DataAgentProfile
  | typeof ClarificationAgentProfile;
