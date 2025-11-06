# My Business MCP Extension

## Features
- Dynamically discovers all MCP tools from your server with enriched metadata and schema validation.
- Registers `/commands`, `@mentions`, and the **My Business MCP: Invoke Tool** automation command in VS Code.
- Maintains conversational context for multi-turn orchestration, automatically persisting a rolling history per tool.
- Renders MCP responses as rich markdown within Copilot Chat, including structured JSON when appropriate.
- Captures invocation logs inside a local `.mcp-cache` directory to keep diagnostics client-side.
- Ships with a mock multi-agent orchestration sandbox that exercises people search, document operations, and guidance flows using local dummy data.
- Persists cross-tool shared cache artefacts so generated context can be re-used between agents without remaining in memory.
- Fully unit-tested, documented, and CI-integrated.

## Commands

- `/getBusinessMetric`
- `@listProjects`
- Command Palette → **My Business MCP: Invoke Tool**

See [`docs/orchestration.md`](docs/orchestration.md) for a deep dive into the orchestration lifecycle, cache layout, and extension architecture.

## Scripts
```bash
npm run compile    # build TypeScript
npm test           # run Jest tests
npm run docs       # generate Typedoc markdown docs
npm run package    # build VSIX package

GitHub CI
•test.yml → validates build & test
•docs.yml → publishes typedoc output to GitHub Pages

---

## ✅ **Expected Outcome**
- A complete, buildable VS Code MCP extension repository.  
- Unit tests run with Jest via `npm test`.  
- Typedoc generates Markdown docs into `/docs`.  
- GitHub Actions:
  - Runs tests on each push.
  - Publishes `/docs` to GitHub Pages automatically.  
- JSDoc present across all files for maintainability.  

---

**End of Prompt — `mybusiness-mcp-extension`**
