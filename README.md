# My Business MCP Extension

## Features
- Dynamically discovers all MCP tools from your server.
- Registers `/commands` and `@mentions` in Copilot Chat.
- Auto-prompts arguments via `input_schema`.
- Fully unit-tested, documented, and CI-integrated.

## Commands

/getBusinessMetric
@listProjects

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
