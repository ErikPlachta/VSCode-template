"""my_work_assistant.types.model_types

Typed payloads representing serialized models.
"""
from __future__ import annotations

from typing import TypedDict

__all__ = ["CategoryPayload"]


class CategoryPayload(TypedDict):
    """Serialized representation of a category.

    Example:
        >>> CategoryPayload(id='cat', name='Category', description='Desc')
        {'id': 'cat', 'name': 'Category', 'description': 'Desc'}

    """

    id: str
    name: str
    description: str | None
