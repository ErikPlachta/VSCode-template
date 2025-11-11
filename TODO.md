---
title: TODO
summary: A centralized Task management location used by CoPilot Chat to track current progress.
roles:
  - engineering
  - documentation
associations:
  - TODO
  - TODOs
  - reference
  - documentation
---

## Copilot Instructions

<!-- TODO:BEGIN:COPILOT_INSTRUCTIONS -->

### Core Principals

1. This file is the single source of truth for all outstanding tasks.
2. It is collaboratively managed by the User and Copilot Chat.
3. All outstanding tasks must be captured here, organized by priority.
4. Copilot Chat should proactively review and keep this file up to date, reflecting user-requested priority changes.
5. After each set of logged changes, revisit and update Outstanding Tasks accordingly.
6. Logs capture all change history, organized by date/time and semantic titles.

### High Level Notes

- Maintain this file as the single source of truth for outstanding tasks.
- This file is used by `.github/copilot-instructions.md` for tracking historical decisions and active planned tasks before starting new work.
- The content within this file is used to make entries within the `CHANGELOG.md` file.
- Ensure all outstanding tasks are captured here, organized by priority.
- There are custom scripts created for interacting with this file via CLI to ensure consistency and proper formatting. (see [Automation Aids](#automation-aids) below)

### Automation Aids

To guarantee accurate current timestamps and consistent formatting for new log entries, prefer the ChangeLogManager CLI:

- Quick add entry: `npm run changelog:manage -- add-entry --type docs --summary "Your summary"`
- Ensure markers: `npm run changelog:manage -- insert-markers`
- Add a Current Task: `npm run changelog:manage -- add-current --text "Task description"`
- Prune completed items: `npm run changelog:manage -- prune-completed`
- Valid types: fix | feat | chore | docs | refactor | test | perf | ci | build | style.

#### Guidelines

This file serves as the central repository for tracking all outstanding TODOs, managed collaboratively by the user and Copilot Chat.

Follow these guidelines to ensure effective task management:

1. **Comprehensive Tracking**: Ensure every outstanding task is documented here, categorized by priority (Current, Next, Backlog).
2. **Incomplete TODO Organization**: Group incomplete TODOs into three sections distinct sections for clarity and programmability.
   - **Current TODOs**: Tasks actively being worked on. Contains a single parent-level item. Represents the immediate focus.
   - **Next TODOs**: Tasks planned for the near future.
   - **Backlog TODOs**: Unplanned tasks that may be addressed later.
3. **TODO Priority**: Every TODO should have a classified priority: `Priority 1 (Critical. Blocking or  Urgent) | Priority 2 (Next) | Priority 3 (Backlog)`.
4. **TODO Hierarchy**: A TODO will likely live within a hierarchy. A TODO may have a parent, siblings, or children items.
5. **TODO Completion Tracking**: Completion of TODOs should take it's hierarchy into consideration. Completing a parent TODO should also complete all child TODOs. Completing a child TODO should not complete the parent TODO unless all siblings are also completed. A full list of TODOs is not complete until the full hierarchy is processed.
6. **Regular Updates**: Regularly update this file to reflect changes in task status and priorities:
   - Use visual indicators for status: ✅ completed | ❌ removed | ⏳ in-progress | 🚫 blocked | ‼️invalid
   - Validate integrity and modify as things change.
7. **Completion Workflow**: When a TODO is completed, and CHANGELOG entry should be made. Reference the `.github/copilot-instructions.md` and `CHANGELOG.md` for specifics.

<!-- TODO:END:COPILOT_INSTRUCTIONS -->

<!-- TODO:BEGIN: INCOMPLETE_TODOs -->

## Incomplete TODOs

> This section contains all active TODOs, managed by the User and CoPilot Chat collaboratively. Should only contain a single parent level item.

### Current TODOs

> This section contains the active TODOs being worked on.

<!-- TODO:BEGIN:CURRENT_TODOS_PROCESSING -->

<!-- TODO:END:CURRENT_TODOS_PROCESSING -->

### Next TODOs

> This section contains the next TODOs to be worked on.

<!-- TODO:BEGIN:NEXT_TODOS_TO_PROCESS -->

<!-- TODO:END:NEXT_TODOS_TO_PROCESS -->

### Backlog TODOs

> This section contains unplanned TODOs that may be addressed later.

<!-- TODO:BEGIN:UNPLANNED_TODOS_TO_PROCESS -->

<!-- TODO:END:UNPLANNED_TODOS_TO_PROCESS -->

<!-- TODO:END:INCOMPLETE_TODOs >

## Completed TODOs

> This section contains all completed TODOs, maintained for historical reference. The full list of completed TODOs start with a link to the `CHANGELOG.md` entry.

<!--TODO:BEGIN:COMPLETED_TODOS -->

<!--TODO:END:COMPLETED_TODOS -->
