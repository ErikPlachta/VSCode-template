# Custom MCP Server Framework

This repository provides a clean starting point for building a custom [Model Context Protocol (MCP)](https://modelcontextprotocol.io/) server that can be consumed by tools such as GitHub Copilot Chat. The template is intentionally lightweight so you can focus on defining the capabilities and resources your Copilot extension should expose.

## Features

- **Event-driven JSON-RPC server** built on top of `websockets` and `asyncio`.
- **Configurable method registry** that makes it easy to add new MCP methods.
- **Structured configuration** using Pydantic models and environment variables.
- **CLI entrypoint** (`custom-mcp-server`) that launches the server with a configurable host/port.
- **Extensible handler layer** for implementing MCP features like resources, prompts, and tools.

## Getting Started

1. Create and activate a Python virtual environment (3.10 or newer).
2. Install the package in editable mode:

   ```bash
   pip install -e .[dev]
   ```

3. Create a `.env` file at the project root if you want to override defaults:

   ```env
   MCP_SERVER_HOST=0.0.0.0
   MCP_SERVER_PORT=8765
   MCP_SERVER_NAME=Custom MCP Server
   MCP_SERVER_VERSION=0.1.0
   ```

4. Launch the server:

   ```bash
   custom-mcp-server
   ```

The server exposes a WebSocket endpoint that speaks MCP's JSON-RPC dialect. The default implementation responds to `initialize`, `ping`, and a sample `echo` method.

## Project Layout

```
src/custom_mcp_server/
├── __init__.py
├── __main__.py
├── config.py
├── handlers.py
└── server.py
```

## Extending the Server

1. **Add a new handler** in `handlers.py` or a new module. Register it with the `MethodRegistry` using the `@registry.method("methodName")` decorator.
2. **Describe new capabilities** in the response returned by `initialize_handler`.
3. **Connect to Copilot Chat** by referencing the WebSocket URL that exposes this MCP server.

See `tests/` for examples of testing handlers with `pytest` and `pytest-asyncio`.

## License

This project is released under the MIT License.
