# Session Context

Started: 2025-11-12T17:30:00Z

## Related

- [CHANGELOG.md](CHANGELOG.md)
- [TODO.md](TODO.md)

<!-- BEGIN:COPILOT_INSTRUCTIONS -->

## Copilot Instructions

- Keep this session file concise; use it for current focus, quick notes, and links.
- Tasks live in TODO.md; add/change priorities there.
- Log changes and verification in CHANGELOG.md.

<!-- END:COPILOT_INSTRUCTIONS -->
<!-- BEGIN:CURRENT-FOCUS-SUMMARY -->

## Current Focus Summary

- Keep `TODO.md` authoritative for tasks; update Current/Next as work evolves.
- Use `CHANGELOG.md` for history and verification blocks only.

## Actions Taken

- Updated governance docs to remove changelog→TODO mirror flows.
- Verified session lint and tests after repo-ops cleanup.

## Next Up

- Optional: sweep docs for any remaining references to removed repo-ops todo commands.
- Parameter marshalling from Orchestrator → DatabaseAgent is fixed.
- Category detection recognizes aliases (e.g., “apps”, “software” map to “applications”).
- VSIX packaging works; remember to reload the VS Code window after install.

### What still needs attention

- Strict quality gates:
  - Type/JSDoc: Missing `@param`/`@returns` types in `src/agent/orchestrator/index.ts` can fail the build.
  - Markdown lint: `CHANGELOG.md` has formatting nits (lists/spacing/fences) flagged by health checks.
- Performance: vsce warns the extension should be bundled (not currently bundled).

### Governance updates (today)

- Tasks live in `TODO.md`; changelog→TODO mirror and generated-actions flows have been removed.
- Changelog CLI retired fully; docs updated accordingly.
- Session workflow:

  - `session rotate` implemented and verified
  - `session lint` implemented and enforced

<!-- END:CURRENT-FOCUS-SUMMARY -->
<!-- BEGIN:CURRENT-FOCUS-DETAIL -->

## Current Focus Detail

### Agent Cleanup (Draft)

These are instructions I have started for the next branch, so that I can work through and clean up the Agents more.

It's rough draft and needs review.

If Copilot Chat sees this section, do not change it and do not modify it outside of the markers in this file.

Context below to make a plan for next steps:

1. Firstly, the change made to the orchestrator logic did resolve the error I was seeing. That being said, we've broken one of the core application rules:

> - Data driven design.
> - Segmentation of responsibilities.

> **There are two violations that I see**:
>
> 1.1. Orchestrator has hard-coded data, instead of using a data driven design.
> 1.2. Orchestrator should be using another agent to handle the data processing.
>
> At this point, I'm concerned there is more.
>
> Furthermore, we need to figure out why you keep making this mistake when developing solutions

1. DO a deep review on agents, verify you understand the existing features, outlining the 5 Ws for each.

> - What is the agent's design intention?
> - What problem does it solve?
> - Why does it solve that problem?
> - How does it solve problem(s)?
> - When does it solve problems?
> - etc, etc, etc.

1. During this process, please update the JSDocs within each agent.

> - Don't assume anything existing is accurate.

1. Update `C:\repo\vscode-extension-mcp-server\src\agent\index.ts` to contain more documentation-level details.

> It should provide an overview of the application's core design and infrastructure.

1. During this process, also look for any concerns where core application design goals are not being followed.

> - If you do, update the current tasks in the change log so that it's clear what needs to be resolved.

<!-- END:CURRENT-FOCUS-DETAIL -->
