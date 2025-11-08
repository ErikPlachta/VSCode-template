/**
 * @packageDocumentation User Context Agent configuration wrapper
 *
 * Provides a renamed config class that wraps the legacy RelevantDataManagerAgentConfig
 * to preserve behavior while exposing the new name across imports.
 */

export { RelevantDataManagerAgentConfig as UserContextAgentConfig } from "../relevantDataManagerAgent/config";
export type { RelevantDataManagerConfig as UserContextConfig } from "../../types/agentConfig";
export { userContextAgentConfig } from "./agent.config";
