# My Business MCP Extension

## Overview
This VS Code extension connects to your MCP server and automatically registers `/slash` commands and `@mentions` for each MCP tool.

## Setup
1. Install dependencies and compile:
   ```bash
   npm install
   npm run compile
   ```

2. Create a .vsix package:
   ```bash
   npx vsce package
   ```

3. Install in VS Code:
   ```bash
   code --install-extension mybusiness-mcp-extension-1.0.0.vsix
   ```

4. Add settings:
   ```json
   {
     "mybusinessMCP.serverUrl": "https://your-domain.com/",
     "mybusinessMCP.token": "<JWT token>"
   }
   ```

## Use
Inside Copilot Chat:

```
/getBusinessMetric
@listProjects
```

The extension auto-prompts for arguments defined in each MCP tool’s schema.

## Publish or push
```bash
git init
git add .
git commit -m "Initial commit of My Business MCP Extension"
git remote add origin https://github.com/<youruser>/mybusiness-mcp-extension.git
git push -u origin main
```
