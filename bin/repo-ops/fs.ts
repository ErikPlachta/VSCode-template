/**
 * @packageDocumentation
 * Minimal filesystem helpers with UTF-8 defaults and timestamped backups.
 */
import * as fs from "fs/promises";
import * as path from "path";

/**
 * Read a UTF-8 encoded file.
 *
 * @param {string} filePath - Absolute or relative path to the file.
 * @returns {Promise<string>} - File contents as a string.
 */
export async function readFileUtf8(filePath: string): Promise<string> {
  return fs.readFile(filePath, { encoding: "utf8" });
}

/**
 * Write a UTF-8 encoded file, replacing any existing content.
 *
 * @param {string} filePath - Absolute or relative path to the file.
 * @param {string} content - The content to write.
 * @returns {Promise<void>} - Resolves when the file has been written.
 */
export async function writeFileUtf8(
  filePath: string,
  content: string
): Promise<void> {
  await fs.writeFile(filePath, content, { encoding: "utf8" });
}

/**
 * Ensure that a directory exists, creating parent directories as needed.
 *
 * @param {string} dirPath - Directory path to create.
 * @returns {Promise<void>} - Resolves when the directory exists.
 */
export async function ensureDir(dirPath: string): Promise<void> {
  await fs.mkdir(dirPath, { recursive: true });
}

/**
 * Create a timestamped backup of a file within the provided backup root.
 * The backup path mirrors the source file's relative path from cwd.
 *
 * @param {string} filePath - The file to back up.
 * @param {string} backupRoot - The root folder where backups are stored.
 * @returns {Promise<string>} - Absolute path to the backup file written.
 */
export async function backupFile(
  filePath: string,
  backupRoot: string
): Promise<string> {
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const rel = path.relative(process.cwd(), filePath).replace(/\\/g, "/");
  const dest = path.join(backupRoot, `${rel}.${stamp}.bak`);
  await ensureDir(path.dirname(dest));
  const content = await readFileUtf8(filePath);
  await writeFileUtf8(dest, content);
  return dest;
}
