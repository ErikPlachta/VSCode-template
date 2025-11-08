/**
 * @packageDocumentation Repository Health Agent and CLI runner.
 *
 * Consolidates linting, JSON schema validation, and Markdown governance checks.
 * Provides a class API for programmatic use and a CLI entrypoint when executed directly.
 */
import path from "node:path";
import process from "node:process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { ESLint } from "eslint";
import Ajv, { ErrorObject } from "ajv";
import Ajv2020 from "ajv/dist/2020";
import addFormats from "ajv-formats";
import fg from "fast-glob";
import matter from "gray-matter";
import { loadApplicationConfig } from "../shared/configurationLoader";

/**
 * Configuration contract for the repository health agent.
 */
export interface AgentConfig {
  readonly typescript: { readonly include: readonly string[] };
  readonly jsonSchemas: ReadonlyArray<{
    readonly pattern: string;
    readonly schema: string;
    readonly description: string;
  }>;
  readonly markdown: {
    readonly include: readonly string[];
    readonly exclude?: readonly string[];
    readonly requiredFrontMatter: readonly string[];
    readonly requiredSections: readonly string[];
  };
  readonly report: { readonly output: string };
}

/**
 * Result of a single compliance check.
 */
export interface CheckResult {
  readonly name: string;
  readonly passed: boolean;
  readonly messages: readonly string[];
}

/**
 * Aggregate report describing every compliance check outcome.
 */
export interface HealthReport {
  readonly generatedAt: string;
  readonly passed: boolean;
  readonly checks: readonly CheckResult[];
}

interface MarkdownDiagnostic {
  readonly file: string;
  readonly errors: string[];
}

/**
 * Orchestrates linting, schema validation, and documentation audits.
 */
export class RepositoryHealthAgent {
  private readonly baseDir: string;
  private readonly config: AgentConfig;
  private readonly ajv: Ajv;

    /**
   * Create a new health agent using the provided configuration.
   *
   * @param {string} baseDir - baseDir parameter.
   * @param {AgentConfig} config - config parameter.
   * @returns {unknown} - TODO: describe return value.
   */
public constructor(baseDir: string, config: AgentConfig) {
    this.baseDir = baseDir;
    this.config = config;
    this.ajv = new Ajv2020({
      allErrors: true,
      strict: true,
      strictRequired: false,
      allowUnionTypes: true,
    });
    addFormats(this.ajv);
  }

    /**
 * Load configuration from typed application config, falling back to legacy JSON.
 *
 * @param {string} configPath - configPath parameter.
 * @returns {Promise<AgentConfig>} - TODO: describe return value.
 */
public static async loadConfig(configPath: string): Promise<AgentConfig> {
    try {
      const app = await loadApplicationConfig();
      return {
        typescript: app.typescript,
        jsonSchemas: app.jsonSchemas,
        markdown: app.markdown,
        report: app.report,
      } as AgentConfig;
    } catch {
      const absolutePath: string = path.resolve(process.cwd(), configPath);
      const rawContent: string = await readFile(absolutePath, "utf8");
      console.warn(
        `[health-check] Deprecated JSON configuration load from ${configPath}. Migrate to application.config.ts`
      );
      return JSON.parse(rawContent) as AgentConfig;
    }
  }

    /**
 * Create an agent instance by reading the default configuration file or TS config.
 *
 * @param {string} configPath - configPath parameter.
 * @returns {Promise<RepositoryHealthAgent>} - TODO: describe return value.
 */
public static async createFromDisk(
    configPath: string = "src/mcp.config.json"
  ): Promise<RepositoryHealthAgent> {
    const config: AgentConfig = await RepositoryHealthAgent.loadConfig(
      configPath
    );
    return new RepositoryHealthAgent(process.cwd(), config);
  }

    /**
 * Create an agent using an already materialized AgentConfig.
 *
 * @param {AgentConfig} config - config parameter.
 * @returns {RepositoryHealthAgent} - TODO: describe return value.
 */
public static createFromConfig(config: AgentConfig): RepositoryHealthAgent {
    return new RepositoryHealthAgent(process.cwd(), config);
  }

    /**
 * Execute every configured check and return a comprehensive report.
 *
 * @returns {Promise<HealthReport>} - TODO: describe return value.
 */
public async runAllChecks(): Promise<HealthReport> {
    const checks: CheckResult[] = [];
    checks.push(await this.runTypescriptLint());
    checks.push(await this.validateJsonSchemas());
    checks.push(await this.validateMarkdownDocuments());
    const passed: boolean = checks.every((c) => c.passed);
    return { generatedAt: new Date().toISOString(), passed, checks };
  }

    /**
 * Execute ESLint using project settings to ensure documentation coverage.
 *
 * @returns {Promise<CheckResult>} - TODO: describe return value.
 */
public async runTypescriptLint(): Promise<CheckResult> {
    const eslint: ESLint = new ESLint({ cwd: this.baseDir });
    const results: ESLint.LintResult[] = await eslint.lintFiles([
      ...this.config.typescript.include,
    ]);
    const formatter = await eslint.loadFormatter("stylish");
    const resultText: string = await formatter.format(results);
    const errorCount: number = results.reduce(
      (acc, r) => acc + r.errorCount + r.fatalErrorCount,
      0
    );
    return {
      name: "TypeScript ESLint",
      passed: errorCount === 0,
      messages:
        errorCount === 0
          ? ["All TypeScript files contain required documentation."]
          : [resultText],
    };
  }

    /**
 * Validate JSON artifacts against defined schemas.
 *
 * @returns {Promise<CheckResult>} - TODO: describe return value.
 */
public async validateJsonSchemas(): Promise<CheckResult> {
    const findings: string[] = [];
    for (const rule of this.config.jsonSchemas) {
      const files: string[] = await fg(rule.pattern, {
        cwd: this.baseDir,
        absolute: true,
      });
      if (files.length === 0) {
        findings.push(`No files matched pattern ${rule.pattern}.`);
        continue;
      }
      const schemaPath: string = path.resolve(this.baseDir, rule.schema);
      const schemaContent: string = await readFile(schemaPath, "utf8");
      const validate = this.ajv.compile(JSON.parse(schemaContent));
      for (const file of files) {
        const fileContent: string = await readFile(file, "utf8");
        const data = JSON.parse(fileContent);
        const valid: boolean = validate(data) as boolean;
        if (!valid) {
          const relativePath: string = path.relative(this.baseDir, file);
          const errorMessages: string = this.formatAjvErrors(
            validate.errors ?? []
          );
          findings.push(`${relativePath}: ${errorMessages}`);
        }
      }
    }
    return {
      name: "JSON Schema Validation",
      passed: findings.length === 0,
      messages:
        findings.length === 0
          ? ["All JSON files satisfy their schemas."]
          : findings,
    };
  }

    /**
 * Validate Markdown documents for required metadata and content sections.
 *
 * @returns {Promise<CheckResult>} - TODO: describe return value.
 */
public async validateMarkdownDocuments(): Promise<CheckResult> {
    const include: string[] = [...this.config.markdown.include];
    const ignore: string[] = this.config.markdown.exclude
      ? [...this.config.markdown.exclude]
      : [];
    const files: string[] = await fg(include, {
      cwd: this.baseDir,
      absolute: true,
      ignore,
    });
    const diagnostics: MarkdownDiagnostic[] = [];
    for (const file of files) {
      const relativePath: string = path.relative(this.baseDir, file);
      const errors: string[] = [];
      const raw: string = await readFile(file, "utf8");
      const parsed = matter(raw);
      for (const field of this.config.markdown.requiredFrontMatter) {
        if (parsed.data[field] === undefined) {
          errors.push(`Missing front matter field \`${field}\`.`);
        }
      }
      for (const section of this.config.markdown.requiredSections) {
        if (!raw.includes(section)) {
          errors.push(`Missing required section heading "${section}".`);
        }
      }
      if (errors.length > 0) {
        diagnostics.push({ file: relativePath, errors });
      }
    }
    const messages: string[] = diagnostics.map((d) => {
      const joined = d.errors.join("; ");
      return `${d.file}: ${joined}`;
    });
    return {
      name: "Markdown Metadata",
      passed: messages.length === 0,
      messages:
        messages.length === 0
          ? ["All Markdown documents include the mandated metadata."]
          : messages,
    };
  }

    /**
 * Persist a markdown report summarizing the check outcomes.
 *
 * @param {HealthReport} report - report parameter.
 * @returns {Promise<void>} - TODO: describe return value.
 */
public async writeReport(report: HealthReport): Promise<void> {
    const outputPath: string = path.resolve(
      this.baseDir,
      this.config.report.output
    );
    const outputDir: string = path.dirname(outputPath);
    await mkdir(outputDir, { recursive: true });
    const lines: string[] = [
      `---`,
      `title: Repository Compliance Health Report`,
      `summary: Automated validation status for documentation, schemas, and TypeScript types.`,
      `roles: ['quality-assurance', 'platform-engineering']`,
      `associations: ['repository-health-agent']`,
      `hierarchy: ['governance', 'quality', 'health-report']`,
      `generatedAt: ${report.generatedAt}`,
      `---`,
      "",
      `# Repository Compliance Health Report`,
      "",
      `## Summary`,
      "",
      `- Generated at: ${report.generatedAt}`,
      `- Overall status: ${report.passed ? "PASSED" : "FAILED"}`,
      "",
      `## Responsibilities`,
      "",
      `- Execute TypeScript linting to enforce doc coverage.`,
      `- Validate JSON schemas to maintain data integrity.`,
      `- Audit Markdown metadata for hierarchical governance.`,
      "",
      `## Inputs`,
      "",
      `- application.config.ts (preferred) or legacy mcp.config.json for configuration directives.`,
      `- JSON Schemas under the schemas directory.`,
      `- Repository TypeScript and Markdown sources.`,
      "",
      `## Outputs`,
      "",
      `- Compliance status for each enforcement area.`,
      `- Aggregated diagnostics for failing artifacts.`,
      `- Markdown report archived for auditability.`,
      "",
      `## Error Handling`,
      "",
      `- Exits with non-zero status when any check fails.`,
      `- Surfaces Ajv and ESLint diagnostics verbosely.`,
      `- Guides maintainers to remediation documentation.`,
      "",
      `## Examples`,
      "",
      `- npm run lint to enforce doc blocks prior to commit.`,
      `- npm run lint:json to vet dataset updates.`,
      `- npm run lint:docs to confirm metadata completeness.`,
      "",
      `## Check Results`,
    ];
    for (const check of report.checks) {
      lines.push(
        "",
        `### ${check.name}`,
        "",
        `- Status: ${check.passed ? "PASSED" : "FAILED"}`
      );
      if (check.messages.length > 0) {
        lines.push("", "#### Messages");
        for (const message of check.messages) {
          lines.push(`- ${message}`);
        }
      }
    }
    lines.push(
      "",
      "## Maintenance",
      "",
      "- Review failing checks before merging changes."
    );
    await writeFile(outputPath, `${lines.join("\n")}\n`, "utf8");
  }

    /**
 * Convert Ajv errors into a readable string.
 *
 * @param {ErrorObject[]} errors - errors parameter.
 * @returns {string} - TODO: describe return value.
 */
private formatAjvErrors(errors: ErrorObject[]): string {
    if (errors.length === 0) {
      return "Unknown schema validation error.";
    }
    return errors
      .map((error: ErrorObject) => {
        const instancePath: string = error.instancePath || "(root)";
        return `${instancePath} ${error.message ?? "unknown issue"}`;
      })
      .join("; ");
  }
}

/**
 * CLI-friendly runner that executes all checks and writes the report.
 *
 * @returns {Promise<void>} - TODO: describe return value.
 */
export async function runHealthCheck(): Promise<void> {
  const agent: RepositoryHealthAgent =
    await RepositoryHealthAgent.createFromDisk();
  const report = await agent.runAllChecks();
  for (const check of report.checks) {
    const status: string = check.passed ? "PASSED" : "FAILED";
    console.log(`[${status}] ${check.name}`);
    for (const message of check.messages) {
      console.log(`  - ${message}`);
    }
  }
  await agent.writeReport(report);
  if (!report.passed) {
    process.exitCode = 1;
  }
}

// CLI entrypoint
if (require.main === module) {
  void runHealthCheck().catch((error: unknown) => {
    console.error(
      "Repository health check encountered an unrecoverable error.",
      error
    );
    process.exitCode = 1;
  });
}
