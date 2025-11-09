import { defaultChangelogConfig } from "./config";
import { ChangelogConfig } from "./types";
import {
  ensureMarkers,
  insertLogEntry,
  insertOutstandingItem,
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
  addOutstanding(priority: 1 | 2 | 3, text: string): void {
    let content = readFile(this.cfg.filePath);
    content = ensureMarkers(content, this.cfg);
    content = insertOutstandingItem(content, this.cfg, priority, text);
    writeFile(this.cfg.filePath, content);
  }

  addEntry(type: string, summary: string): void {
    const { date, time } = nowParts();
    let content = readFile(this.cfg.filePath);
    content = ensureMarkers(content, this.cfg);
    content = insertLogEntry(content, date, time, type, summary);
    writeFile(this.cfg.filePath, content);
  }

  exportJSON(): string {
    const content = readFile(this.cfg.filePath);
    const data = exportChangelogJSON(content, this.cfg);
    return JSON.stringify(data, null, 2);
  }
}
