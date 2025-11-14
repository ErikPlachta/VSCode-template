/**
 * @packageDocumentation Deprecated HTTP embedded server stub.
 *
 * The project migrated to stdio-only JSON-RPC transport. This file remains as a
 * no-op placeholder to avoid breaking historical imports during refactor stages.
 * Remove after all references are cleaned.
 */

/** Start MCP server (deprecated): returns a fixed informational string. */
export async function startMCPServer(): Promise<string> {
  return "stdio-only: no HTTP server";
}

/** Stop MCP server (deprecated no-op). */
export async function stopMCPServer(): Promise<void> {
  return Promise.resolve();
}
