"""my_work_assistant.core.exceptions

Custom exception hierarchy for the MCP server.
"""
from __future__ import annotations

from dataclasses import dataclass

__all__ = [
    "MCPError",
    "ConfigError",
    "ValidationError",
    "SchemaError",
    "GitHubFileError",
    "APIError",
]


@dataclass(slots=True)
class MCPError(Exception):
    """Base exception for the package.

    Args:
        message: Human-readable description of the failure.
        context: Optional structured metadata that explains the failure.

    Example:
        >>> raise MCPError("unexpected")

    """

    message: str
    context: dict[str, object] | None = None

    def __str__(self) -> str:
        """Return the message for display.

        Returns:
            The stored error message.

        Example:
            >>> str(MCPError("boom"))
            'boom'

        """
        return self.message


@dataclass(slots=True)
class ConfigError(MCPError):
    """Raised when configuration loading fails.

    Args:
        message: Explanation of the configuration issue.
        context: Additional metadata about the failure.

    Example:
        >>> raise ConfigError("missing key")

    """


@dataclass(slots=True)
class ValidationError(MCPError):
    """Raised when validation checks fail.

    Args:
        message: Explanation of the validation failure.
        context: Additional metadata about the failure.

    Example:
        >>> raise ValidationError("invalid front matter")

    """


@dataclass(slots=True)
class SchemaError(MCPError):
    """Raised when schema parsing or validation fails.

    Args:
        message: Explanation of the schema issue.
        context: Additional metadata about the failure.

    Example:
        >>> raise SchemaError("unknown field")

    """


@dataclass(slots=True)
class GitHubFileError(MCPError):
    """Raised when GitHub managed files cannot be processed safely.

    Args:
        message: Explanation of the file issue.
        context: Additional metadata about the failure.

    Example:
        >>> raise GitHubFileError("missing disclaimer")

    """


@dataclass(slots=True)
class APIError(MCPError):
    """Raised when API endpoints encounter errors.

    Args:
        message: Explanation of the API issue.
        context: Additional metadata about the failure.

    Example:
        >>> raise APIError("bad request")

    """

