---
title: MCP Stdio Architecture
summary: Comprehensive guide to the Model Context Protocol (MCP) stdio server implementation and integration with VS Code
roles: [developer, architect]
associations: [mcp-server, vscode-extension, stdio-communication]
hierarchy: technical-documentation
---

## Summary

This document describes the Model Context Protocol (MCP) stdio server implementation that enables VS Code extensions to communicate with MCP servers via standard input/output streams. This architecture replaces the previous HTTP-based approach for better integration with VS Code's MCP framework.

## Responsibilities

The MCP stdio architecture is responsible for:

- Providing JSON-RPC communication over stdin/stdout
- Implementing the MCP protocol handshake and message handling
- Managing server lifecycle and graceful shutdown
- Integrating with VS Code's MCP server definition providers
- Offering robust error handling and logging capabilities

## Architecture Overview

### Component Structure

```text
VS Code Extension (src/extension/)
├── mcpProvider.ts           # MCP Server Definition Provider
├── index.ts                 # Extension entry point
└── mcpRegistration.ts       # Server registration utilities

MCP Server (src/server/)
├── index.ts                 # Core stdio server implementation
└── embedded.ts              # Extension-embedded server utilities

Agent System (src/agents/)
├── orchestrator.ts          # Intent classification and routing
├── relevantDataManagerAgent.ts  # Data catalogue management
├── databaseAgent.ts         # Query and filtering operations
└── dataAgent.ts            # Insight generation and analysis
```

### Communication Flow

1. **Extension Activation**: VS Code loads the extension and registers the MCP server definition provider
2. **Server Definition**: `McpStdioServerDefinition` provides server configuration to VS Code
3. **Server Launch**: VS Code spawns the Node.js process with stdio communication
4. **Protocol Handshake**: MCP initialize method establishes protocol version and capabilities
5. **Tool Discovery**: VS Code queries available tools via `tools/list` method
6. **Tool Execution**: User requests trigger `tools/call` method with agent orchestration

## Protocol Implementation

### JSON-RPC Message Structure

All communication follows JSON-RPC 2.0 specification over stdio:

```typescript
interface JsonRpcRequest {
  jsonrpc: "2.0";
  id: string | number | null;
  method: string;
  params?: Record<string, unknown>;
}

interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: string | number | null;
  result?: unknown;
  error?: JsonRpcError;
}
```

### Supported Methods

#### `initialize`

Establishes MCP protocol connection and capabilities.

**Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "initialize",
  "params": {
    "protocolVersion": "2024-11-05",
    "capabilities": {}
  }
}
```

**Response:**

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    "protocolVersion": "2024-11-05",
    "capabilities": { "tools": {} },
    "serverInfo": {
      "name": "mybusiness-mcp-server",
      "version": "1.0.0"
    }
  }
}
```

#### `tools/list`

Returns available MCP tools for the business data categories.

**Response:**

```json
{
  "jsonrpc": "2.0",
  "id": 2,
  "result": {
    "tools": [
      {
        "name": "relevant-data.describeCategory",
        "description": "Get schema and metadata for a business category",
        "inputSchema": {
          "type": "object",
          "properties": {
            "categoryId": { "type": "string" }
          }
        }
      }
    ]
  }
}
```

#### `tools/call`

Executes a specific tool with provided arguments.

**Request:**

```json
{
  "jsonrpc": "2.0",
  "id": 3,
  "method": "tools/call",
  "params": {
    "name": "relevant-data.searchRecords",
    "arguments": {
      "categoryId": "people",
      "filters": { "department": "Engineering" }
    }
  }
}
```

## VS Code Integration

### Server Definition Provider

The `McpStdioServerDefinition` class in `src/extension/mcpProvider.ts` implements VS Code's MCP server definition interface:

```typescript
export class McpStdioServerDefinition implements vscode.McpServerDefinition {
  readonly type = "stdio" as const;
  readonly id = "mybusiness-local";
  readonly label = "My Business Embedded Server";

  createServer(): vscode.McpStdioServer {
    return {
      command: "node",
      args: [path.join(__dirname, "../server/index.js"), "--stdio"],
      env: {},
    };
  }
}
```

### Extension Configuration

The extension contributes MCP server definition providers through `package.json`:

```json
{
  "contributes": {
    "mcpServerDefinitionProviders": [
      {
        "id": "mybusiness-local",
        "label": "My Business Embedded Server"
      }
    ]
  }
}
```

## Error Handling and Robustness

### Input Validation

The server performs comprehensive validation of incoming JSON-RPC messages:

- **Protocol Validation**: Ensures `jsonrpc` field is "2.0"
- **Method Validation**: Verifies method is a non-empty string
- **Parameter Validation**: Validates tool names and arguments
- **Tool Existence**: Checks that requested tools are available

### Error Response Codes

The implementation follows JSON-RPC error code conventions:

- `-32600`: Invalid Request (malformed JSON-RPC)
- `-32601`: Method Not Found (unknown method)
- `-32602`: Invalid Params (missing or invalid parameters)
- `-32603`: Internal Error (server-side errors)
- `-32000`: Server Error (tool execution failures)

### Logging and Monitoring

Comprehensive logging with timestamps and context:

```typescript
function logWithTimestamp(
  message: string,
  level: "INFO" | "ERROR" | "DEBUG" = "INFO"
): void {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] [MCP-SERVER] [${level}] ${message}`;
  console.error(logMessage); // Use stderr to avoid interfering with JSON-RPC
}
```

### Graceful Shutdown

The server handles process signals for clean termination:

```typescript
process.on("SIGINT", () => {
  logWithTimestamp("Received SIGINT, shutting down gracefully...", "INFO");
  process.exit(0);
});

process.on("SIGTERM", () => {
  logWithTimestamp("Received SIGTERM, shutting down gracefully...", "INFO");
  process.exit(0);
});
```

## Inputs

The MCP stdio server accepts:

- **JSON-RPC messages** via stdin following MCP protocol specification
- **Command line arguments** for server mode configuration (`--stdio` flag)
- **Environment variables** for configuration (if needed)

## Outputs

The server provides:

- **JSON-RPC responses** via stdout for VS Code communication
- **Structured logging** via stderr for debugging and monitoring
- **Tool results** containing business data insights and analysis

## Error Handling

### Message Processing Errors

```typescript
try {
  const response = await handleJsonRpcMessage(message);
  console.log(JSON.stringify(response));
} catch (error) {
  const errorResponse = {
    jsonrpc: "2.0",
    id: message.id ?? null,
    error: {
      code: -32603,
      message: `Parse error: ${
        error instanceof Error ? error.message : String(error)
      }`,
    },
  };
  console.log(JSON.stringify(errorResponse));
}
```

### Tool Execution Errors

Tool failures are captured and returned as proper JSON-RPC error responses with detailed context:

```typescript
catch (error) {
  const errorMessage = error instanceof Error ? error.message : String(error);
  return {
    jsonrpc: "2.0",
    id: message.id ?? null,
    error: {
      code: -32000,
      message: `Tool execution error: ${errorMessage}`,
      data: { tool: toolName, originalError: errorMessage }
    },
  };
}
```

## Examples

### Starting the Server

```bash
# Development mode (with logging)
npm run server

# VS Code embedded mode (stdio communication)
node ./out/server/index.js --stdio
```

### Testing MCP Communication

```bash
# Test via stdio (manual JSON-RPC)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05"}}' | node ./out/server/index.js --stdio

# Expected response:
{"jsonrpc":"2.0","id":1,"result":{"protocolVersion":"2024-11-05","capabilities":{"tools":{}},"serverInfo":{"name":"mybusiness-mcp-server","version":"1.0.0"}}}
```

### Tool Usage in VS Code

Once the extension is active, users can interact with business data through the chat participant:

```text
@mybusiness Show me all applications in the Engineering department
@mybusiness What company policies apply to remote work?
@mybusiness Find all people with the title "Senior Developer"
```

## Maintenance

### Regular Tasks

1. **Monitor Logs**: Check stderr output for error patterns and performance issues
2. **Update Dependencies**: Keep MCP protocol version current with VS Code releases
3. **Test Tool Integration**: Verify all business data tools work correctly
4. **Performance Monitoring**: Track response times for large data queries

### Troubleshooting

Common issues and solutions:

**Server Not Starting:**

- Check Node.js version compatibility
- Verify compiled output in `out/server/index.js` exists
- Review extension logs in VS Code Developer Tools

**Protocol Errors:**

- Validate JSON-RPC message format
- Check MCP protocol version compatibility
- Review server initialization sequence

**Tool Execution Failures:**

- Verify data files exist in `src/businessData/` directory
- Check agent dependencies and imports
- Review tool parameter validation

### Configuration Updates

The server can be configured through VS Code settings:

```json
{
  "mybusinessMCP.autoRegister": true,
  "mybusinessMCP.registerServerId": "mybusiness",
  "mybusinessMCP.port": 39200
}
```

For stdio mode (current implementation), only `autoRegister` and `registerServerId` are relevant.

## Performance Considerations

- **Memory Management**: Server maintains minimal state; data is loaded on-demand
- **Concurrency**: Single-threaded stdio communication; requests processed sequentially
- **Caching**: Agent system includes shared caching for data snapshots and query results
- **Resource Cleanup**: Proper error handling ensures resources are released on failures

## Security Considerations

- **Input Sanitization**: All user inputs are validated before processing
- **File System Access**: Server only accesses designated data directories
- **Process Isolation**: Runs in separate Node.js process from VS Code extension
- **Error Information**: Error responses avoid exposing sensitive system information
