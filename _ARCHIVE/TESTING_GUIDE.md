# Testing Guide

## Overview

This guide provides instructions for testing the current feature set of the MCP Extension after the data-driven architecture cleanup (2025-11-11).

## What Changed Recently

### Chat UX Improvements & Agent Isolation Fix (2025-11-11)

**Completed Changes**:

- **Chat Response Formatting**: Added collapsible workflow details, clean status messages
- **Agent Isolation Restored**: Removed Orchestrator.buildClarificationResponse() - formatting now delegated to CommunicationAgent
- **Vague Query Detection**: Expanded from 12 to 24 phrase patterns
- **Clarification Response**: Added CommunicationAgent.formatClarification() with contextual examples and dynamic category listing
- **Governance Documentation**: Streamlined copilot-instructions.md (291→193 lines, -34%), added MCP tool usage guidance

**Critical Fix**:

- **Agent Isolation Violation**: Orchestrator was formatting user messages directly
- **Resolution**: Added CommunicationAgent.formatClarification() method, removed Orchestrator.buildClarificationResponse()
- **Pattern**: User → Orchestrator (coordinates) → CommunicationAgent (formats) → User

**New Testing Requirements**:

1. **Clarification Flow**: Verify vague queries trigger helpful contextual examples
2. **Collapsible Sections**: Verify workflow details show in <details> tags
3. **Status Messages**: Verify stream.progress() used instead of markdown
4. **Dynamic Categories**: Verify category list comes from UserContextAgent

### Data-Driven Architecture Cleanup (2025-11-11)

**Completed Changes**:

- DataLoaderAgent: Removed hard-coded `loadPersonRecords()` method (now 100% generic)
- UserContext Types: Moved business-specific types to appropriate location with clear documentation
- Communication Types: Created `src/types/communication.types.ts` with all communication type definitions
- CommunicationAgent: Enforced single-class design with static methods (no standalone exported functions)
- Orchestrator: Updated to use `CommunicationAgent.staticMethod()` syntax

**Architectural Principles Enforced**:

1. **No hard-coded business logic**: Framework works with ANY data model
2. **No hard-coded types in agents**: Types centralized in `types/` folder
3. **Single class design**: Each agent has ONE class containing ALL logic
4. **Static utility methods**: Utilities implemented as static methods inside class
5. **Configuration export**: Every agent exports its config

## Agent Structure Verification

### Current Status (as of 2025-11-11 22:45)

🎉 **ALL AGENTS COMPLIANT** - All 7 agents now follow the 2-file pattern (index.ts + agent.config.ts):

- ✅ clarificationAgent
- ✅ communicationAgent
- ✅ dataAgent
- ✅ databaseAgent
- ✅ dataLoaderAgent
- ✅ orchestrator
- ✅ userContextAgent ← **JUST FIXED** (deleted duplicate dataLoader.ts)

### How to Verify Agent Structure

```bash
# Check for agents with more than 2 files
for dir in src/agent/*/; do
  count=$(find "$dir" -maxdepth 1 -name "*.ts" | wc -l)
  if [ $count -gt 2 ]; then
    echo "❌ $(basename $dir): $count files"
  else
    echo "✅ $(basename $dir): $count files"
  fi
done
```

## Testing Data-Driven Design

### Test 1: Verify DataLoaderAgent is Generic

**Objective**: Confirm DataLoaderAgent works with ANY data model, not just "people"

**Steps**:

1. Create test data file with custom schema:

   ```json
   {
     "products": [{ "id": "P001", "name": "Widget", "price": 29.99 }]
   }
   ```

2. Test loading with DataLoaderAgent:

   ```typescript
   import { dataLoaderAgent } from "@agent/dataLoaderAgent";

   // Should work with ANY category name
   const products = await dataLoaderAgent.loadRecords("products");
   ```

3. **Expected Result**: DataLoaderAgent should load the data without knowing anything about "products" schema

**Verification Commands**:

```bash
# Check that DataLoaderAgent has NO business-specific methods
grep -n "loadPersonRecords\|loadDepartment\|loadApplication" src/agent/dataLoaderAgent/index.ts
# Should return: no results

# Check that DataLoaderAgent imports NO business types
grep -n "PersonRecord\|DepartmentRecord\|ApplicationRecord" src/agent/dataLoaderAgent/index.ts
# Should return: no results
```

### Test 2: Verify UserContext Types are Business-Specific

**Objective**: Confirm UserContext types are documented as examples, not framework requirements

**Steps**:

1. Check type documentation:

   ```bash
   grep -A5 "PersonRecord\|DepartmentRecord" src/types/userContext.types.ts
   ```

2. **Expected Result**: Should see comments indicating these are UserContext-specific:

   ```typescript
   /**
    * NOTE: This is a UserContext-specific type for the current data model.
    * Modify or replace these types based on your actual business data.
    */
   ```

3. Test replacing with custom types:
   - Edit `src/types/userContext.types.ts`
   - Replace `PersonRecord` with `ProductRecord`
   - Run tests: `npm test`
   - **Expected**: Framework tests should still pass (only UserContext-specific tests affected)

### Test 3: Verify Communication Types are Centralized

**Objective**: Confirm communication types are NOT in agent files

**Steps**:

```bash
# Check that CommunicationAgent does NOT define types locally
grep -n "export type ResponseType\|export type SeverityLevel\|export interface AgentResponse" src/agent/communicationAgent/index.ts
# Should return: no results (only re-exports allowed)

# Check that types are defined in types/ folder
grep -n "export type ResponseType\|export type SeverityLevel\|export interface AgentResponse" src/types/communication.types.ts
# Should return: 3+ results showing type definitions
```

## Testing Single-Class Design

### Test 4: Verify CommunicationAgent Single-Class Pattern

**Objective**: Confirm CommunicationAgent has NO standalone exported functions

**Steps**:

```bash
# Check for standalone exported functions (should be NONE)
grep -n "^export function create" src/agent/communicationAgent/index.ts
# Should return: no results

# Check for static methods inside class (should be 4)
grep -n "static create" src/agent/communicationAgent/index.ts
# Should return: 4 results (createSuccessResponse, createErrorResponse, createProgressResponse, createPartialResponse)

# Check exports at end of file
grep -n "^export {" src/agent/communicationAgent/index.ts
# Should return: 1 result showing ONLY class, types, and config
```

**Expected Export Pattern**:

```typescript
// ✅ CORRECT: Only class, re-exported types, and config
export class CommunicationAgent { ... }
export type { ResponseType, SeverityLevel, AgentResponse, FormattedResponse };
export { communicationAgentConfig } from "@agent/communicationAgent/agent.config";

// ❌ WRONG: Standalone functions
// export function createSuccessResponse(...) { ... }
```

### Test 5: Verify Orchestrator Uses Static Methods

**Objective**: Confirm Orchestrator calls CommunicationAgent static methods correctly

**Steps**:

```bash
# Check that Orchestrator uses static method syntax
grep -n "CommunicationAgent\.create" src/agent/orchestrator/index.ts
# Should return: 2+ results showing static method calls

# Check that Orchestrator does NOT import standalone functions
grep -n "import.*createSuccessResponse.*from.*communicationAgent" src/agent/orchestrator/index.ts
# Should return: no results
```

**Expected Pattern in Orchestrator**:

```typescript
// ✅ CORRECT: Static method call
const response = CommunicationAgent.createSuccessResponse(data, {
  agentId: "orchestrator",
  operation: "executeTask",
});

// ❌ WRONG: Standalone function call
// const response = createSuccessResponse(data, { ... });
```

## Testing Build & Test Suite

### Test 6: Verify TypeScript Compilation

```bash
# Clean build
npm run clean
npm run compile

# Expected: No errors or warnings
npm run compile 2>&1 | grep -E "(error TS|warning)"
# Should return: empty (no output)
```

### Test 7: Verify Test Suite

```bash
# Run all tests
npm test

# Expected output:
# Test Suites: 1 skipped, 31 passed, 31 of 32 total
# Tests: 1 skipped, 264 passed, 265 total
# Snapshots: 0 total
# Time: ~5s
```

**Test Coverage Check**:

```bash
# Generate coverage report
npm test -- --coverage

# Expected: 100% coverage for lines, branches, functions
# (or documented exceptions with remediation plan)
```

### Test 8: Verify Agent Isolation

**Objective**: Confirm agents do NOT import from other agents

**Critical Rule**: Orchestrator is the ONLY component that coordinates inter-agent communication.

**Steps**:

```bash
# Check for forbidden agent-to-agent imports
grep -rn "from \"@agent/[^\"]*Agent\"" src/agent/*/index.ts | grep -v orchestrator

# Should return: empty (only Orchestrator imports agents)

# Check that agents only import from allowed locations
grep -rn "^import" src/agent/*/index.ts | grep -v "^src/agent/orchestrator" | grep -v "@shared" | grep -v "@internal-types" | grep -v "@config"

# Should return: only imports from @shared/*, @internal-types/*, config
```

**Verification Pattern**:

```typescript
// ✅ ALLOWED in agents:
import { ... } from "@shared/utils";
import { ... } from "@internal-types/communication";
import { ... } from "@config/application.config";

// ❌ FORBIDDEN in agents (except Orchestrator):
// import { ... } from "@agent/communicationAgent";
// import { ... } from "@agent/dataAgent";
```

## Testing End-to-End Workflows

### Test 9: Test Clarification Flow (NEW)

**Objective**: Verify vague queries trigger helpful clarification with contextual examples

**Test Scenario 1: Vague Query Detection**

```bash
# Test via chat participant
# 1. Open VS Code with extension installed
# 2. Open chat panel
# 3. Send vague query: "@usercontext database info"
```

**Expected Response Structure**:

```markdown
I need more specific information to help you. Here are some examples:

**Category Information:**

- "What's in the Applications category?"
- "Show me the People database structure"

**Query Records:**

- "List all applications used by engineering"
- "Find people with Python skills"

**Data Analysis:**

- "What insights can you provide about our tech stack?"
- "Analyze skill distribution"

**Available Categories:**
Applications, People, Departments, Projects

What would you like to know?
```

**Verification Points**:

- [ ] Vague query detected (matches one of 24 patterns)
- [ ] Response shows 3 example categories
- [ ] Available categories dynamically listed from UserContextAgent
- [ ] Markdown formatting used (bold, bullets)
- [ ] No raw data dumps

**Test Scenario 2: Collapsible Workflow Details**

```bash
# Test successful query
# Send: "@usercontext list people"
```

**Expected Response**:

```markdown
[Primary response content here]

<details><summary>Workflow Details (2.3s)</summary>

**Workflow Performance:**

- Classification: 0.5s
- Planning: 0.3s
- Execution: 1.2s
- Formatting: 0.3s

</details>
```

**Verification Points**:

- [ ] Primary response clean and focused
- [ ] Workflow details in collapsible section
- [ ] Performance timings shown
- [ ] User can expand for diagnostics

**Test Scenario 3: Status Messages**

**Expected Behavior**:

- [ ] Processing status shows as progress indicator (not visible markdown)
- [ ] No "🔄 Processing..." text in chat
- [ ] Clean final response without status clutter

### Test 10: Test Workflow Execution

**Objective**: Verify complete workflow from user request → agent processing → formatted response

**Test Scenario**: List entities in UserContext

```typescript
import { Orchestrator } from "@agent/orchestrator";

// Initialize orchestrator
const orchestrator = new Orchestrator();

// Execute workflow
const result = await orchestrator.executeTask("list", "people");

// Expected structure:
// {
//   success: true,
//   data: [...],  // Array of person records
//   message: "...",
//   metadata: {
//     agentId: "userContextAgent",
//     operation: "list",
//     timestamp: "2025-11-11T22:34:30.000Z",
//     ...
//   }
// }
```

**Manual Test via Extension**:

1. Open VS Code with extension installed
2. Open Command Palette: `Ctrl+Shift+P`
3. Run: `User Context MCP: Diagnose IDs`
4. **Expected**: Diagnostic output showing participant ID, mention, command prefix

### Test 11: Test Agent Isolation (UPDATED)

**Objective**: Verify Orchestrator is ONLY agent that coordinates inter-agent communication

**Critical Pattern**: User → Orchestrator → Agent (typed data) → Orchestrator → CommunicationAgent (formats) → User

**Steps**:

```bash
# Check for forbidden agent-to-agent imports
grep -rn "from \"@agent/[^\"]*Agent\"" src/agent/*/index.ts | grep -v orchestrator

# Should return: empty (only Orchestrator imports agents)

# Verify CommunicationAgent.formatClarification exists
grep -n "formatClarification" src/agent/communicationAgent/index.ts

# Should return: 2+ results (method definition and export)

# Verify Orchestrator.buildClarificationResponse REMOVED
grep -n "buildClarificationResponse" src/agent/orchestrator/index.ts

# Should return: empty (method deleted)

# Verify clarification handler delegates to CommunicationAgent
grep -A10 "classification.intent === \"clarification\"" src/agent/orchestrator/index.ts | grep "formatClarification"

# Should return: 1 result showing delegation call
```

**Verification Pattern**:

```typescript
// ✅ CORRECT: Orchestrator coordinates, CommunicationAgent formats
const clarificationResponse: AgentResponse = {
  type: "info",
  metadata: { originalQuestion, availableCategories, matchedIntent },
};
const formatted = this.communicationAgent.formatClarification(
  clarificationResponse
);

// ❌ WRONG: Orchestrator formats directly
// const markdown = this.buildClarificationResponse(question);
```

### Test 12: Test Configuration-Driven Behavior

**Objective**: Verify agents use configuration files for behavior

**Steps**:

1. Check agent config structure:

   ```bash
   cat src/agent/communicationAgent/agent.config.ts
   ```

2. **Expected Content**:

   ```typescript
   export const communicationAgentConfig = {
     name: "Communication Agent",
     description: "...",
     version: "1.0.0",
   };
   ```

3. Test that agent exports config:
   ```bash
   grep -n "export.*communicationAgentConfig" src/agent/communicationAgent/index.ts
   # Should return: 1 result at end of file
   ```

## Regression Testing

### Test 13: Verify No Breaking Changes

**Objective**: Confirm all changes maintain backward compatibility

**Steps**:

```bash
# 1. Check that old test files still pass
npm test -- --testNamePattern="communicationAgent|dataLoaderAgent"

# 2. Verify type exports are still available
node -e "
  import('@agent/communicationAgent/index.js').then(mod => {
    console.log('Exports:', Object.keys(mod));
    // Expected: ['CommunicationAgent', 'ResponseType', 'SeverityLevel', 'AgentResponse', 'FormattedResponse', 'communicationAgentConfig']
  });
"

# 3. Test that Orchestrator integration works
npm test -- orchestrator.test.ts
```

## Known Issues & Workarounds

### Issue 1: userContextAgent Has 3 Files

**Status**: ✅ **RESOLVED** (2025-11-11 22:45)

**Resolution**: Deleted duplicate `dataLoader.ts` file. userContextAgent now follows 2-file pattern like all other agents.

**Verification**:

```bash
# All 7 agents now have exactly 2 files
ls -la src/agent/userContextAgent/
# Output: agent.config.ts, index.ts
```

### Issue 2: ESM Mock Issues in Tests

**Status**: 5 test suites affected (Phase 4.10 marked complete despite this)

**Current Pass Rate**: 264/265 tests passing (1 skipped)

**Workaround**: Skipped tests are not blocking current functionality

## Quick Test Commands

```bash
# Full test suite
npm test

# Build verification
npm run compile

# Lint check
npm run lint

# Coverage report
npm test -- --coverage

# Single agent test
npm test -- communicationAgent.test.ts

# Watch mode for development
npm test -- --watch

# Regenerate docs
npm run docs

# Health check
npm run health
```

## Success Criteria Checklist

Before marking work complete, verify:

- [ ] Build: TypeScript compilation succeeds
- [ ] Tests: All tests pass (264/265, 1 skipped expected)
- [ ] Lint: No errors; JSDoc complete
- [ ] Docs: Regenerated and no orphaned pages
- [ ] Health: Repository health report passes
- [ ] Coverage: 100% or documented exceptions
- [ ] JSDoc: No placeholder language
- [ ] Agent Structure: 2 files per agent (index.ts + agent.config.ts)
- [ ] Agent Isolation: No agent-to-agent imports (except Orchestrator)
- [ ] Single Class: No standalone exported functions
- [ ] Type Centralization: Types in `types/` folder, not in agents
- [ ] **Clarification Flow**: Vague queries trigger helpful examples (NEW)
- [ ] **Chat UX**: Collapsible workflow details, clean status messages (NEW)
- [ ] **Dynamic Categories**: Category list from UserContextAgent (NEW)
