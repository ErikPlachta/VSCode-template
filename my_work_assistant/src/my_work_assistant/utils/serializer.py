"""my_work_assistant.utils.serializer

Serialization helpers for converting models to dictionaries.
"""
from __future__ import annotations

from typing import Any

from pydantic import BaseModel

__all__ = ["to_dict"]


def to_dict(obj: Any) -> Any:
    """Convert supported objects to dictionaries.

    Args:
        obj: Object to serialize.

    Returns:
        A JSON-serializable structure.

    Example:
        >>> from ..models import Category
        >>> to_dict(Category(id='cat', name='Category'))
        {'id': 'cat', 'name': 'Category', 'description': None}

    """
    if isinstance(obj, BaseModel):
        return obj.model_dump()
    if isinstance(obj, dict):
        return {key: to_dict(value) for key, value in obj.items()}
    if isinstance(obj, (list, tuple, set)):
        return [to_dict(value) for value in obj]
    return obj
