/**
 * @packageDocumentation
 * Simple filesystem lock utilities for guarding concurrent changelog writes.
 * Uses a create (O_EXCL) pattern to ensure only one writer proceeds.
 */
import * as fs from "fs";
import * as path from "path";

/** Result of attempting to acquire a lock. */
export interface AcquireLockResult {
  /** Path to lock file. */
  lockPath: string;
  /** True if lock acquired. */
  acquired: boolean;
  /** Optional warning or error notes. */
  notes: string[];
}

/**
 * Acquire a lock file guarding a target resource.
 *
 * @param rootDir - Repository root directory.
 * @param label - Label identifying the resource (e.g., 'changelog').
 * @param ttlMs - Time-to-live for stale lock reclamation.
 * @returns AcquireLockResult with acquisition status.
 */
export function acquireLock(
  rootDir: string,
  label: string,
  ttlMs = 2 * 60 * 1000
): AcquireLockResult {
  const lockDir = path.join(rootDir, "out", label);
  try {
    fs.mkdirSync(lockDir, { recursive: true });
  } catch {
    /* ignore mkdir race */
  }
  const lockPath = path.join(lockDir, `${label}.write.lock`);
  const notes: string[] = [];
  try {
    const fd = fs.openSync(lockPath, "wx");
    fs.writeFileSync(fd, String(Date.now()), { encoding: "utf8" });
    fs.closeSync(fd);
    return { lockPath, acquired: true, notes };
  } catch {
    // Lock exists; check staleness
    try {
      const stat = fs.statSync(lockPath);
      const age = Date.now() - stat.mtimeMs;
      if (age > ttlMs) {
        notes.push(
          `Stale lock detected (age ${Math.round(
            age
          )}ms > ttl ${ttlMs}ms). Reclaiming.`
        );
        fs.unlinkSync(lockPath);
        const fd = fs.openSync(lockPath, "wx");
        fs.writeFileSync(fd, String(Date.now()), { encoding: "utf8" });
        fs.closeSync(fd);
        return { lockPath, acquired: true, notes };
      }
      notes.push("Active lock present; another write in progress.");
    } catch (inner) {
      notes.push(
        "Failed reading existing lock for staleness check: " +
          (inner instanceof Error ? inner.message : String(inner))
      );
    }
    return { lockPath, acquired: false, notes };
  }
}

/**
 * Release a previously acquired lock.
 *
 * @param lockPath - Path returned by acquireLock.
 */
export function releaseLock(lockPath: string): void {
  try {
    if (fs.existsSync(lockPath)) fs.unlinkSync(lockPath);
  } catch {
    /* ignore */
  }
}
