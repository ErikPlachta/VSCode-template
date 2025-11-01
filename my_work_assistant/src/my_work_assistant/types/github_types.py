"""GitHub-related typed dictionaries."""

from __future__ import annotations

from typing import List, TypedDict

__all__ = ["InstructionPayload", "ChatModePayload"]


class InstructionPayload(TypedDict):
    """Structure for instruction fragments."""

    title: str
    guidelines: List[str]


class ChatModePayload(TypedDict):
    """Structure describing a chat mode file."""

    name: str
    description: str
    trigger: str
