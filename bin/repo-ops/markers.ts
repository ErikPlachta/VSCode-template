/**
 * @packageDocumentation
 * Default marker configuration for repo-ops.
 *
 * Centralizes strings so parsing logic remains data-driven. Callers can
 * provide overrides if repository conventions differ.
 */
import type { MarkerSet } from "./types";
import { defaultConfig } from "./repo-ops.config";

/**
 * Default markers used by the sync tooling.
 */
export const defaultMarkers: MarkerSet = defaultConfig.markers;
