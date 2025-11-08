/**
 * @packageDocumentation User Context Agent (renamed from Relevant Data Manager)
 *
 * Thin compatibility layer that re-exports the legacy implementation under a new
 * name. This allows consumers to switch imports without altering behavior.
 *
 * - Old: `@agent/relevantDataManagerAgent`
 * - New: `@agent/userContextAgent`
 */

export { RelevantDataManagerAgent as UserContextAgent } from "../relevantDataManagerAgent";
export { createRelevantDataManagerAgent as createUserContextAgent } from "../relevantDataManagerAgent";
export { UserContextAgentConfig, userContextAgentConfig } from "./config";
