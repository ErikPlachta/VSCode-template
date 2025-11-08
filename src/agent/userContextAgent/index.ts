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
// Re-export legacy types so consumers can switch import path without changes
export type {
  BusinessCategory,
  CategoryId,
  RelationshipDescription,
  CategorySchema,
} from "../relevantDataManagerAgent";
export { UserContextAgentConfig, userContextAgentConfig } from "./config";
