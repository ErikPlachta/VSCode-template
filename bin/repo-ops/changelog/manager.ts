import { defaultChangelogConfig } from "./config";
import { ChangelogConfig } from "./types";
import {
  ensureMarkers,
  insertLogEntry,
  insertOutstandingItem,
  insertCurrentTask,
  pruneCompletedOutstanding,
  readFile,
  writeFile,
  exportChangelogJSON,
} from "./parser";

function nowParts() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const yyyy = d.getFullYear();
  const mm = pad(d.getMonth() + 1);
  const dd = pad(d.getDate());
  const hh = pad(d.getHours());
  const mi = pad(d.getMinutes());
  const ss = pad(d.getSeconds());
  return { date: `${yyyy}-${mm}-${dd}`, time: `${hh}:${mi}:${ss}` };
}

export class ChangeLogManager {
  private cfg: ChangelogConfig;

  constructor(cfg: Partial<ChangelogConfig> = {}) {
    this.cfg = { ...defaultChangelogConfig, ...cfg } as ChangelogConfig;
  }

  ensureMarkers(): void {
    const content = readFile(this.cfg.filePath);
    const updated = ensureMarkers(content, this.cfg);
    if (updated !== content) writeFile(this.cfg.filePath, updated);
  }
  addOutstanding(priority: 1 | 2 | 3, text: string, subTasks?: string[]): void {
    let content = readFile(this.cfg.filePath);
    content = ensureMarkers(content, this.cfg);
    content = insertOutstandingItem(
      content,
      this.cfg,
      priority,
      text,
      subTasks
    );
    writeFile(this.cfg.filePath, content);
  }

  addEntry(
    type: string,
    summary: string,
    details?: string[],
    verification?: { summary: string; lines: string[] }
  ): void {
    const { date, time } = nowParts();
    let content = readFile(this.cfg.filePath);
    content = ensureMarkers(content, this.cfg);
    content = insertLogEntry(
      content,
      this.cfg,
      date,
      time,
      type,
      summary,
      details,
      verification
    );
    writeFile(this.cfg.filePath, content);
  }

  addCurrent(text: string, subTasks?: string[]): void {
    let content = readFile(this.cfg.filePath);
    content = ensureMarkers(content, this.cfg);
    content = insertCurrentTask(content, this.cfg, text, subTasks);
    writeFile(this.cfg.filePath, content);
  }

  exportJSON(): string {
    const content = readFile(this.cfg.filePath);
    const data = exportChangelogJSON(content, this.cfg);
    return JSON.stringify(data, null, 2);
  }

  pruneCompleted(): { pruned: number; removed: string[] } {
    let content = readFile(this.cfg.filePath);
    const result = pruneCompletedOutstanding(content, this.cfg);
    if (result.pruned > 0) {
      writeFile(this.cfg.filePath, result.content);
      // Add a log entry summarizing the pruning
      this.addEntry(
        "chore",
        "Pruned completed Outstanding Tasks",
        result.removedLines.map((l: string) => l.replace(/^[*-]\s*/, "").trim())
      );
    }
    return { pruned: result.pruned, removed: result.removedLines };
  }
}
