---
title: Branch Focus – feat/update-repo-automation
summary: Improve Copilot instructions, introduce session-context discipline, migrate task management from CHANGELOG to TODO, and scaffold a RepoAutomation CLI to enforce governance without breaking existing flows.
branch: feat/update-repo-automation
owner: @ErikPlachta
created: 2025-11-12
status: active
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
- Migrate Outstanding Tasks out of CHANGELOG into TODO.md with a reversible, logged process.

## Deliverables (definition of done)

- Governance
  - Updated .github/copilot-instructions.md:
    - “Tasks live in TODO.md; CHANGELOG is history only”
    - Session Context purpose and TTL
    - Minimal daily CLI commands
- Templates and discipline
  - CONTEXT-SESSION.md trimmed to session-only sections:
    - Current Focus, Working Set, Decisions, Open Questions, Scratchpad (auto-prune)
  - TODO.md with validated markers and line format:
    - - [ ] (P1) ID-123: Short title — owner:@me — deps:ID-098
    - Sections: Current, Next, Backlog, Completed
- Tooling
  - bin/repo-ops/ scaffolding:
    - todo: add, complete, move, export-json, sync-from-changelog
    - session: note, rotate --archive, lint
    - changelog: re-export existing manager + add small helpers
    - shared: markers, IO, backups, diff
- Migration
  - One-time command: “todo sync-from-changelog” with:
    - backup + dry-run
    - migration log entry in CHANGELOG
    - read-only banner left in CHANGELOG Outstanding Tasks (to be pruned after N days)
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

1. Planning (this file + templates)
2. Repo-ops scaffolding (no file changes; add backups/dry-run infra)
3. Migration command (dry-run first; create backups)
4. Governance updates (.github/copilot-instructions.md minimal edits)
5. Validation (quality gates pass)
6. Sunset and prune read-only mirror in CHANGELOG after N days

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
- [ ] (P1) ID-OPS-002: Implement todo sync-from-changelog (migration)
- [ ] (P1) ID-OPS-003: Update copilot-instructions (tasks → TODO, session TTL)
- [ ] (P2) ID-OPS-004: Add session rotate --archive + lint
- [ ] (P2) ID-OPS-005: Unit tests for parsers and migration
- [ ] (P3) ID-OPS-006: Optional repo-ops lint in CI

## Logging guidance

- Log only in CHANGELOG.md (no tasks); include a short Verification block after each batch
- Reference TODO IDs in log entries where relevant

## Rollback plan

- Restore from repo-ops backup folder for any mutated file
- Revert migration by re-synchronizing Outstanding Tasks from backup and removing banner
