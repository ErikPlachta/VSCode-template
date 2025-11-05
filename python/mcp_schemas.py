"""Definitions for MCP tool metadata and invocation schemas.

This module centralises the JSON-schema inspired definitions that the
extension consumes so that Python automation or validation scripts can
share the exact same structure. Every public object includes a rich
docstring so that `pydoc` users obtain helpful documentation.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, Dict, Iterable, Mapping, Optional


class SchemaValidationError(ValueError):
    """Raised when supplied data does not satisfy the MCP schema."""


@dataclass(frozen=True)
class JSONSchemaProperty:
    """Represents a JSON schema property description for a tool argument."""

    type: str
    description: Optional[str] = None
    enum: Optional[Iterable[Any]] = None
    format: Optional[str] = None
    default: Optional[Any] = None

    def validate(self, value: Any) -> None:
        """Validate that *value* conforms to the primitive type definition."""
        if value is None:
            return
        if self.type == "string" and not isinstance(value, str):
            raise SchemaValidationError("Expected a string value.")
        if self.type == "number" and not isinstance(value, (int, float)):
            raise SchemaValidationError("Expected a numeric value.")
        if self.type == "integer" and not isinstance(value, int):
            raise SchemaValidationError("Expected an integer value.")
        if self.type == "boolean" and not isinstance(value, bool):
            raise SchemaValidationError("Expected a boolean value.")
        if self.enum is not None and value not in self.enum:
            raise SchemaValidationError("Value not listed in enumeration.")


@dataclass(frozen=True)
class ToolInputSchema:
    """Describes the arguments that an MCP tool accepts."""

    properties: Mapping[str, JSONSchemaProperty] = field(default_factory=dict)
    required: Iterable[str] = field(default_factory=list)
    description: Optional[str] = None
    additional_properties: bool = False

    def validate_arguments(self, arguments: Mapping[str, Any]) -> Dict[str, Any]:
        """Validate *arguments* against the schema and return a copy."""
        normalised: Dict[str, Any] = {}
        missing = [key for key in self.required if key not in arguments or arguments[key] in (None, "")]
        if missing:
            raise SchemaValidationError(f"Missing required arguments: {', '.join(missing)}")

        for key, value in arguments.items():
            prop = self.properties.get(key)
            if prop is None:
                if not self.additional_properties:
                    raise SchemaValidationError(f"Unexpected argument: {key}")
                normalised[key] = value
                continue
            prop.validate(value)
            normalised[key] = value
        return normalised


@dataclass(frozen=True)
class MCPTool:
    """Container for a single MCP tool description."""

    name: str
    title: str
    description: str
    input_schema: Optional[ToolInputSchema] = None

    def validate_and_normalise_arguments(self, arguments: Mapping[str, Any]) -> Dict[str, Any]:
        """Validate arguments for invocation using the associated schema."""
        if self.input_schema is None:
            return dict(arguments)
        return self.input_schema.validate_arguments(arguments)


def parse_tool(payload: Mapping[str, Any]) -> MCPTool:
    """Parse a mapping into an :class:`MCPTool` instance with validation."""
    required_fields = ["name", "title", "description"]
    for field_name in required_fields:
        if not payload.get(field_name):
            raise SchemaValidationError(f"Missing required tool field: {field_name}")

    input_schema_payload = payload.get("input_schema")
    input_schema: Optional[ToolInputSchema] = None
    if isinstance(input_schema_payload, Mapping):
        properties_payload = input_schema_payload.get("properties") or {}
        properties: Dict[str, JSONSchemaProperty] = {}
        for key, definition in properties_payload.items():
            if not isinstance(definition, Mapping) or "type" not in definition:
                raise SchemaValidationError(f"Invalid property definition for: {key}")
            properties[key] = JSONSchemaProperty(
                type=str(definition["type"]),
                description=definition.get("description"),
                enum=definition.get("enum"),
                format=definition.get("format"),
                default=definition.get("default")
            )
        input_schema = ToolInputSchema(
            properties=properties,
            required=list(input_schema_payload.get("required", [])),
            description=input_schema_payload.get("description"),
            additional_properties=bool(input_schema_payload.get("additionalProperties", False))
        )

    return MCPTool(
        name=str(payload["name"]),
        title=str(payload["title"]),
        description=str(payload["description"]),
        input_schema=input_schema
    )


def parse_tool_list(payload: Iterable[Mapping[str, Any]]) -> Iterable[MCPTool]:
    """Convert an iterable of mappings into :class:`MCPTool` objects."""
    return [parse_tool(item) for item in payload]
