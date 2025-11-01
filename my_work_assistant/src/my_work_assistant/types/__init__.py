"""my_work_assistant.types.__init__

Expose shared type aliases and TypedDict definitions.
"""
from __future__ import annotations

from .common_types import JSONDict
from .config_types import GitHubManagerConfig
from .github_types import GitHubFileMetadata
from .model_types import CategoryPayload

__all__ = [
    "JSONDict",
    "GitHubManagerConfig",
    "GitHubFileMetadata",
    "CategoryPayload",
]
