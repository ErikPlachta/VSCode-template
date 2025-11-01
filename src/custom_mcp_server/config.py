"""Application configuration for the MCP server."""

from __future__ import annotations

from functools import lru_cache
from typing import Optional

from pydantic import Field
from pydantic_settings import BaseSettings, SettingsConfigDict


class AppConfig(BaseSettings):
    """Configuration values for the MCP server.

    Environment variables:
    - ``MCP_SERVER_HOST``: Host interface to bind (default ``127.0.0.1``).
    - ``MCP_SERVER_PORT``: TCP port to listen on (default ``8765``).
    - ``MCP_SERVER_NAME``: Human readable server name (default ``Custom MCP Server``).
    - ``MCP_SERVER_VERSION``: Version reported to MCP clients (default ``0.1.0``).
    - ``MCP_SERVER_DESCRIPTION``: Optional description returned during initialization.
    """

    host: str = Field(default="127.0.0.1", alias="MCP_SERVER_HOST")
    port: int = Field(default=8765, alias="MCP_SERVER_PORT")
    name: str = Field(default="Custom MCP Server", alias="MCP_SERVER_NAME")
    version: str = Field(default="0.1.0", alias="MCP_SERVER_VERSION")
    description: Optional[str] = Field(default=None, alias="MCP_SERVER_DESCRIPTION")

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        populate_by_name=True,
    )


@lru_cache
def get_config() -> AppConfig:
    """Return a cached ``AppConfig`` instance."""

    return AppConfig()
