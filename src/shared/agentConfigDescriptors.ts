/**
 * Descriptor types and helpers shared across agents.
 *
 * @remarks
 * Centralizes the configuration descriptor model and utilities so agents and types
 * consume a single source of truth. `agentConfig.ts` re-exports these to preserve
 * existing import paths (e.g., `@internal-types/agentConfig`).
 *
 * @example
 * ```ts
 * import { createDescriptorMap, type ConfigDescriptor } from "@shared/agentConfigDescriptors";
 *
 * const descriptors = createDescriptorMap([
 *   [
 *     "performance.caching.enable",
 *     {
 *       name: "Enable Caching",
 *       path: "performance.caching.enable",
 *       type: "boolean",
 *       visibility: "public",
 *       group: "Performance",
 *       description: "Toggle in-memory caching for agent responses",
 *       validate: (v) => typeof v === "boolean" || "Must be a boolean",
 *     } satisfies ConfigDescriptor,
 *   ],
 * ]);
 * ```
 */

/** Descriptor describing a configurable item available on an agent. */
export interface ConfigDescriptor {
  name: string;
  path: string;
  type: string;
  visibility: "public" | "private";
  verifyPaths?: string[];
  /** Optional group for organizing descriptors in UI. */
  group?: string;
  /** Optional human-readable description. */
  description?: string;
  /** Optional validation function for basic type/shape checks. */
  validate?: (value: unknown) => boolean | string;
}

/**
 * Create a descriptor map from a list of descriptor entries.
 *
 * @param entries - Tuples of key and descriptor metadata.
 * @returns Normalized descriptor map.
 */
export function createDescriptorMap(
  entries: Array<[string, ConfigDescriptor]>
): Record<string, ConfigDescriptor> {
  return Object.fromEntries(entries);
}
