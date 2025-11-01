"""my_work_assistant.types.github_types

Typed metadata structures for GitHub managed files.
"""
from __future__ import annotations

from typing import TypedDict

__all__ = ["GitHubFileMetadata"]


class GitHubFileMetadata(TypedDict, total=False):
    """Metadata parsed from front matter sections.

    Example:
        >>> GitHubFileMetadata(managed_by_mcp=True)
        {'managed_by_mcp': True}
    """

    managed_by_mcp: bool
    scope: str
    topic: str
    persona: str
