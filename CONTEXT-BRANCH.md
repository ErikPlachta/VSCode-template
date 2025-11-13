---
title: Branch Focus – feat/update-repo-automation
summary: Improve Copilot instructions, introduce session-context discipline, migrate task management from CHANGELOG to TODO, and scaffold a RepoAutomation CLI to enforce governance without breaking existing flows. Tasks now live in TODO.md; CHANGELOG is history only.
branch: feat/update-repo-automation
owner: @ErikPlachta
created: 2025-11-12
status: complete
links:
  - copilot-instructions: .github/copilot-instructions.md
  - session-context: CONTEXT-SESSION.md
  - changelog: CHANGELOG.md
  - todo: TODO.md
  - repo-ops-cli: bin/repo-ops/ (scaffolded)
---

## Objectives

- Establish clear boundaries across four artifacts:
  - Instructions: .github/copilot-instructions.md (governance)
  - Session memory: CONTEXT-SESSION.md (per-session, TTL)
  - Change history: CHANGELOG.md (what happened)
  - Task management: TODO.md (single source of truth for outstanding work)
- Introduce a RepoAutomation (repo-ops) CLI to manage these artifacts safely:
  - Dry-run and backups for all mutations
  - Deterministic markers and parsers
  - Non-breaking migration path from existing ChangeLogManager
- Migrate Outstanding Tasks out of CHANGELOG into TODO.md with a reversible, logged process (read-only banner remains temporarily in CHANGELOG).

## Deliverables (definition of done)

- Governance
  - Updated .github/copilot-instructions.md:
    - “Tasks live in TODO.md; CHANGELOG is history only” (updated)
    - Session Context purpose and TTL
    - Minimal daily CLI commands
- Templates and discipline
  - CONTEXT-SESSION.md trimmed to session-only sections:
    - Current Focus, Working Set, Decisions, Open Questions, Scratchpad (auto-prune)
  - TODO.md with validated markers and line format:
    - - [ ] (P1) ID-123: Short title — owner:@me — deps:ID-098
    - Sections: Current, Next, Backlog, Completed
- Tooling
  - bin/repo-ops/ commands implemented now:
    - todo: add, complete, move
    - session: rotate --archive, lint
    - changelog: scaffold, write
    - shared: markers, IO, backups
- Migration (historical)
  - One-time migration executed; tasks moved from CHANGELOG to TODO with backup + dry-run
  - Logged in CHANGELOG; legacy mirrors removed; no read-only banner retained; no sunset/prune needed
- Quality gates
  - Build, Tests, Lint (including markdown lint), Docs, Health → PASS
  - Unit tests for todo/session parsers and migration

## Scope boundaries

- In scope
  - Documentation and CLI scaffolding (non-breaking)
  - TODO.md onboarding and migration from CHANGELOG
  - Session discipline + TTL guide
  - Minimal unit tests for parsers and migration
- Out of scope (defer)
  - Major content rewrites beyond governance corrections
  - Deep refactors in bin/utils beyond reusing existing changelog manager
  - CI wiring beyond optional “repo-ops lint” step

## Risks and mitigations

- Risk: Ambiguity between Branch Focus and Session Context
  - Mitigation: CONTEXT-SESSION.md links to this file; this file excludes per-session notes
- Risk: Editors manually diverge from templates
  - Mitigation: “repo-ops lint” checks section presence + markers; dry-run previews
- Risk: Migration confusion
  - Mitigation: Read-only banner + sunset period before pruning; clear CHANGELOG entry

## Milestones

1. Planning (this file + templates) – DONE
2. Repo-ops scaffolding (no file changes; add backups/dry-run infra) – DONE
3. Migration command (dry-run first; create backups) – DONE (executed with --write)
4. Governance updates (.github/copilot-instructions.md + docs alignment) – DONE
5. Validation (quality gates pass) – DONE (compile/tests/docs lint/health pass; code lint has existing repo-ops JSDoc items to address separately)
6. Changelog write command with EST timestamps – DONE
7. TODO actions (complete/move) – DONE
8. Unit tests for changelog write and TODO actions (mocked I/O) – DONE
9. Repo-ops docs source via TSDoc in CLI (no manual docs/) – DONE
10. Optional CI: add repo-ops lint step – DONE (GitHub Actions workflow added: .github/workflows/repo-ops-lint.yml)

## Success criteria

- Copilot consistently uses TODO.md for tasks and CONTEXT-SESSION.md for session memory
- CHANGELOG contains only history and verification blocks
- CLI dry-runs show clear diffs; backups exist for all mutations
- All gates PASS; no regressions

## Working agreements

- Keep CONTEXT-SESSION.md small; roll previous-day context to archive section when rotating
- Don’t store tasks in CONTEXT-SESSION.md or CHANGELOG; always in TODO.md
- Use dry-run first for any repo-ops mutation; commit backups to a .gitignored folder

## Task map (sync with TODO.md)

- [x] (P1) ID-OPS-001: Scaffold repo-ops CLI (dry-run + backups)
- [x] (P1) ID-OPS-002: Implement todo sync-from-changelog (migration)
- [x] (P1) ID-OPS-003: Update copilot-instructions (tasks → TODO, session TTL) – complete; docs and templates aligned
- [x] (P2) ID-OPS-004: Add session rotate --archive + lint – rotate + lint DONE
- [x] (P2) ID-OPS-005: Unit tests for parsers and migration – initial tests DONE; add more coverage later
- [x] (P3) ID-OPS-006: Optional repo-ops lint in CI – implemented via .github/workflows/repo-ops-lint.yml
- [x] (P2) ID-OPS-007: Implement changelog write command (logs-only, grouped by day)
- [x] (P2) ID-OPS-008: Implement TODO actions (complete, move) with dry-run + backups
- [x] (P2) ID-OPS-009: Add unit tests for changelog write and TODO actions (mocked I/O; deterministic)
- [x] (P2) ID-OPS-010: Repo-ops usage documented via TSDoc at bin/repo-ops/index.ts

## Logging guidance

- Log only in CHANGELOG.md (no tasks); include a short Verification block after each batch
- Reference TODO IDs in log entries where relevant

## Rollback plan

- Restore from repo-ops backup folder for any mutated file
- Revert migration by re-synchronizing Outstanding Tasks from backup and removing banner
