/**
 * @file Script to add missing @file tags to TypeScript files.
 */

import * as fs from "fs";
import * as path from "path";

/**
 * File mappings for specific @file descriptions.
 */
const fileDescriptions: Record<string, string> = {
  "src/agent/relevantDataManagerAgent.ts":
    "Agent for managing category metadata and data relationships",
  "src/extension/index.ts":
    "VS Code extension entry point and chat participant registration",
  "src/extension/mcpCache.ts":
    "MCP cache management and invocation logging utilities",
  "src/extension/mcpProvider.ts":
    "MCP provider for VS Code extension integration",
  "src/extension/mcpRegistration.ts":
    "MCP server registration and configuration utilities",
  "src/extension/mcpSync.ts":
    "MCP synchronization and data management utilities",
  "src/extension/schemaPrompt.ts": "Schema-based prompt generation utilities",
  "src/server/embedded.ts": "Embedded MCP server startup and configuration",
  "src/shared/agentAnalytics.ts": "Agent usage analytics and tracking system",
  "src/shared/analyticsDashboard.ts":
    "Analytics dashboard generation and reporting",
  "src/shared/analyticsIntegration.ts":
    "Analytics integration decorators and utilities",
  "src/shared/configurationLoader.ts":
    "Application configuration loading and validation",
  "src/types/applicationConfig.ts":
    "Application configuration type definitions",
  "src/types/external.d.ts": "External library type declarations",
  "src/types/vscode-chat.d.ts": "VS Code chat API type declarations",
};

/**
 * Generates a default @file description from file path.
 * @param filePath - The file path to generate description for.
 * @returns Generated file description.
 */
function generateFileDescription(filePath: string): string {
  const relativePath = filePath.replace(/\\/g, "/");

  // Use specific description if available
  if (fileDescriptions[relativePath]) {
    return fileDescriptions[relativePath];
  }

  // Generate from file name and directory
  const fileName = path.basename(filePath, ".ts");
  const dirName = path.dirname(filePath).split(path.sep).pop();

  // Convert camelCase to words
  const words = fileName
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toLowerCase();

  return `${words} implementation for ${dirName} module`;
}

/**
 * Adds @file tag to a file if missing.
 * @param filePath - Path to the file to process.
 * @returns True if file was modified.
 */
function addFileTagIfMissing(filePath: string): boolean {
  const content = fs.readFileSync(filePath, "utf8");

  // Check if already has @file tag
  if (content.includes("@file")) {
    return false;
  }

  const description = generateFileDescription(filePath);
  const fileTag = `/**\n * @file ${description}\n */\n\n`;

  let newContent: string;

  // If file starts with existing JSDoc comment, add @file to it
  const existingCommentMatch = content.match(/^(\/\*\*[\s\S]*?\*\/)/);
  if (existingCommentMatch) {
    const comment = existingCommentMatch[1];
    // Add @file as the first line after /**
    const modifiedComment = comment.replace(
      /^(\/\*\*)\s*\n/,
      `$1\n * @file ${description}\n`
    );
    newContent = content.replace(comment, modifiedComment);
  } else {
    // Add @file tag at the top
    newContent = fileTag + content;
  }

  fs.writeFileSync(filePath, newContent, "utf8");
  return true;
}

/**
 * Main function to add @file tags to files.
 */
async function main(): Promise<void> {
  const filesToFix = [
    "src/agent/relevantDataManagerAgent.ts",
    "src/extension/index.ts",
    "src/extension/mcpCache.ts",
    "src/extension/mcpProvider.ts",
    "src/extension/mcpRegistration.ts",
    "src/extension/mcpSync.ts",
    "src/extension/schemaPrompt.ts",
    "src/server/embedded.ts",
    "src/shared/agentAnalytics.ts",
    "src/shared/analyticsDashboard.ts",
    "src/shared/analyticsIntegration.ts",
    "src/shared/configurationLoader.ts",
    "src/types/applicationConfig.ts",
    "src/types/external.d.ts",
    "src/types/vscode-chat.d.ts",
  ];

  let fixedCount = 0;

  for (const relativePath of filesToFix) {
    const fullPath = path.resolve(__dirname, "../../../", relativePath);

    if (!fs.existsSync(fullPath)) {
      console.log(`❌ File not found: ${relativePath}`);
      continue;
    }

    if (addFileTagIfMissing(fullPath)) {
      console.log(`✅ Added @file tag to: ${relativePath}`);
      fixedCount++;
    } else {
      console.log(`⏭️  @file tag already exists: ${relativePath}`);
    }
  }

  console.log(`\n✅ Added @file tags to ${fixedCount} files`);
}

if (require.main === module) {
  main().catch(console.error);
}
