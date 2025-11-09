# MCP Extension Verification Checklist

## ✅ Fixed Issues

1. **Stale Compiled Files**: Removed old `relevantDataManagerAgent.js` that was causing activation errors
2. **Data Directory Path**: Fixed environment variable setting to point to correct userContext location
3. **Agent Exports**: Updated exports to use `UserContextAgent` instead of deprecated agent
4. **Timing Issue**: Environment variable is set before agent instantiation

## 🧪 Testing Steps

### 1. Extension Activation Test

- [ ] Press F5 to start debugging
- [ ] Extension Development Host opens without errors
- [ ] Check console for "🚀 MyBusiness MCP Extension: Starting activation..."
- [ ] Check console for "📁 Set data root to: ..." log
- [ ] Verify no "Data directory does not exist" errors

### 2. Chat Participant Test

- [ ] Open Copilot Chat in Extension Development Host
- [ ] Type `@mybusiness` to see if participant appears
- [ ] Verify chat participant is available

### 3. MCP Registration Test

- [ ] Go to Settings > Language Models > Model Context Protocol
- [ ] Check if "MyBusiness MCP" appears as available server
- [ ] Verify server status shows as connected

### 4. Tool Integration Test

- [ ] In Copilot Chat, ask: "What tools are available?"
- [ ] Test a simple query: "@mybusiness What departments do we have?"

## 🐛 If Issues Persist

1. Check VS Code Developer Console (F1 > Developer: Toggle Developer Tools)
2. Look for any remaining import errors or path issues
3. Verify userContext data exists in `out/userContext/`
4. Check that environment variable is being set correctly

## 📊 Success Criteria

- ✅ Extension activates without errors
- ✅ Chat participant @mybusiness appears
- ✅ MCP server registers with VS Code
- ✅ Tools are accessible via Copilot Chat
