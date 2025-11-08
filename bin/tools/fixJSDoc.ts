/**
 * @packageDocumentation Automated JSDoc fixer for common violations.
 */

import * as fs from "fs";
import * as path from "path";

interface JSDocFix {
  pattern: RegExp;
  replacement: string;
  description: string;
}

const jsdocFixes: JSDocFix[] = [
  // Normalize @param descriptions to include a hyphen between the name and description
  {
    pattern: /(@param\s+\{[^}]+\}\s*\[[^\]]+\]\s*)([^-\n])/g,
    replacement: "$1- $2",
    description: "Add hyphen to @param with brackets",
  },
  {
    pattern: /(@param\s+\{[^}]+\}\s+\w+\s*)([^-\n])/g,
    replacement: "$1- $2",
    description: "Add hyphen to @param with type",
  },
  {
    pattern: /(@param\s+\w+\s*)([^-\n])/g,
    replacement: "$1- $2",
    description: "Add hyphen to simple @param",
  },
  // Fix malformed param names that accidentally include a trailing hyphen (e.g., @param config- ...)
  {
    pattern: /@param\s+(\{[^}]+\}\s+)?([A-Za-z_$][\w.$]*)-(\s*)/g,
    replacement: "@param $1$2 - ",
    description: "Normalize @param name with stray hyphen",
  },
  // Fix @returns description to include a hyphen before text (keep type if present)
  {
    pattern: /(@returns\s+(?:\{[^}]+\}\s*)?)([^-\s\n])/g,
    replacement: "$1- $2",
    description: "Ensure @returns description prefixed by hyphen",
  },
  // Fix @throws description to include a hyphen (keep type if present)
  {
    pattern: /(@throws\s+(?:\{[^}]+\}\s*)?)([^-\s\n])/g,
    replacement: "$1- $2",
    description: "Ensure @throws description prefixed by hyphen",
  },
  // Replace non-standard file overview tags with @packageDocumentation
  {
    pattern: /@fileoverview/g,
    replacement: "@packageDocumentation",
    description: "Replace @fileoverview with @packageDocumentation",
  },
  {
    pattern: /@file(\b)/g,
    replacement: "@packageDocumentation",
    description: "Replace @file with @packageDocumentation",
  },
];

/**
 * Recursively finds all TypeScript files in a directory.
 * @param dir - Directory to search in.
 * @returns Array of TypeScript file paths.
 */
function findTSFiles(dir: string): string[] {
  const files: string[] = [];
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !entry.startsWith(".")) {
      files.push(...findTSFiles(fullPath));
    } else if (entry.endsWith(".ts") && !entry.endsWith(".d.ts")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Applies JSDoc fixes to a file content.
 * @param content - Original file content.
 * @returns Fixed content and list of applied fixes.
 */
function fixJSDoc(content: string): { content: string; fixes: string[] } {
  let fixedContent = content;
  const appliedFixes: string[] = [];

  for (const fix of jsdocFixes) {
    const before = fixedContent;
    fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
    if (before !== fixedContent) {
      appliedFixes.push(fix.description);
    }
  }

  return { content: fixedContent, fixes: appliedFixes };
}

/**
 * Adds a @packageDocumentation doc block if none exists.
 * @param content - Original file content.
 * @param filePath - Path to the file for generating description.
 * @returns Content with @packageDocumentation tag added if needed.
 */
function addFileTag(content: string, filePath: string): string {
  // If already has a package-level documentation tag, don't add another
  if (content.includes("@packageDocumentation")) {
    return content;
  }
  // If it has legacy @file or @fileoverview, let regex transforms handle
  if (content.includes("@file") || content.includes("@fileoverview")) {
    return content;
  }

  // Generate file description from path
  const fileName = path.basename(filePath, ".ts");
  const dirName = path.dirname(filePath).split(path.sep).pop();

  const description = `${fileName} implementation for ${dirName} module`;
  const fileTag = `/**\n * @packageDocumentation ${description}\n */\n\n`;

  // If file starts with imports, add before them
  if (content.trim().startsWith("import")) {
    return fileTag + content;
  }

  // If file starts with comment, add after it
  const commentMatch = content.match(/^(\/\*\*[\s\S]*?\*\/\s*)/);
  if (commentMatch) {
    return content.replace(commentMatch[1], commentMatch[1] + fileTag);
  }

  // Otherwise add at the top
  return fileTag + content;
}

/**
 * Main function to fix JSDoc issues in TypeScript files.
 */
async function main(): Promise<void> {
  // Go up from out/bin/tools to root, then to src
  const srcDir = path.resolve(__dirname, "../../../src");
  console.log(`Looking for files in: ${srcDir}`);

  if (!fs.existsSync(srcDir)) {
    console.error(`Source directory not found: ${srcDir}`);
    return;
  }

  const tsFiles = findTSFiles(srcDir);

  console.log(`Found ${tsFiles.length} TypeScript files`);

  let totalFixes = 0;
  let filesModified = 0;

  for (const filePath of tsFiles) {
    const content = fs.readFileSync(filePath, "utf8");

    // Add @packageDocumentation tag if missing
    let fixedContent = addFileTag(content, filePath);

    // Apply JSDoc fixes
    const { content: finalContent, fixes } = fixJSDoc(fixedContent);

    // Only write if content changed
    if (finalContent !== content) {
      fs.writeFileSync(filePath, finalContent, "utf8");
      filesModified++;
      totalFixes += fixes.length;

      console.log(
        `✅ Fixed ${path.relative(srcDir, filePath)}: ${fixes.length} issues`
      );
      if (fixes.length > 0) {
        fixes.forEach((fix) => console.log(`   - ${fix}`));
      }
    }
  }

  console.log(`\n✅ Fixed ${totalFixes} issues across ${filesModified} files`);
}

if (require.main === module) {
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  main().catch(console.error);
}
