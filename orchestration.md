# Orchestrator Architecture Overview

This document explains how the My Business MCP VS Code extension orchestrates tools that are exposed by your Model Context Protocol (MCP) server. It covers runtime discovery, input collection, invocation, response rendering, and local logging so contributors can confidently extend the workflow.

## 1. Dynamic tool discovery

1. `fetchTools` (`src/mcpSync.ts`) issues a JSON-RPC `listTools` call when the extension activates.
2. The response is normalised to enrich each tool with:
   - Schema-aware property metadata (type, defaults, required flags, enums).
   - Optional summary and tag information.
3. Slash commands, mentions, and the automation command pull descriptions directly from the hydrated metadata, so enhancing the MCP server payload immediately improves the UX.

## 2. Adaptive argument prompts

* `promptForArgs` (`src/schemaPrompt.ts`) inspects the JSON schema for each property and chooses the appropriate input primitive:
  * Quick pick menus for booleans and enumerations.
  * Validated number parsing for numeric fields.
  * Comma-delimited parsing for arrays, including nested coercion.
* Required fields surface descriptive validation errors, and defaults are pre-filled when provided by the server.

## 3. Context-aware invocation pipeline

* Chat handlers (`src/extension.ts`) funnel both slash commands and mentions into a single `invokeTool` helper that:
  1. Aggregates the last ten interaction summaries per tool to form a lightweight conversation context.
  2. Attaches the context alongside the arguments when calling `invokeTool` on the MCP server.
  3. Persists the rolling history so multi-turn orchestrations have immediate access to recent inputs and outputs.

## 4. Result rendering and resilience

* Successful responses are rendered as Markdown with the tool name, description, tags, and either prose or syntax-highlighted JSON blocks.
* Errors from HTTP failures, JSON parsing, or MCP error payloads are surfaced with actionable text in chat and logged locally.
* Each invocation records the request/response envelope (or error) to `.mcp-cache/invocations.jsonl`, preserving diagnostics while keeping storage client-side.

## 5. Automation hooks

* The command palette entry **My Business MCP: Invoke Tool** lets users trigger orchestration without opening Copilot Chat.
* The command reuses the same argument prompts and context-aware invocation path, ensuring consistent behaviour regardless of entry point.

## 6. Local `.mcp-cache` directory

* Created automatically in the active workspace root (or the user home directory as a fallback).
* Stores JSON Lines logs that include timestamps, arguments, context snippets, and responses/error messages.
* Safe to prune; the extension will recreate the directory on the next activation. Consider excluding it from source control (see `.gitignore`).

## 7. Testing and documentation

* Jest unit tests cover metadata normalisation, schema prompting, cache behaviour, and activation wiring.
* TypeDoc can generate API documentation from the comprehensive JSDoc comments embedded in the TypeScript sources.

Refer to the inline documentation in `src/` for additional implementation details and extension points.
