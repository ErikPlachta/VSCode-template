"""Tests for the Python MCP schema helpers."""

from __future__ import annotations

import inspect
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from python.mcp_schemas import (
    JSONSchemaProperty,
    MCPTool,
    SchemaValidationError,
    ToolInputSchema,
    parse_tool,
    parse_tool_list,
)


def test_docstrings_present() -> None:
    """Ensure that public objects expose documentation strings."""

    targets = [
        JSONSchemaProperty,
        MCPTool,
        ToolInputSchema,
        parse_tool,
        parse_tool_list,
    ]
    for target in targets:
        assert inspect.getdoc(target), f"Missing docstring for {target}"  # pragma: no cover


def test_tool_argument_validation_success() -> None:
    """The validation helper should return the provided arguments."""

    schema = ToolInputSchema(
        properties={
            "query": JSONSchemaProperty(type="string"),
            "limit": JSONSchemaProperty(type="integer"),
        },
        required=["query"],
        additional_properties=False,
    )
    tool = MCPTool(name="search", title="Search", description="Run search", input_schema=schema)
    validated = tool.validate_and_normalise_arguments({"query": "hello", "limit": 10})
    assert validated == {"query": "hello", "limit": 10}


def test_tool_argument_validation_errors() -> None:
    """Missing or unexpected arguments should raise validation errors."""

    schema = ToolInputSchema(
        properties={"query": JSONSchemaProperty(type="string")},
        required=["query"],
        additional_properties=False,
    )
    tool = MCPTool(name="search", title="Search", description="Run search", input_schema=schema)

    with pytest.raises(SchemaValidationError):
        tool.validate_and_normalise_arguments({})

    with pytest.raises(SchemaValidationError):
        tool.validate_and_normalise_arguments({"query": "hi", "extra": True})


def test_parse_tool() -> None:
    """Parsing should build structured objects with nested schema."""

    tool = parse_tool(
        {
            "name": "search",
            "title": "Search",
            "description": "Run search",
            "input_schema": {
                "properties": {
                    "query": {"type": "string"},
                    "limit": {"type": "integer"},
                },
                "required": ["query"],
                "additionalProperties": False,
            },
        }
    )

    assert isinstance(tool.input_schema, ToolInputSchema)
    assert "query" in tool.input_schema.properties


def test_parse_tool_rejects_invalid_payload() -> None:
    """Invalid payloads should be rejected with informative errors."""

    with pytest.raises(SchemaValidationError):
        parse_tool({"title": "Missing name", "description": "bad"})

    with pytest.raises(SchemaValidationError):
        parse_tool(
            {
                "name": "bad",
                "title": "Bad",
                "description": "Bad",
                "input_schema": {"properties": {"value": {"description": "no type"}}},
            }
        )


def test_parse_tool_list() -> None:
    """The list helper should parse each tool independently."""

    tools = parse_tool_list([
        {"name": "a", "title": "A", "description": "A"},
        {"name": "b", "title": "B", "description": "B"},
    ])
    assert len(list(tools)) == 2
