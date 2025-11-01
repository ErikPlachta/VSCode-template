"""Pydantic models representing workspace entities."""

from __future__ import annotations

from typing import List

from pydantic import BaseModel, Field

__all__ = [
    "CategoryModel",
    "LabelModel",
    "GroupModel",
    "PersonModel",
    "RoleModel",
    "PlatformModel",
    "DataSetModel",
]


class CategoryModel(BaseModel):
    """Represents a category definition."""

    id: str = Field(..., description="Unique category identifier")
    name: str = Field(..., description="Human readable category name")


class LabelModel(BaseModel):
    """Represents a label definition."""

    id: str
    name: str


class GroupModel(BaseModel):
    """Represents a group of members."""

    id: str
    members: List[str] = Field(default_factory=list)


class PersonModel(BaseModel):
    """Represents a person."""

    id: str
    roles: List[str] = Field(default_factory=list)


class RoleModel(BaseModel):
    """Represents a role definition."""

    id: str
    permissions: List[str] = Field(default_factory=list)


class PlatformModel(BaseModel):
    """Represents a platform configuration."""

    name: str
    url: str


class DataSetModel(BaseModel):
    """Represents a dataset and its category associations."""

    id: str
    categories: List[str]
