/**
 * @fileoverview Build script to dynamically configure package.json based on environment variables.
 */

import fs from "node:fs";
import path from "node:path";
import dotenv from "dotenv";

interface PackageConfig {
  name: string;
  displayName: string;
  description: string;
  publisher: string;
  chatParticipantId: string;
  chatParticipantName: string;
  serverRegisterId: string;
  defaultPort: number;
  autoRegister: boolean;
  includeAuthHeader: boolean;
}

function loadEnvironmentConfig(): PackageConfig {
  dotenv.config();
  const appName = process.env.APP_NAME || "mybusiness";
  const appDisplayName = process.env.APP_DISPLAY_NAME || "My Business";
  return {
    name: process.env.EXTENSION_NAME || `${appName}-mcp-extension`,
    displayName:
      process.env.EXTENSION_DISPLAY_NAME || `${appDisplayName} MCP Extension`,
    description:
      process.env.EXTENSION_DESCRIPTION ||
      "Auto-syncs MCP tools into VS Code Copilot Chat with full test suite and documentation.",
    publisher: process.env.EXTENSION_PUBLISHER || "myorg",
    chatParticipantId: process.env.MCP_CHAT_PARTICIPANT_ID || appName,
    chatParticipantName: process.env.MCP_CHAT_PARTICIPANT_NAME || appName,
    serverRegisterId: process.env.MCP_SERVER_ID || appName,
    defaultPort: parseInt(process.env.MCP_DEFAULT_PORT || "39200"),
    autoRegister: process.env.MCP_AUTO_REGISTER === "true",
    includeAuthHeader: process.env.MCP_INCLUDE_AUTH_HEADER === "true",
  };
}

async function updatePackageJson(config: PackageConfig): Promise<void> {
  const packagePath = path.join(process.cwd(), "package.json");
  const packageContent = await fs.promises.readFile(packagePath, "utf-8");
  const packageData = JSON.parse(packageContent);

  packageData.name = config.name;
  packageData.displayName = config.displayName;
  packageData.description = config.description;
  packageData.publisher = config.publisher;

  const commandPrefix = config.chatParticipantId.toLowerCase() + "MCP";
  packageData.activationEvents = [
    "onStartupFinished",
    `onCommand:${commandPrefix}.invokeTool`,
    `onCommand:${commandPrefix}.registerServer`,
    `onCommand:${commandPrefix}.unregisterServer`,
    `onChatParticipant:${
      config.chatParticipantId.charAt(0).toUpperCase() +
      config.chatParticipantId.slice(1)
    }MCP`,
  ];

  packageData.contributes.commands = [
    {
      command: `${commandPrefix}.invokeTool`,
      title: `${config.displayName}: Invoke Tool`,
    },
    {
      command: `${commandPrefix}.registerServer`,
      title: `${config.displayName}: Register MCP Server`,
    },
    {
      command: `${commandPrefix}.unregisterServer`,
      title: `${config.displayName}: Unregister MCP Server`,
    },
  ];

  packageData.contributes.chatParticipants = [
    {
      id:
        config.chatParticipantId.charAt(0).toUpperCase() +
        config.chatParticipantId.slice(1) +
        "MCP",
      name: config.chatParticipantName,
      description: `Access your business data including applications, departments, people, policies, and resources`,
      isSticky: true,
    },
  ];

  packageData.contributes.mcpServerDefinitionProviders = [
    {
      id: `${config.chatParticipantId}-local`,
      label: `${config.displayName} Embedded Server`,
    },
  ];

  const settingsPrefix = config.chatParticipantId.toLowerCase() + "MCP";
  packageData.contributes.configuration = {
    title: `${config.displayName} Settings`,
    properties: {
      [`${settingsPrefix}.serverUrl`]: {
        type: "string",
        default: "",
        description: "External MCP server URL (leave blank to use embedded).",
      },
      [`${settingsPrefix}.token`]: {
        type: "string",
        description: "Bearer token for MCP authentication.",
      },
      [`${settingsPrefix}.autoRegister`]: {
        type: "boolean",
        default: config.autoRegister,
        description:
          "Automatically register embedded server in global mcp.json.",
      },
      [`${settingsPrefix}.port`]: {
        type: "number",
        default: config.defaultPort,
        minimum: 1024,
        maximum: 65535,
        description: "Port for embedded HTTP JSON-RPC server.",
      },
      [`${settingsPrefix}.registerServerId`]: {
        type: "string",
        default: config.serverRegisterId,
        description: "Server id key used inside mcp.json servers object.",
      },
      [`${settingsPrefix}.includeAuthHeader`]: {
        type: "boolean",
        default: config.includeAuthHeader,
        description:
          "Include Authorization header metadata when registering HTTP server in mcp.json.",
      },
    },
  };

  await fs.promises.writeFile(
    packagePath,
    JSON.stringify(packageData, null, 2) + "\n",
    "utf-8"
  );
  console.log(
    `✅ Updated package.json with configuration for: ${config.displayName}`
  );
}

async function main(): Promise<void> {
  const config = loadEnvironmentConfig();
  await updatePackageJson(config);
}

if (require.main === module) {
  void main();
}
