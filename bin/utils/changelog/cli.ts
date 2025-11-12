#!/usr/bin/env tsx
/**
 * Legacy path deprecated: bin/utils/changelog.
 * This shim prevents accidental usage after migration.
 *
 * New CLI location: bin/repo-ops/changelog (same commands & args)
 */
console.error(
  "[DEPRECATED] bin/utils/changelog has been removed. Use bin/repo-ops/changelog instead."
);
process.exit(1);
