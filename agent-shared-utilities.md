# Shared Agent Utilities and Expansion Plan

## Evaluation Summary
- The MCP project already centralises orchestration logic in `src/agents/orchestrator.ts` and domain knowledge in `src/agents/relevantDataManagerAgent.ts`, but individual agents still duplicate effort for logging, prompt scaffolding, capability metadata, and cache handling.
- There is no workspace-wide manifest that teaches agents (or downstream tooling) what each agent is responsible for, what inputs they expect, when to escalate, or which shared utilities they depend on.
- Agent-to-agent collaboration currently relies on ad-hoc method calls; a set of shared "agent services" (prompt templates, logging, cache helpers, and validation utilities) would make these collaborations more consistent and discoverable.

## Actionable TODOs

### Capability & Escalation Manifest
- [ ] Implement `src/mcp/agentManifest.ts` exporting typed metadata for every agent (name, description, responsibilities, escalation triggers, dependencies).
- [ ] Update the orchestrator to load the manifest and surface escalation guidance when classification confidence is low.
- [ ] Document how to register new agents via the manifest.
- **Testing:** Add Jest coverage that ensures every manifest entry includes mandatory fields and that the orchestrator can retrieve escalation prompts.
- **Verification:** Run `npm test` and manually inspect the manifest-driven clarification output in orchestrator unit tests.
- **Usage:** New agents register themselves in the manifest to become discoverable by orchestration tooling.

### Shared Prompt/Phrasebook Library
- [ ] Add `src/mcp/prompts/` with reusable template builders (for example, `buildClassificationPrompt`, `renderEscalationPrompt`).
- [ ] Refactor existing agents to import these helpers instead of embedding prompt strings inline.
- [ ] Document available prompt fragments for future composition.
- **Testing:** Create Jest tests validating that prompt builders handle missing signals and produce deterministic markdown.
- **Verification:** Inspect updated agent code to confirm hard-coded prompt strings were replaced by helper calls.
- **Usage:** Agents import shared templates to keep tone, safety reminders, and escalation instructions consistent.

### Unified Tool Logging & Telemetry Service
- [ ] Create `src/mcp/telemetry.ts` exporting `createInvocationLogger` that wraps calls and writes structured logs (extending `logInvocation`).
- [ ] Update each agent to log invocations through the helper, including escalation or fallback information.
- [ ] Surface aggregated telemetry stats (counts, failures) via a new command or status panel.
- **Testing:** Add Jest tests for the telemetry helper to confirm success and error cases emit expected payloads.
- **Verification:** Observe console output (or captured logs) while running agent unit tests to ensure telemetry runs without side effects.
- **Usage:** Agents wrap potentially expensive calls (dataset lookups, planning routines) with the telemetry helper.

### Schema & Dataset Validation Utilities
- [ ] Implement `src/mcp/schemaUtils.ts` with functions for schema normalisation, relationship integrity checks, and version comparisons.
- [ ] Refactor `DataAgent`/`DatabaseAgent` to call these shared validators when loading category data.
- [ ] Extend the cache layer to invalidate entries when schema versions change.
- **Testing:** Unit-test the schema utilities using representative category fixtures.
- **Verification:** Run `npm test` and confirm validation failures bubble meaningful errors through agents.
- **Usage:** Agents call shared validators before returning data to keep schema guarantees aligned.

### Cross-Agent Knowledge Base Loader
- [ ] Build `src/mcp/knowledgeBase.ts` that indexes shared documents (Markdown, JSON schemas) into a lightweight vector store or keyword index.
- [ ] Expose query functions returning ranked snippets plus provenance metadata.
- [ ] Update agents (especially `DataAgent` and `Orchestrator`) to query the knowledge base when signals are missing or clarification is needed.
- **Testing:** Write Jest tests that index sample documents and assert queries return the expected ranking and metadata.
- **Verification:** Validate that orchestrator clarification responses include knowledge base snippets when available.
- **Usage:** Agents use the loader to fetch cross-cutting reference material instead of re-implementing document lookups.

### Escalation & Clarification Agent
- [ ] Implement `src/agents/clarificationAgent.ts` that consumes the manifest, probes missing signals, and crafts follow-up questions.
- [ ] Allow the orchestrator to route `clarification` intent to this agent before falling back to manual escalation.
- [ ] Include unit tests covering escalations triggered by empty/low-signal questions.
- **Testing:** Add Jest tests verifying the Clarification Agent composes prompts using manifest metadata and the knowledge base.
- **Verification:** Run `npm test` and confirm orchestrator tests exercise the Clarification Agent path.
- **Usage:** Orchestrator delegates ambiguous requests to the Clarification Agent, improving clarity and hand-offs.

## Onboarding Checklist
1. Implement shared modules and manifest entries described above.
2. Refactor orchestrator and agents to use shared utilities.
3. Add comprehensive unit tests covering manifest integrity, prompt builders, telemetry, schema validation, knowledge base retrieval, and clarification flows.
4. Update documentation to explain how contributors register new agents and consume the shared utilities.
5. Run `npm test` to validate functionality end-to-end.
6. Ensure all new files are referenced in the manifest and documentation for discoverability.

