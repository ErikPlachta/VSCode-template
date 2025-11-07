/**
 * @fileoverview Template processor for replacing placeholders in category.json files during build.
 */

import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";

/**
 * Configuration structure for template replacements.
 */
interface TemplateConfig {
  /** Agent definitions with metadata for replacements. */
  agents: {
    definitions: Record<
      string,
      {
        name: string;
        description: string;
        label: string;
        displayName: string;
        className: string;
        capabilities: string[];
        responsibility: string;
      }
    >;
    templateReplacements: Record<string, string>;
  };
}

/**
 * Template processor for build-time placeholder replacement.
 */
export class TemplateProcessor {
  private config: TemplateConfig;

  /**
   * Creates a new template processor instance.
   *
   * @param {string} configPath - Path to the MCP configuration file.
   */
  constructor(configPath: string = "bin/mcp.config.json") {
    this.config = this.loadConfig(configPath);
  }

  /**
   * Processes all category.json files and replaces template placeholders.
   *
   * @param {string} dataDirectory - Directory containing category data.
   * @returns {Promise<void>} Promise that resolves when processing is complete.
   */
  async processTemplates(dataDirectory: string = "bin/data"): Promise<void> {
    const categoryFiles = await fg("*/category.json", {
      cwd: dataDirectory,
      absolute: true,
    });

    for (const filePath of categoryFiles) {
      await this.processFile(filePath);
    }

    console.log(`✅ Processed ${categoryFiles.length} category templates`);
  }

  /**
   * Processes a single category.json file.
   *
   * @param {string} filePath - Path to the category file.
   * @returns {Promise<void>} Promise that resolves when file is processed.
   */
  private async processFile(filePath: string): Promise<void> {
    try {
      const content = await fs.promises.readFile(filePath, "utf-8");
      let processedContent = content;

      // Apply template replacements
      for (const [placeholder, templatePath] of Object.entries(
        this.config.agents.templateReplacements
      )) {
        const replacement = this.resolveTemplateValue(templatePath);
        processedContent = processedContent.replace(
          new RegExp(placeholder, "g"),
          replacement
        );
      }

      // Only write if content changed
      if (processedContent !== content) {
        await fs.promises.writeFile(filePath, processedContent, "utf-8");
        console.log(
          `📝 Updated templates in: ${path.relative(process.cwd(), filePath)}`
        );
      }
    } catch (error) {
      console.error(`❌ Failed to process ${filePath}:`, error);
      throw error;
    }
  }

  /**
   * Resolves a template path to its actual value.
   *
   * @param {string} templatePath - Template path like "{{agents.definitions.dataAgent.label}}".
   * @returns {string} Resolved value.
   */
  private resolveTemplateValue(templatePath: string): string {
    // Remove template brackets
    const path = templatePath.replace(/^\{\{|\}\}$/g, "");
    const pathParts = path.split(".");

    // Navigate the config object
    let value: any = this.config;
    for (const part of pathParts) {
      if (value && typeof value === "object" && part in value) {
        value = value[part];
      } else {
        console.warn(`⚠️  Template path not found: ${path}`);
        return templatePath; // Return original if path not found
      }
    }

    return typeof value === "string" ? value : templatePath;
  }

  /**
   * Loads the MCP configuration file.
   *
   * @param {string} configPath - Path to the configuration file.
   * @returns {TemplateConfig} Loaded configuration.
   */
  private loadConfig(configPath: string): TemplateConfig {
    try {
      const configContent = fs.readFileSync(path.resolve(configPath), "utf-8");
      return JSON.parse(configContent) as TemplateConfig;
    } catch (error) {
      throw new Error(
        `Failed to load configuration from ${configPath}: ${error}`
      );
    }
  }

  /**
   * Validates template configuration for completeness.
   *
   * @returns {boolean} True if configuration is valid.
   */
  validateConfig(): boolean {
    const requiredAgents = [
      "orchestrator",
      "relevantDataManager",
      "databaseAgent",
      "dataAgent",
      "clarificationAgent",
    ];
    const definedAgents = Object.keys(this.config.agents.definitions);

    for (const agent of requiredAgents) {
      if (!definedAgents.includes(agent)) {
        console.error(`❌ Missing agent definition: ${agent}`);
        return false;
      }

      const definition = this.config.agents.definitions[agent];
      const requiredFields = [
        "name",
        "description",
        "label",
        "displayName",
        "className",
      ];

      for (const field of requiredFields) {
        if (!definition[field as keyof typeof definition]) {
          console.error(
            `❌ Missing field '${field}' in agent definition: ${agent}`
          );
          return false;
        }
      }
    }

    console.log("✅ Template configuration is valid");
    return true;
  }

  /**
   * Generates a report of available template variables.
   *
   * @returns {string} Markdown report of template variables.
   */
  generateTemplateReport(): string {
    const lines: string[] = [];

    lines.push("# Template Variables Report");
    lines.push("");
    lines.push("## Agent Definitions");
    lines.push("");
    lines.push("| Agent | Label | Display Name | Description |");
    lines.push("|-------|-------|--------------|-------------|");

    for (const [key, definition] of Object.entries(
      this.config.agents.definitions
    )) {
      lines.push(
        `| ${key} | ${definition.label} | ${definition.displayName} | ${definition.description} |`
      );
    }

    lines.push("");
    lines.push("## Template Replacements");
    lines.push("");
    lines.push("| Placeholder | Resolves To | Current Value |");
    lines.push("|-------------|-------------|---------------|");

    for (const [placeholder, templatePath] of Object.entries(
      this.config.agents.templateReplacements
    )) {
      const resolvedValue = this.resolveTemplateValue(templatePath);
      lines.push(
        `| \`${placeholder}\` | \`${templatePath}\` | ${resolvedValue} |`
      );
    }

    return lines.join("\n");
  }
}

/**
 * Main execution function for the template processor.
 *
 * @returns {Promise<void>} Promise that resolves when processing is complete.
 */
async function main(): Promise<void> {
  try {
    const processor = new TemplateProcessor();

    // Validate configuration first
    if (!processor.validateConfig()) {
      process.exit(1);
    }

    // Process templates
    await processor.processTemplates();

    // Generate report
    const report = processor.generateTemplateReport();
    await fs.promises.writeFile("docs/template-variables.md", report, "utf-8");
    console.log(
      "📊 Generated template variables report: docs/template-variables.md"
    );
  } catch (error) {
    console.error("❌ Template processing failed:", error);
    process.exit(1);
  }
}

// Execute if called directly
if (require.main === module) {
  void main();
}
