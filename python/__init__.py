"""Python helpers mirroring the extension's MCP tool schemas."""

from .mcp_schemas import (
    JSONSchemaProperty,
    MCPTool,
    SchemaValidationError,
    ToolInputSchema,
    parse_tool,
    parse_tool_list,
)

__all__ = [
    "JSONSchemaProperty",
    "MCPTool",
    "SchemaValidationError",
    "ToolInputSchema",
    "parse_tool",
    "parse_tool_list",
]
