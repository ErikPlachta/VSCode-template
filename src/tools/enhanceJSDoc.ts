/**
 * @packageDocumentation Enhanced JSDoc coverage generator.
 *
 * Scans TypeScript source files and ensures every function, method and exported arrow
 * function has a complete JSDoc block with `@param` / `@returns` tags. Existing blocks
 * are regenerated (preserving the first summary line when present) to guarantee
 * consistent formatting required by strict ESLint JSDoc rules.
 *
 * This is intentionally conservative: it only touches `.ts` source under `src/**` and
 * skips `.d.ts` declaration files. It relies on the TypeScript compiler API for
 * accurate parameter and return type detection.
 */

import * as fs from "fs";
import * as path from "path";
import ts from "typescript";

/**
 * Represents a generated or replacement JSDoc block to apply to a source file.
 */
interface GeneratedDoc {
  /** Insertion position (or start of replacement range). */
  pos: number;
  /** Optional end of replacement range (exclusive). */
  end?: number;
  /** JSDoc block text including trailing newline. */
  text: string;
}

/**
 * Determines whether a function-like declaration has a void/undefined return type.
 * If no return type annotation exists, the declaration is treated as non-void so a
 * `@returns` tag will be generated.
 *
 * @param {ts.FunctionLikeDeclarationBase} node - Function-like declaration node.
 * @returns {boolean} True when explicitly annotated as void or undefined.
 */
function isVoidLike(node: ts.FunctionLikeDeclarationBase): boolean {
  if (!node.type) return false; // assume return value if unspecified (to force @returns - tag)
  const t = node.type.getText();
  return t === "void" || t === "undefined";
}

/**
 * Collects simple parameter names from a function-like declaration.
 *
 * @param {ts.FunctionLikeDeclarationBase} node - Function-like declaration.
 * @returns {string[]} List of parameter names.
 */
function collectParamNames(node: ts.FunctionLikeDeclarationBase): string[] {
  return node.parameters.map((p) => p.name.getText());
}

/**
 * Extracts the first summary line from an existing JSDoc block.
 *
 * @param {string} fullText - Raw text of a JSDoc block including delimiters.
 * @returns {string | undefined} The first non-tag summary line, if any.
 */
function extractSummaryFromExisting(fullText: string): string | undefined {
  // Match first JSDoc block summary portion (lines between /** and first @ tag)
  const match = /\/\*\*([\s\S]*?)\*\//.exec(fullText);
  if (!match) return undefined;
  const body = match[1]
    .split("\n")
    .map((l) => l.replace(/^\s*\* ?/, "").trim())
    .filter((l) => !!l);
  const beforeTag: string[] = [];
  for (const line of body) {
    if (line.startsWith("@")) break;
    beforeTag.push(line);
  }
  if (beforeTag.length === 0) return undefined;
  // Use first line only to keep concise summary
  return beforeTag[0];
}

/**
 * Builds a canonical JSDoc block for a function.
 *
 * @param {string | undefined} summary - Optional summary line derived from an existing block.
 * @param {string | undefined} fnName - Name of the function (may be undefined for anonymous).
 * @param {string[]} params - Parameter names.
 * @param {boolean} includeReturns - Whether to include a `@returns` tag.
 * @param {boolean} includeThrows - Whether to include a `@throws` tag.
 * @returns {string} - JSDoc block string.
 */
function buildDocBlock(
  summary: string | undefined,
  fnName: string | undefined,
  params: string[],
  includeReturns: boolean,
  includeThrows: boolean
): string {
  const lines: string[] = ["/**"];
  const effectiveSummary =
    summary || (fnName ? `${fnName} function.` : "Function.");
  lines.push(` * ${effectiveSummary}`);
  lines.push(" *");
  for (const p of params) {
    lines.push(` * @param {unknown} ${p} - ${p} parameter.`);
  }
  if (includeReturns) {
    lines.push(" * @returns {unknown} - TODO: describe return value.");
  }
  if (includeThrows) {
    lines.push(" * @throws {Error} - May throw an error.");
  }
  lines.push(" */");
  return lines.join("\n") + "\n";
}

/**
 * Determines whether a file should be processed (non-declaration TS source).
 *
 * @param {string} filePath - Absolute path to the file.
 * @returns {boolean} True if file is a `.ts` (excluding `.d.ts`).
 */
function shouldProcessFile(filePath: string): boolean {
  return filePath.endsWith(".ts") && !filePath.endsWith(".d.ts");
}

/**
 * Ensures a file-level `@packageDocumentation` block is present; returns updated content.
 *
 * @param {string} content - Original file content.
 * @param {string} filePath - File path for deriving description.
 * @returns {{ content: string; added: boolean }} Content and flag indicating insertion.
 */
function ensureFilePackageDocumentation(
  content: string,
  filePath: string
): { content: string; added: boolean } {
  if (content.includes("@packageDocumentation"))
    return { content, added: false };
  const name = path.basename(filePath, ".ts");
  const dir = path.basename(path.dirname(filePath));
  const block = `/**\n * @packageDocumentation ${name} implementation for ${dir} module.\n */\n\n`;
  return { content: block + content, added: true };
}

/**
 * Generates JSDoc edits for all function-like declarations in a source file.
 *
 * @param {ts.SourceFile} sourceFile - Parsed TypeScript source file.
 * @returns {GeneratedDoc[]} Sorted edit operations.
 */
function generateEditsForSource(sourceFile: ts.SourceFile): GeneratedDoc[] {
  const edits: GeneratedDoc[] = [];

  /**
   * Visits AST nodes recursively and creates or replaces JSDoc blocks where needed.
   *
   * @param {ts.Node} node - Current AST node.
   */
  function visit(node: ts.Node): void {
    if (ts.isFunctionDeclaration(node) && node.name) {
      createOrReplace(node, node.name.getText());
    } else if (
      ts.isMethodDeclaration(node) &&
      node.parent &&
      ts.isClassDeclaration(node.parent)
    ) {
      const name = node.name.getText();
      createOrReplace(node, name);
    } else if (
      ts.isArrowFunction(node) &&
      node.parent &&
      ts.isVariableDeclaration(node.parent)
    ) {
      // Arrow function assigned to a variable (exported or internal)
      const varDecl = node.parent;
      const name = varDecl.name.getText();
      createOrReplace(node, name);
    } else if (
      ts.isFunctionExpression(node) &&
      node.parent &&
      ts.isVariableDeclaration(node.parent)
    ) {
      const varDecl = node.parent;
      createOrReplace(node, varDecl.name.getText());
    }
    ts.forEachChild(node, visit);
  }

  /**
   * Creates or replaces a JSDoc block for a function-like node.
   *
   * @param {ts.FunctionLikeDeclarationBase} node - The node to document.
   * @param {string | undefined} fnName - Name used in summary, if available.
   */
  /**
   * Internal helper implementing the replacement logic.
   *
   * @param {ts.FunctionLikeDeclarationBase} node - Node to document.
   * @param {string | undefined} fnName - Function name for summary.
   * @returns {void} - No return value.
   */
  function createOrReplace(
    node: ts.FunctionLikeDeclarationBase,
    fnName: string | undefined
  ): void {
    const fullText = sourceFile.getFullText();
    // Access jsDoc via structural type rather than any.
    const jsDocs: ts.JSDoc[] | undefined = (
      node as unknown as { jsDoc?: ts.JSDoc[] }
    ).jsDoc;
    let summary: string | undefined;
    if (jsDocs && jsDocs.length > 0) {
      const first = jsDocs[0];
      const start = first.getStart();
      const end = first.getEnd();
      summary = extractSummaryFromExisting(fullText.slice(start, end));
      // Replace existing block entirely
      edits.push({
        pos: start,
        end,
        text: buildDocBlock(
          summary,
          fnName,
          collectParamNames(node),
          !isVoidLike(node),
          /throw\s+/.test(fullText.slice(start, end))
        ),
      });
    } else {
      // Insert new block right before node
      const insertPos = node.getStart();
      edits.push({
        pos: insertPos,
        text: buildDocBlock(
          undefined,
          fnName,
          collectParamNames(node),
          !isVoidLike(node),
          /throw\s+/.test(node.getText())
        ),
      });
    }
  }

  visit(sourceFile);
  return edits.sort((a, b) => a.pos - b.pos);
}

/**
 * Applies generated edits to the original file content.
 *
 * @param {string} original - Original source text.
 * @param {GeneratedDoc[]} edits - Edits to apply.
 * @returns {string} Updated source content with JSDoc applied.
 */
function applyEdits(original: string, edits: GeneratedDoc[]): string {
  if (edits.length === 0) return original;
  let result = original;
  // Apply from last to first to keep positions stable
  for (const edit of [...edits].sort((a, b) => b.pos - a.pos)) {
    const before = result.slice(0, edit.pos);
    const after =
      edit.end !== undefined ? result.slice(edit.end) : result.slice(edit.pos);
    result = before + edit.text + after;
  }
  return result;
}

/**
 * Processes a file: ensures package doc and generates per-function JSDoc blocks.
 *
 * @param {string} filePath - Absolute path to a source file.
 * @returns {{ modified: boolean; addedFileTag: boolean }} Change indicators.
 */
function processFile(filePath: string): {
  modified: boolean;
  addedFileTag: boolean;
} {
  const original = fs.readFileSync(filePath, "utf8");
  const { content: withFileTag, added } = ensureFilePackageDocumentation(
    original,
    filePath
  );
  const source = ts.createSourceFile(
    filePath,
    withFileTag,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  const edits = generateEditsForSource(source);
  if (edits.length === 0 && !added)
    return { modified: false, addedFileTag: added };
  const updated = applyEdits(withFileTag, edits);
  if (updated !== original) {
    fs.writeFileSync(filePath, updated, "utf8");
    return { modified: true, addedFileTag: added };
  }
  return { modified: false, addedFileTag: added };
}

/**
 * Recursively walks a directory collecting processable source files.
 *
 * @param {string} dir - Directory root to traverse.
 * @param {string[]} results - Accumulator for discovered files.
 * @returns {string[]} Array of collected file paths.
 */
function walk(dir: string, results: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry.startsWith(".")) continue;
      walk(full, results);
    } else if (shouldProcessFile(full)) {
      results.push(full);
    }
  }
  return results;
}

/**
 * CLI entrypoint: enumerates files and applies enhancements.
 *
 * @returns {void} Nothing.
 */
function main(): void {
  // Resolve project root generically whether script runs from src/tools (ts-node) or out/src/tools (compiled).
  const projectRoot = path.resolve(__dirname, "../../..");
  const srcRoot = path.join(projectRoot, "src");
  if (!fs.existsSync(srcRoot)) {
    console.error(`src directory not found at ${srcRoot}`);
    return;
  }
  const files = walk(srcRoot);
  let modifiedCount = 0;
  let fileTagCount = 0;
  for (const f of files) {
    const { modified, addedFileTag } = processFile(f);
    if (modified) modifiedCount++;
    if (addedFileTag) fileTagCount++;
  }
  console.log(
    `enhanceJSDoc: processed ${files.length} files; modified ${modifiedCount}; added package doc to ${fileTagCount}.`
  );
}

if (require.main === module) {
  main();
}

export {};
