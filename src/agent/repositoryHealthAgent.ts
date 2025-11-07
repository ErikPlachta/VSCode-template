/**
 * @file Enforced documentation and metadata compliance.
 *
 * All source files must provide comprehensive docblocks per project standards.
 */

import path from 'node:path';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { ESLint } from 'eslint';
import Ajv, { ErrorObject } from 'ajv';
import Ajv2020 from 'ajv/dist/2020';
import addFormats from 'ajv-formats';
import fg from 'fast-glob';
import matter from 'gray-matter';


/**
 * Configuration contract for the repository health agent.
 *
 * @public
 */
export interface AgentConfig {
  /**
   * TypeScript lint configuration.
   */
  readonly typescript: {
    /**
     * Glob patterns describing the TypeScript sources that must pass linting.
     */
    readonly include: readonly string[];
  };
  /**
   * Schema validations that must pass for JSON artifacts.
   */
  readonly jsonSchemas: ReadonlyArray<{
    /**
     * Glob pattern describing files that must conform to the schema.
     */
    readonly pattern: string;
    /**
     * Relative path to the schema document.
     */
    readonly schema: string;
    /**
     * Human readable summary for the schema validation.
     */
    readonly description: string;
  }>;
  /**
   * Markdown validation requirements.
   */
  readonly markdown: {
    /**
     * Include globs for Markdown documents.
     */
    readonly include: readonly string[];
    /**
     * Ignore globs for Markdown documents.
     */
    readonly exclude?: readonly string[];
    /**
     * Required front matter keys that must exist for every Markdown file.
     */
    readonly requiredFrontMatter: readonly string[];
    /**
     * Content sections that must exist in the document body.
     */
    readonly requiredSections: readonly string[];
  };
  /**
   * Report configuration describing where generated documentation is written.
   */
  readonly report: {
    /**
     * Output markdown file relative to the repository root.
     */
    readonly output: string;
  };
}

/**
 * Result of a single compliance check.
 */
export interface CheckResult {
  /**
   * Name describing the check.
   */
  readonly name: string;
  /**
   * Whether the check succeeded.
   */
  readonly passed: boolean;
  /**
   * Detailed findings for the check.
   */
  readonly messages: readonly string[];
}

/**
 * Aggregate report describing every compliance check outcome.
 */
export interface HealthReport {
  /**
   * ISO timestamp representing when the agent executed.
   */
  readonly generatedAt: string;
  /**
   * Overall pass/fail status.
   */
  readonly passed: boolean;
  /**
   * Individual check results.
   */
  readonly checks: readonly CheckResult[];
}

/**
 * Node for representing Markdown document diagnostics.
 */
interface MarkdownDiagnostic {
  /**
   * Markdown file being evaluated.
   */
  readonly file: string;
  /**
   * Error messages associated with the file.
   */
  readonly errors: string[];
}

/**
 * RepositoryHealthAgent orchestrates linting, schema validation, and documentation audits.
 *
 * @example
 * ```ts
 * const agent = await RepositoryHealthAgent.createFromDisk();
 * const report = await agent.runAllChecks();
 * await agent.writeReport(report);
 * ```
 */
export class RepositoryHealthAgent {
  private readonly baseDir: string;

  private readonly config: AgentConfig;

  private readonly ajv: Ajv;

  /**
   * Create a new health agent using the provided configuration.
   *
   * @param {string} baseDir - Repository root directory.
   * @param {AgentConfig} config - Parsed agent configuration contract.
   *
   * @example
   * ```ts
   * const config = await RepositoryHealthAgent.loadConfig('agent.config.json');
   * const agent = new RepositoryHealthAgent(process.cwd(), config);
   * ```
   */
  public constructor(baseDir: string, config: AgentConfig) {
    this.baseDir = baseDir;
    this.config = config;
    this.ajv = new Ajv2020({
      allErrors: true,
      strict: true,
      strictRequired: false,
      allowUnionTypes: true
    });
    addFormats(this.ajv);
  }

  /**
   * Load configuration from disk using the default location.
   *
   * @param {string} configPath - Relative path to the configuration file.
   * @returns {Promise<AgentConfig>} A parsed agent configuration object.
   * @throws {Error} When the configuration file cannot be parsed.
   *
   * @example
   * ```ts
   * const config = await RepositoryHealthAgent.loadConfig('agent.config.json');
   * ```
   */
  public static async loadConfig(configPath: string): Promise<AgentConfig> {
    const absolutePath: string = path.resolve(process.cwd(), configPath);
    const rawContent: string = await readFile(absolutePath, 'utf8');
    return JSON.parse(rawContent) as AgentConfig;
  }

  /**
   * Create an agent instance by reading the default configuration file.
   *
   * @param {string} [configPath] - Optional custom path to the configuration file.
   * @returns {Promise<RepositoryHealthAgent>} Instantiated repository health agent.
   * @throws {Error} When configuration loading fails.
   *
   * @example
   * ```ts
   * const agent = await RepositoryHealthAgent.createFromDisk();
   * ```
   */
  public static async createFromDisk(configPath: string = 'agent.config.json'): Promise<RepositoryHealthAgent> {
    const config: AgentConfig = await RepositoryHealthAgent.loadConfig(configPath);
    return new RepositoryHealthAgent(process.cwd(), config);
  }

  /**
   * Execute every configured check and return a comprehensive report.
   *
   * @returns {Promise<HealthReport>} Combined health report for lint, schema, and documentation enforcement.
   * @throws {Error} If an unexpected failure occurs during execution.
   *
   * @example
   * ```ts
   * const report = await agent.runAllChecks();
   * ```
   */
  public async runAllChecks(): Promise<HealthReport> {
    const checks: CheckResult[] = [];

    checks.push(await this.runTypescriptLint());
    checks.push(await this.validateJsonSchemas());
    checks.push(await this.validateMarkdownDocuments());

    const passed: boolean = checks.every((check: CheckResult) => check.passed);

    return {
      generatedAt: new Date().toISOString(),
      passed,
      checks
    };
  }

  /**
   * Execute ESLint using project settings to ensure documentation coverage.
   *
   * @returns {Promise<CheckResult>} Lint check result with aggregated error messages.
   * @throws {Error} When ESLint cannot be executed.
   *
   * @example
   * ```ts
   * const lintResult = await agent.runTypescriptLint();
   * ```
   */
  public async runTypescriptLint(): Promise<CheckResult> {
    const eslint: ESLint = new ESLint({
      cwd: this.baseDir,
      extensions: ['.ts']
    });
    const results: ESLint.LintResult[] = await eslint.lintFiles([
      ...this.config.typescript.include
    ]);
    const formatter = await eslint.loadFormatter('stylish');
    const resultText: string = await formatter.format(results);
    const errorCount: number = results.reduce(
      (accumulator: number, result: ESLint.LintResult) =>
        accumulator + result.errorCount + result.fatalErrorCount,
      0
    );

    return {
      name: 'TypeScript ESLint',
      passed: errorCount === 0,
      messages: errorCount === 0 ? ['All TypeScript files contain required documentation.'] : [resultText]
    };
  }

  /**
   * Validate JSON artifacts against defined schemas.
   *
   * @returns {Promise<CheckResult>} Check result capturing schema validation compliance.
   * @throws {Error} When schema compilation fails.
   *
   * @example
   * ```ts
   * const jsonResult = await agent.validateJsonSchemas();
   * ```
   */
  public async validateJsonSchemas(): Promise<CheckResult> {
    const findings: string[] = [];

    for (const rule of this.config.jsonSchemas) {
      const files: string[] = await fg(rule.pattern, { cwd: this.baseDir, absolute: true });
      if (files.length === 0) {
        findings.push(`No files matched pattern ${rule.pattern}.`);
        continue;
      }

      const schemaPath: string = path.resolve(this.baseDir, rule.schema);
      const schemaContent: string = await readFile(schemaPath, 'utf8');
      const validate = this.ajv.compile(JSON.parse(schemaContent));

      for (const file of files) {
        const fileContent: string = await readFile(file, 'utf8');
        const data = JSON.parse(fileContent);
        const valid: boolean = validate(data) as boolean;
        if (!valid) {
          const relativePath: string = path.relative(this.baseDir, file);
          const errorMessages: string = this.formatAjvErrors(validate.errors ?? []);
          findings.push(`${relativePath}: ${errorMessages}`);
        }
      }
    }

    return {
      name: 'JSON Schema Validation',
      passed: findings.length === 0,
      messages: findings.length === 0 ? ['All JSON files satisfy their schemas.'] : findings
    };
  }

  /**
   * Validate Markdown documents for required metadata and content sections.
   *
   * @returns {Promise<CheckResult>} Markdown compliance results with file specific diagnostics.
   * @throws {Error} When Markdown files cannot be read.
   *
   * @example
   * ```ts
   * const markdownResult = await agent.validateMarkdownDocuments();
   * ```
   */
  public async validateMarkdownDocuments(): Promise<CheckResult> {
    const include: string[] = [...this.config.markdown.include];
    const ignore: string[] = this.config.markdown.exclude ? [...this.config.markdown.exclude] : [];
    const files: string[] = await fg(include, { cwd: this.baseDir, absolute: true, ignore });
    const diagnostics: MarkdownDiagnostic[] = [];

    for (const file of files) {
      const relativePath: string = path.relative(this.baseDir, file);
      const errors: string[] = [];
      const raw: string = await readFile(file, 'utf8');
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

    const messages: string[] = diagnostics.map((diagnostic: MarkdownDiagnostic) => {
      const joined: string = diagnostic.errors.join('; ');
      return `${diagnostic.file}: ${joined}`;
    });

    return {
      name: 'Markdown Metadata',
      passed: messages.length === 0,
      messages: messages.length === 0 ? ['All Markdown documents include the mandated metadata.'] : messages
    };
  }

  /**
   * Persist a markdown report summarising the check outcomes.
   *
   * @param {HealthReport} report - Generated report to persist.
   * @returns {Promise<void>} Promise that resolves when the file has been written.
   * @throws {Error} When the report directory cannot be created.
   *
   * @example
   * ```ts
   * const report = await agent.runAllChecks();
   * await agent.writeReport(report);
   * ```
   */
  public async writeReport(report: HealthReport): Promise<void> {
    const outputPath: string = path.resolve(this.baseDir, this.config.report.output);
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
      '',
      `# Repository Compliance Health Report`,
      '',
      `## Summary`,
      '',
      `- Generated at: ${report.generatedAt}`,
      `- Overall status: ${report.passed ? 'PASSED' : 'FAILED'}`,
      '',
      `## Responsibilities`,
      '',
      `- Execute TypeScript linting to enforce doc coverage.`,
      `- Validate JSON schemas to maintain data integrity.`,
      `- Audit Markdown metadata for hierarchical governance.`,
      '',
      `## Inputs`,
      '',
      `- agent.config.json for configuration directives.`,
      `- JSON Schemas under the schemas directory.`,
      `- Repository TypeScript and Markdown sources.`,
      '',
      `## Outputs`,
      '',
      `- Compliance status for each enforcement area.`,
      `- Aggregated diagnostics for failing artefacts.`,
      `- Markdown report archived for auditability.`,
      '',
      `## Error Handling`,
      '',
      `- Exits with non-zero status when any check fails.`,
      `- Surfaces Ajv and ESLint diagnostics verbosely.`,
      `- Guides maintainers to remediation documentation.`,
      '',
      `## Examples`,
      '',
      `- npm run lint to enforce doc blocks prior to commit.`,
      `- npm run lint:json to vet dataset updates.`,
      `- npm run lint:docs to confirm metadata completeness.`,
      '',
      `## Check Results`
    ];

    for (const check of report.checks) {
      lines.push('', `### ${check.name}`, '', `- Status: ${check.passed ? 'PASSED' : 'FAILED'}`);
      if (check.messages.length > 0) {
        lines.push('', '#### Messages');
        for (const message of check.messages) {
          lines.push(`- ${message}`);
        }
      }
    }

    lines.push('', '## Maintenance', '', '- Review failing checks before merging changes.');

    await writeFile(outputPath, `${lines.join('\n')}\n`, 'utf8');
  }

  /**
   * Convert Ajv errors into a readable string.
   *
   * @param {ErrorObject[]} errors - Ajv validation errors.
   * @returns {string} A human readable error message.
   *
   * @example
   * ```ts
   * const message = agent.formatAjvErrors(errors);
   * ```
   */
  private formatAjvErrors(errors: ErrorObject[]): string {
    if (errors.length === 0) {
      return 'Unknown schema validation error.';
    }

    return errors
      .map((error: ErrorObject) => {
        const instancePath: string = error.instancePath || '(root)';
        return `${instancePath} ${error.message ?? 'unknown issue'}`;
      })
      .join('; ');
  }
}
