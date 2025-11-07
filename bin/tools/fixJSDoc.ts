/**
 * @file Automated JSDoc fixer for common violations.
 */

import * as fs from "fs";
import * as path from "path";

interface JSDocFix {
  pattern: RegExp;
  replacement: string;
  description: string;
}

const jsdocFixes: JSDocFix[] = [
  // Fix @param descriptions missing hyphens
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
  // Remove type annotations in @param
  {
    pattern: /@param\s+\{[^}]+\}\s*(\[[^\]]+\]|\w+)/g,
    replacement: "@param $1",
    description: "Remove type from @param",
  },
  // Fix @returns missing hyphens and type annotations
  {
    pattern: /@returns\s+\{[^}]+\}\s*([^-\n])/g,
    replacement: "@returns - $1",
    description: "Fix @returns with type",
  },
  // Fix @throws missing hyphens and type annotations
  {
    pattern: /@throws\s+\{[^}]+\}\s*([^-\n])/g,
    replacement: "@throws - $1",
    description: "Fix @throws with type",
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
 * Adds @file tags to files that are missing them.
 * @param content - Original file content.
 * @param filePath - Path to the file for generating description.
 * @returns Content with @file tag added if needed.
 */
function addFileTag(content: string, filePath: string): string {
  // Check if already has @file tag
  if (content.includes("@file")) {
    return content;
  }

  // Generate file description from path
  const fileName = path.basename(filePath, ".ts");
  const dirName = path.dirname(filePath).split(path.sep).pop();

  const description = `${fileName} implementation for ${dirName} module`;
  const fileTag = `/**\n * @file ${description}\n */\n\n`;

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
  const srcDir = path.resolve(__dirname, '../../../src');
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

    // Add @file tag if missing
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
  main().catch(console.error);
}
