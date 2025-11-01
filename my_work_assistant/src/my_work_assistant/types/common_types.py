"""my_work_assistant.types.common_types

Primitive type aliases shared across modules.
"""
from __future__ import annotations

from typing import Any, TypedDict

__all__ = ["JSONDict"]


class JSONDict(TypedDict, total=False):
    """Dictionary representing generic JSON data.

    Example:
        >>> JSONDict(key='value')
        {'key': 'value'}
    """

    key: Any
