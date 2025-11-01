"""my_work_assistant.types.config_types

Typed configuration structures.
"""
from __future__ import annotations

from typing import TypedDict

__all__ = ["GitHubManagerConfig"]


class GitHubManagerConfig(TypedDict):
    """Configuration for GitHub manager behaviour.

    Example:
        >>> GitHubManagerConfig(copilot_instructions_enabled=True,
        ...                     instructions_enabled=True,
        ...                     prompts_enabled=True,
        ...                     chatmodes_enabled=True)
        {'copilot_instructions_enabled': True, 'instructions_enabled': True, 'prompts_enabled': True, 'chatmodes_enabled': True}

    """

    copilot_instructions_enabled: bool
    instructions_enabled: bool
    prompts_enabled: bool
    chatmodes_enabled: bool
