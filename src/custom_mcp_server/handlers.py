"""Built-in MCP method handlers."""

from __future__ import annotations

from typing import Any, Dict

from .config import AppConfig


async def initialize_handler(params: Dict[str, Any], *, config: AppConfig) -> Dict[str, Any]:
    """Handle the MCP ``initialize`` request.

    The handler responds with the server's capabilities as defined in the MCP
    specification. You can add capabilities (e.g. resources, prompts) by
    extending the ``capabilities`` dictionary.
    """

    capabilities: Dict[str, Any] = {
        "resources": {
            "list": True,
            "read": True,
        },
        "tools": {},
    }

    return {
        "serverInfo": {
            "name": config.name,
            "version": config.version,
            **({"description": config.description} if config.description else {}),
        },
        "capabilities": capabilities,
    }


async def ping_handler(params: Dict[str, Any], *, config: AppConfig) -> Dict[str, Any]:
    """Simple heartbeat handler."""

    return {"pong": params.get("message", "pong")}


async def echo_handler(params: Dict[str, Any], *, config: AppConfig) -> Dict[str, Any]:
    """Echo back payload to demonstrate request/response flow."""

    return {"echo": params}
