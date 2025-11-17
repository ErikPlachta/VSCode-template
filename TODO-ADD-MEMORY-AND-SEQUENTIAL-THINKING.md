# TODO – Embed Memory & Sequential Thinking MCP Servers

This document captures a future roadmap for embedding the upstream Sequential Thinking and Memory MCP server logic directly into this project so the Orchestrator and its agents can leverage those capabilities privately.

## Goals

1. **Embed Sequential Thinking workflow logic** so every agent can leverage its task decomposition and execution engine through the Orchestrator.
2. **Adopt the Memory server’s learning and persistence features** to replace the current logging workaround and enable richer context for agents.
3. **Maintain upstream parity** by wrapping the third-party servers instead of rewriting them entirely, keeping the option to pull upstream fixes with minimal churn.
4. **Align with the existing agents/orchestrator architecture** so new capabilities feel native, configurable, and testable within the extension.

## Milestones & Plan

### Milestone 1 – Map upstream capabilities to local architecture
- Clone or inspect `modelcontextprotocol/servers` focusing on `src/sequentialthinking` and `src/memory`.
- Inventory tools, transports, config files, handlers, persistence mechanisms, and third-party dependencies.
- Document design intent, features, known issues, and limitations of both servers to understand how to exploit them fully.
- Compare upstream assumptions to the extension’s architecture (configuration layer, logging, orchestrator, user context directories) and note integration gaps.
- Produce a dependency checklist covering new npm packages, environment variables, and storage requirements.

### Milestone 2 – Sequential Thinking: design an integration wrapper
- Analyze how Sequential Thinking currently handles workflows, including prompt flow, state management, and tool orchestration.
- Design a wrapper module (e.g., `src/mcp/servers/sequentialThinkingWrapper.ts`) that keeps upstream code mostly untouched while exposing hooks for the Orchestrator.
- Define how the wrapper will register as either a dedicated agent or a shared toolset accessible to all agents.
- Ensure the wrapper can be updated easily when upstream changes occur—minimize bespoke modifications.
- Plan for configuration exposure (agent config files, application config) so other agents can opt into Sequential Thinking features.

### Milestone 3 – Sequential Thinking: implementation & agent orchestration
- Embed or vend the upstream code under a dedicated namespace (e.g., `src/vendor/mcp/sequentialthinking/`).
- Implement the wrapper/handler layer that:
  - Initializes Sequential Thinking using local configuration and cache directories.
  - Exposes its workflow execution entry points through the Orchestrator’s agent registry.
  - Provides a uniform interface for agents to delegate complex tasks to Sequential Thinking.
- Decide whether Sequential Thinking becomes a new agent or a shared service; document the rationale.
- Add unit/integration tests covering orchestration scenarios where agents offload work to Sequential Thinking.
- Update agent configs and unified orchestrator registrations so the new capability is recognized system-wide.

### Milestone 4 – Memory server: design integration
- Study the Memory server’s data model, persistence strategy, and APIs to understand how it learns from interactions.
- Plan how to refactor the existing logging solution to delegate to Memory, including migration of stored data if necessary.
- Determine whether Memory should be exposed as a dedicated agent, a toolset, or a background service for Sequential Thinking and other agents.
- Define the wrapper surface: configuration options, namespaces, retention policies, and storage directories aligned with user context caches.
- Ensure Sequential Thinking can tap into Memory (if applicable) to track progress across workflows.

### Milestone 5 – Memory server: implementation & orchestration wiring
- Vendor/port the Memory server code similarly to Sequential Thinking, keeping upstream files clean for future syncs.
- Implement the wrapper that adapts Memory operations (read/write/update/evict) to local storage paths and configuration schemas.
- Refactor the logging solution to leverage Memory, ensuring improved agent context while reducing reliance on `copilot-instructions.md`.
- Register Memory capabilities with the Orchestrator so agents can query or update memory seamlessly.
- Build comprehensive tests covering persistence, concurrency behavior, and integration with Sequential Thinking workflows.

### Milestone 6 – Documentation, configuration, and QA
- Update `README.md`, CHANGELOG, and any relevant docs to describe the new embedded capabilities and configuration steps.
- Ensure configuration generators (e.g., `generateMcpConfig`) include the new agents/tools.
- Provide onboarding notes describing design intent, features, known issues, and limitations learned during Milestone 1.
- Run the full QA pipeline (`npm run prebuild`, `npm run lint`, `npm test`, `npm run docs`) before release.
- Outline migration guidance for users moving from the current logging/workflow setup to the new Memory + Sequential Thinking integration.

## Integration Considerations

- **Agent exposure:** Decide whether Sequential Thinking and Memory are standalone agents, shared services, or both. The Orchestrator must be able to route tasks accordingly.
- **Third-party code handling:** Favor wrapper/adapter designs to keep upstream code pristine. Document the sync process for staying up to date.
- **Configuration strategy:** All new settings should live in existing config structures with IntelliSense/JSDoc support.
- **Storage alignment:** Use the extension’s user-context directories for persistence so features respect current cache policies.
- **Testing requirements:** Maintain or improve coverage with new tests targeting workflow execution, memory persistence, and agent orchestration.

## Related Resources & Reference Material

- **Sequential Thinking MCP server** – source of workflow logic and prompts: <https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking>
- **Memory MCP server** – upstream implementation of the learning/persistence layer: <https://github.com/modelcontextprotocol/servers/tree/main/src/memory>
- **Orchestrator & agents overview** – current repository design context (see `README.md` in this repo for detailed architecture notes).
- **Configuration surface** – review `src/config/application.config.ts`, `src/mcp/config/unifiedAgentConfig.ts`, and `src/types/agentConfig.ts` to ensure new knobs are integrated consistently.
- **Existing logging/memory touch points** – inspect `copilot-instructions.md`, current logging utilities, and user-context cache directories documented in `UserContext-mcp-extension-1.0.0.vsix` release notes to understand what will be replaced.

## Integrity Review Checklist

- [ ] **Source alignment:** Confirm vendored Sequential Thinking and Memory files match upstream commit SHAs recorded in this repo’s docs to ease future audits.
- [ ] **Licensing compliance:** Verify upstream licenses are compatible with this project’s LICENSE and document attribution requirements in `docs/THIRD_PARTY_NOTICES.md` if needed.
- [ ] **Security posture:** Review upstream dependencies for known vulnerabilities (e.g., via `npm audit`) before embedding them.
- [ ] **Config & data handling:** Ensure new storage paths respect user privacy expectations and existing cache retention policies.
- [ ] **Testing integrity:** Require passing unit/integration tests that cover critical workflows (Sequential Thinking delegation, Memory persistence) before enabling the features by default.
- [ ] **Documentation accuracy:** Cross-check README/CHANGELOG updates against actual implementation to prevent drift between docs and behavior.

## Next Steps Checklist

- [ ] Complete Milestone 1 research report summarizing both servers.
- [ ] Review findings to confirm wrapper vs. rewrite trade-offs.
- [ ] Sequence implementation milestones (Sequential Thinking first vs. Memory first) based on risk and dependencies.
- [ ] Allocate time for documentation and QA once features land.

This plan keeps focus on understanding the upstream projects, designing wrapper-based integrations, and ensuring the Orchestrator plus all agents can benefit from Sequential Thinking workflows and Memory persistence without losing maintainability.
