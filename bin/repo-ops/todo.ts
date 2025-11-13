/**
 * @packageDocumentation
 * TODO operations for repo-ops.
 * Provides a data-driven way to append tasks into the appropriate TODO.md section.
 */
import { backupFile, ensureDir, readFileUtf8, writeFileUtf8 } from "./fs";
import { defaultConfig } from "./repo-ops.config";
import type { ApplyPlan, MarkerBounds, RepoPaths } from "./types";
import * as path from "path";

/**
 * Normalizes newlines to \n for consistent parsing.
 *
 * @param {string} text - Input text content.
 * @returns {string} Normalized content.
 */
function nl(text: string): string {
  return text.replace(/\r\n?/g, "\n");
}

/**
 * Insert content lines just before the section end marker.
 *
 * @param {string} content - Full markdown content.
 * @param {MarkerBounds} section - Section begin/end markers.
 * @param {string[]} lines - Lines to insert (without trailing newline).
 * @returns {string} Next content with insertion applied.
 */
function insertIntoSection(
  content: string,
  section: MarkerBounds,
  lines: string[]
): string {
  const src = nl(content);
  const beginIdx = src.indexOf(section.begin);
  const endIdx = src.indexOf(section.end);
  if (beginIdx === -1 || endIdx === -1 || endIdx < beginIdx) return content;
  const before = src.slice(0, endIdx).replace(/[\t ]*$/, "");
  const insertion =
    (before.endsWith("\n") ? "" : "\n") + lines.join("\n") + "\n";
  const after = src.slice(endIdx);
  return before + insertion + after;
}

/**
 * Priority classification for TODO items.
 */
export type Priority = "P1" | "P2" | "P3";

/**
 * Arguments for adding a TODO item.
 */
export interface AddTodoArgs {
  title: string;
  priority?: Priority; // default P2
  parent?: string;
  details?: string[]; // multiple --details allowed
  children?: string[]; // multiple --child allowed
  owner?: string; // e.g., @me
  deps?: string[]; // e.g., ["ID-123","ID-456"]
  status?: string; // e.g., "⏳"
  write?: boolean; // default false (dry-run)
}

/**
 * Build a bullet list for the TODO item using provided structure.
 *
 * @param {AddTodoArgs} args - Add arguments.
 * @returns {string[]} Lines to insert.
 */
export function buildTodoLines(args: AddTodoArgs): string[] {
  const prio: Priority = args.priority ?? "P2";
  const prefix = `${prio}:`;
  const topTitleParts: string[] = [];
  if (args.status) topTitleParts.push(args.status);
  topTitleParts.push(args.title.trim());
  if (args.owner) topTitleParts.push(`owner:${args.owner}`);
  if (args.deps && args.deps.length)
    topTitleParts.push(`deps:${args.deps.join(";")}`);
  const topLine = `- ${prefix} ${topTitleParts.join(" — ")}`;

  const lines: string[] = [topLine];
  /**
   * Append an indented sub-bullet.
   *
   * @param {string} text - Text to append as an indented bullet.
   */
  const addIndented = (text: string): void => {
    lines.push(`  - ${text}`);
  };

  if (args.parent) {
    // Wrap as parent with optional children and details
    lines[0] = `- ${prefix} ${args.parent.trim()}`;
    addIndented(args.title.trim());
  }
  if (args.details) {
    for (const d of args.details) addIndented(d.trim());
  }
  if (args.children) {
    for (const c of args.children) addIndented(c.trim());
  }
  return lines;
}

/**
 * Add a TODO item into the appropriate section of TODO.md.
 * Dry-run by default; on write, creates a timestamped backup first.
 *
 * @param {AddTodoArgs} args - Add options.
 * @returns {Promise<{changed:boolean; plans:ApplyPlan[]; dryRun:boolean; notes?:string[]}>} Result summary including dry-run flag and planned edits.
 */
export async function addTodo(args: AddTodoArgs): Promise<{
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}> {
  const prio: Priority = args.priority ?? "P2";
  const repo: RepoPaths = defaultConfig.resolveRepoPaths(process.cwd());
  const todoContent = await readFileUtf8(repo.todo);

  const section: MarkerBounds =
    prio === "P1"
      ? defaultConfig.todoSections.current
      : prio === "P3"
      ? defaultConfig.todoSections.backlog
      : defaultConfig.todoSections.next;

  const next = insertIntoSection(todoContent, section, buildTodoLines(args));
  if (next === todoContent) {
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes: ["Section markers not found or no change computed."],
    };
  }
  const plan: ApplyPlan = {
    filePath: repo.todo,
    description: `Insert ${prio} task into TODO.md`,
    beforeSnippet: todoContent.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };

  if (!args.write)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };

  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.todo, backupRoot);
  await writeFileUtf8(repo.todo, next);
  return { changed: true, plans: [plan], dryRun: false };
}

/**
 * Remove the first line containing a match within a section and return updated content.
 *
 * @param {string} content - Full TODO.md content.
 * @param {MarkerBounds} section - Section bounds.
 * @param {string} match - Substring to match.
 * @returns {{ next:string; removed?:string }} Updated content and the removed line when found.
 */
function removeLineInSection(
  content: string,
  section: MarkerBounds,
  match: string
): { next: string; removed?: string } {
  const src = nl(content);
  const b = src.indexOf(section.begin);
  const e = src.indexOf(section.end);
  if (b === -1 || e === -1 || e < b) return { next: content };
  const head = src.slice(0, b + section.begin.length);
  const body = src.slice(b + section.begin.length, e);
  const tail = src.slice(e);
  const lines = body.split("\n");
  let removed: string | undefined;
  const kept: string[] = [];
  let found = false;
  for (const line of lines) {
    if (!found && line.includes(match)) {
      removed = line.trimEnd();
      found = true;
      continue;
    }
    kept.push(line);
  }
  if (!found) return { next: content };
  const next = head + kept.join("\n") + tail;
  return { next, removed };
}

/**
 * Arguments for completing a TODO item.
 *
 * @property {string} match - Substring used to find the TODO line to complete.
 * @property {boolean} [write] - When true, applies changes; when false, dry-run only.
 */
export interface CompleteTodoArgs {
  match: string;
  write?: boolean;
}

/**
 * Complete a TODO by moving a matching bullet into the Completed section, prefixed with ✅.
 *
 * @param {CompleteTodoArgs} args - Match and write flag.
 * @returns {Promise<{changed:boolean; plans:ApplyPlan[]; dryRun:boolean; notes?:string[]}>} Result summary.
 */
export async function completeTodo(
  args: CompleteTodoArgs
): Promise<{
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}> {
  const repo: RepoPaths = defaultConfig.resolveRepoPaths(process.cwd());
  const todoContent = await readFileUtf8(repo.todo);
  const secs = [
    defaultConfig.todoSections.current,
    defaultConfig.todoSections.next,
    defaultConfig.todoSections.backlog,
  ];
  let src = todoContent;
  let removed: string | undefined;
  for (const s of secs) {
    const res = removeLineInSection(src, s, args.match);
    src = res.next;
    if (res.removed) {
      removed = res.removed;
      break;
    }
  }
  if (!removed) {
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes: ["No matching line found in TODO sections."],
    };
  }
  const clean = removed.replace(/^\s*-\s*P[123]:\s*/, "").trim();
  const next = insertIntoSection(src, defaultConfig.todoSections.completed, [
    "- ✅ " + clean,
  ]);
  const plan: ApplyPlan = {
    filePath: repo.todo,
    description: "Complete TODO and move to Completed section",
    beforeSnippet: todoContent.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };
  if (!args.write)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };
  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.todo, backupRoot);
  await writeFileUtf8(repo.todo, next);
  return { changed: true, plans: [plan], dryRun: false };
}

/**
 * Arguments for moving a TODO item to a different priority section.
 *
 * @property {string} match - Substring used to find the TODO line to move.
 * @property {Priority} to - Destination priority section.
 * @property {boolean} [write] - When true, applies changes; when false, dry-run only.
 */
export interface MoveTodoArgs {
  match: string;
  to: Priority;
  write?: boolean;
}

/**
 * Move a TODO bullet from one section to another.
 *
 * @param {MoveTodoArgs} args - Match string, destination priority, and write flag.
 * @returns {Promise<{changed:boolean; plans:ApplyPlan[]; dryRun:boolean; notes?:string[]}>} Result summary.
 */
export async function moveTodo(
  args: MoveTodoArgs
): Promise<{
  changed: boolean;
  plans: ApplyPlan[];
  dryRun: boolean;
  notes?: string[];
}> {
  const repo: RepoPaths = defaultConfig.resolveRepoPaths(process.cwd());
  const todoContent = await readFileUtf8(repo.todo);
  const secs = [
    defaultConfig.todoSections.current,
    defaultConfig.todoSections.next,
    defaultConfig.todoSections.backlog,
  ];
  let src = todoContent;
  let removed: string | undefined;
  for (const s of secs) {
    const res = removeLineInSection(src, s, args.match);
    src = res.next;
    if (res.removed) {
      removed = res.removed;
      break;
    }
  }
  if (!removed) {
    return {
      changed: false,
      plans: [],
      dryRun: !(args.write ?? false),
      notes: ["No matching line found in TODO sections."],
    };
  }
  const dest: MarkerBounds =
    args.to === "P1"
      ? defaultConfig.todoSections.current
      : args.to === "P3"
      ? defaultConfig.todoSections.backlog
      : defaultConfig.todoSections.next;
  const next = insertIntoSection(src, dest, [removed]);
  const plan: ApplyPlan = {
    filePath: repo.todo,
    description: `Move TODO to ${args.to} section`,
    beforeSnippet: todoContent.slice(0, 400),
    afterSnippet: next.slice(0, 400),
    wouldWriteBytes: Buffer.byteLength(next, "utf8"),
  };
  if (!args.write)
    return {
      changed: true,
      plans: [plan],
      dryRun: true,
      notes: ["Dry-run: no files written"],
    };
  const backupRoot = path.join(repo.root, defaultConfig.backupDirName);
  await ensureDir(backupRoot);
  await backupFile(repo.todo, backupRoot);
  await writeFileUtf8(repo.todo, next);
  return { changed: true, plans: [plan], dryRun: false };
}
