/**
 * @packageDocumentation Utilities to register/unregister this extension's MCP server in the
 * user's global VS Code mcp.json so Copilot Chat can discover it.
 */
import { promises as fs } from "fs";
import * as path from "path";
import * as os from "os";

interface McpConfig {
  inputs?: unknown[];
  servers: Record<string, unknown>;
}

/**
 * getMcpConfigPath function.
 *
 * @returns {string} - TODO: describe return value.
 */
function getMcpConfigPath(): string {
  // Try to resolve platform-specific default for VS Code stable
  const platform = process.platform;
  if (platform === "win32") {
    const appData =
      process.env.APPDATA || path.join(os.homedir(), "AppData", "Roaming");
    return path.join(appData, "Code", "User", "mcp.json");
  }
  if (platform === "darwin") {
    return path.join(
      os.homedir(),
      "Library",
      "Application Support",
      "Code",
      "User",
      "mcp.json"
    );
  }
  // linux and others
  return path.join(os.homedir(), ".config", "Code", "User", "mcp.json");
}

/**
 * readMcpConfig function.
 *
 * @param {string} filePath - filePath parameter.
 * @returns {Promise<McpConfig>} - TODO: describe return value.
 * @throws {Error} - May throw an error.
 */
async function readMcpConfig(filePath: string): Promise<McpConfig> {
  try {
    const raw = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(raw) as McpConfig;
    return { inputs: parsed.inputs, servers: parsed.servers ?? {} };
  } catch (err) {
    const e = err as NodeJS.ErrnoException;
    if (e && e.code === "ENOENT") {
      return { servers: {} };
    }
    throw e;
  }
}

/**
 * writeMcpConfig function.
 *
 * @param {string} filePath - filePath parameter.
 * @param {McpConfig} config - config parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 */
async function writeMcpConfig(
  filePath: string,
  config: McpConfig
): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const pretty = JSON.stringify(config, null, 2);
  await fs.writeFile(filePath, pretty + "\n", "utf8");
}

export interface RegistrationOptions {
  id: string; // key under servers
  url: string; // http JSON-RPC endpoint, e.g., http://localhost:39200
  includeAuthHeader?: boolean;
  token?: string;
}

/**
 * Ensure an HTTP JSON-RPC server entry exists in mcp.json for Copilot Chat.
 *
 * @param {RegistrationOptions} opts - opts parameter.
 * @returns {Promise<string>} - TODO: describe return value.
 */
export async function ensureRegistration(
  opts: RegistrationOptions
): Promise<string> {
  const configPath = getMcpConfigPath();
  const current = await readMcpConfig(configPath);
  const headers =
    opts.includeAuthHeader && opts.token
      ? { Authorization: `Bearer ${opts.token}` }
      : undefined;
  const serverDef: Record<string, unknown> = headers
    ? { url: opts.url, type: "http", headers }
    : { url: opts.url, type: "http" };

  current.servers = current.servers || {};
  current.servers[opts.id] = serverDef;
  await writeMcpConfig(configPath, current);
  return configPath;
}

/**
 * Remove our server entry from mcp.json if present.
 *
 * @param {string} id - id parameter.
 * @returns {Promise<string>} - TODO: describe return value.
 */
export async function removeRegistration(id: string): Promise<string> {
  const configPath = getMcpConfigPath();
  const current = await readMcpConfig(configPath);
  if (
    current.servers &&
    Object.prototype.hasOwnProperty.call(current.servers, id)
  ) {
    delete (current.servers as Record<string, unknown>)[id];
    await writeMcpConfig(configPath, current);
  }
  return configPath;
}
