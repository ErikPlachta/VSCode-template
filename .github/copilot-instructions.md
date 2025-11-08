# Copilot Chat Instructions

This repository uses the root `CHANGELOG.md` as the single source of truth for Copilot Chat managed work. Follow these guidelines:

- At the start of a session, read the `Unreleased` section and confirm which tasks to resume.
- Add new tasks to `Unreleased` under `Planned` and update when complete.
- Prefer incremental, non-breaking changes (add aliases and transitional shims rather than immediate deletions).
- When renaming or migrating (for example `businessData` → `userContext`), keep backward-compatible aliases for one release and update references across configs, tests, and docs.
- After making changes, run the verification checklist: compile, tests, lint, health report. Record results in `CHANGELOG.md`.
- For substantial changes, add a short migration note in `CHANGELOG.md` and relevant `README` or docs pages.

See `CHANGELOG.md` for the most recent plan and verification entries.
