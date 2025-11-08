/**
 * @fileoverview Template processor for replacing placeholders in category.json files during build.
 */

import fs from "node:fs";
import path from "node:path";
import fg from "fast-glob";

interface TemplateConfig {
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

export class TemplateProcessor {
  private config: TemplateConfig;

  constructor(configPath: string = "src/mcp.config.json") {
    this.config = this.loadConfig(configPath);
  }

  async processTemplates(
    dataDirectory: string = "src/businessData"
  ): Promise<void> {
    const categoryFiles = await fg("*/category.json", {
      cwd: dataDirectory,
      absolute: true,
    });
    for (const filePath of categoryFiles) {
      await this.processFile(filePath);
    }
    console.log(`✅ Processed ${categoryFiles.length} category templates`);
  }

  private async processFile(filePath: string): Promise<void> {
    const content = await fs.promises.readFile(filePath, "utf-8");
    let processedContent = content;
    for (const [placeholder, templatePath] of Object.entries(
      this.config.agents.templateReplacements
    )) {
      const replacement = this.resolveTemplateValue(templatePath);
      processedContent = processedContent.replace(
        new RegExp(placeholder, "g"),
        replacement
      );
    }
    if (processedContent !== content) {
      await fs.promises.writeFile(filePath, processedContent, "utf-8");
      console.log(
        `📝 Updated templates in: ${path.relative(process.cwd(), filePath)}`
      );
    }
  }

  private resolveTemplateValue(templatePath: string): string {
    const p = templatePath.replace(/^\{\{|\}\}$/g, "");
    const parts = p.split(".");
    let value: any = this.config;
    for (const part of parts) {
      if (value && typeof value === "object" && part in value) {
        value = value[part];
      } else {
        console.warn(`⚠️  Template path not found: ${p}`);
        return templatePath;
      }
    }
    return typeof value === "string" ? value : templatePath;
  }

  private loadConfig(configPath: string): TemplateConfig {
    const configContent = fs.readFileSync(path.resolve(configPath), "utf-8");
    return JSON.parse(configContent) as TemplateConfig;
  }

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
      ] as const;
      for (const field of requiredFields) {
        if (!definition[field]) {
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

  generateTemplateReport(): string {
    const lines: string[] = [];
    lines.push(
      "# Template Variables Report",
      "",
      "## Agent Definitions",
      "",
      "| Agent | Label | Display Name | Description |",
      "|-------|-------|--------------|-------------|"
    );
    for (const [key, definition] of Object.entries(
      this.config.agents.definitions
    )) {
      lines.push(
        `| ${key} | ${definition.label} | ${definition.displayName} | ${definition.description} |`
      );
    }
    lines.push(
      "",
      "## Template Replacements",
      "",
      "| Placeholder | Resolves To | Current Value |",
      "|-------------|-------------|---------------|"
    );
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

async function main(): Promise<void> {
  const processor = new TemplateProcessor();
  if (!processor.validateConfig()) process.exit(1);
  await processor.processTemplates();
  const report = processor.generateTemplateReport();
  await fs.promises.writeFile("docs/template-variables.md", report, "utf-8");
  console.log(
    "📊 Generated template variables report: docs/template-variables.md"
  );
}

if (require.main === module) {
  void main();
}
