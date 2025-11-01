"""Common type aliases used across modules."""

from __future__ import annotations

from typing import Any, Dict, Iterable, Mapping, MutableMapping

JSONDict = Dict[str, Any]
JSONMapping = Mapping[str, Any]
MutableJSONMapping = MutableMapping[str, Any]
JSONIterable = Iterable[Any]

__all__ = [
    "JSONDict",
    "JSONMapping",
    "MutableJSONMapping",
    "JSONIterable",
]
