"""pydantic

Minimal BaseModel implementation for tests.
"""
from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any, ClassVar, Dict

__all__ = ["BaseModel"]


@dataclass
class BaseModel:
    """Simple data container with dictionary conversion."""

    __fields__: ClassVar[Dict[str, Any]] = {}

    def model_dump(self) -> dict[str, Any]:
        return self.__dict__.copy()

    def __init_subclass__(cls, **kwargs: Any) -> None:
        annotations = getattr(cls, "__annotations__", {})
        defaults = {name: getattr(cls, name, None) for name in annotations}
        cls.__fields__ = defaults

    def __init__(self, **data: Any) -> None:
        for key in self.__fields__:
            value = data.get(key, self.__fields__[key])
            setattr(self, key, value)
