/**
 * @packageDocumentation Legacy Relevant Data Manager agent entry point (shim)
 *
 * The full implementation was migrated to `@agent/userContextAgent`. This module
 * now re-exports the new implementation to preserve backward compatibility and
 * emits a one-time deprecation warning when instantiated. Import from
 * `@agent/userContextAgent` going forward.
 */

import {
  UserContextAgent,
  userContextAgentConfig,
} from "@agent/userContextAgent";

// One-time deprecation warning controller
let __warnedLegacyAgent = false;

/**
 * Backwards-compatible class name that extends the new UserContextAgent.
 */
export class RelevantDataManagerAgent extends UserContextAgent {
  /**
   * constructor function.
   *
   * @param {Promise<string>} cacheDirPromise - Optional cache directory promise used by tests.
   */
  constructor(cacheDirPromise?: Promise<string>) {
    if (!__warnedLegacyAgent) {
      console.warn(
        "Deprecated: '@agent/relevantDataManagerAgent' will be removed in a future release. Please import from '@agent/userContextAgent' instead."
      );
      __warnedLegacyAgent = true;
    }
    super(cacheDirPromise);
  }
}

/**
 * Factory function preserved for compatibility with existing imports.
 *
 * @returns {RelevantDataManagerAgent} Instantiated legacy shim agent.
 */
export function createRelevantDataManagerAgent(): RelevantDataManagerAgent {
  return new RelevantDataManagerAgent();
}

// Re-export types and errors to keep API surface compatible during transition.
export {
  UnknownCategoryError,
  type BusinessCategory,
  type CategoryId,
  type RelationshipDescription,
  type CategorySchema,
  type DatasetCatalogueEntry,
  type CategorySnapshot,
  type EntityConnections,
} from "@agent/userContextAgent";

// Export configuration types and instances for external use (remain under legacy path for now)
// Legacy exports now point directly to the new user-context configuration; remove after alias window.
export { userContextAgentConfig as relevantDataManagerAgentConfig };
