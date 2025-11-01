"""Core server implementation for the custom MCP server."""

from __future__ import annotations

import asyncio
import json
import logging
from dataclasses import dataclass
from typing import Any, Awaitable, Callable, Dict, Optional

import websockets
from websockets.server import WebSocketServerProtocol

from .config import AppConfig, get_config
from . import handlers

logger = logging.getLogger(__name__)


@dataclass
class JSONRPCError(Exception):
    """Represents a JSON-RPC error as specified by the MCP protocol."""

    code: int
    message: str
    data: Optional[Dict[str, Any]] = None

    def to_dict(self) -> Dict[str, Any]:
        payload = {"code": self.code, "message": self.message}
        if self.data is not None:
            payload["data"] = self.data
        return payload


HandlerType = Callable[[Dict[str, Any]], Awaitable[Dict[str, Any]]]


class MethodRegistry:
    """Registry that maps MCP method names to async callables."""

    def __init__(self) -> None:
        self._methods: Dict[str, Callable[..., Awaitable[Dict[str, Any]]]] = {}

    def method(self, name: str) -> Callable[[Callable[..., Awaitable[Dict[str, Any]]]], Callable[..., Awaitable[Dict[str, Any]]]]:
        """Decorator used to register a handler under ``name``."""

        def decorator(func: Callable[..., Awaitable[Dict[str, Any]]]) -> Callable[..., Awaitable[Dict[str, Any]]]:
            if name in self._methods:
                raise ValueError(f"Handler already registered for method '{name}'")
            self._methods[name] = func
            return func

        return decorator

    def register(self, name: str, func: Callable[..., Awaitable[Dict[str, Any]]]) -> None:
        """Programmatically register a new handler."""

        if name in self._methods:
            raise ValueError(f"Handler already registered for method '{name}'")
        self._methods[name] = func

    def get(self, name: str) -> Optional[Callable[..., Awaitable[Dict[str, Any]]]]:
        return self._methods.get(name)

    async def dispatch(self, name: str, params: Dict[str, Any], *, config: AppConfig) -> Dict[str, Any]:
        handler = self.get(name)
        if handler is None:
            raise JSONRPCError(code=-32601, message=f"Method '{name}' not found")
        return await handler(params, config=config)


class CustomMCPServer:
    """Asynchronous MCP server that speaks JSON-RPC over websockets."""

    def __init__(self, *, config: Optional[AppConfig] = None, registry: Optional[MethodRegistry] = None) -> None:
        self.config = config or get_config()
        self.registry = registry or MethodRegistry()
        self._server: Optional[websockets.server.Serve] = None
        self._register_builtin_handlers()

    def _register_builtin_handlers(self) -> None:
        for name, handler in {
            "initialize": handlers.initialize_handler,
            "ping": handlers.ping_handler,
            "echo": handlers.echo_handler,
        }.items():
            if self.registry.get(name) is None:
                self.registry.register(name, handler)

    async def _handle_connection(self, websocket: WebSocketServerProtocol) -> None:
        logger.info("New MCP client connected from %s", websocket.remote_address)
        handshake_complete = False
        async for raw_message in websocket:
            try:
                request = self._parse_request(raw_message)
                logger.debug("Received request: %s", request)
            except JSONRPCError as exc:
                await websocket.send(json.dumps(self._format_error(None, exc)))
                continue

            request_id = request.get("id")
            method = request.get("method")
            params = request.get("params", {})

            if not handshake_complete:
                if method != "initialize":
                    error = JSONRPCError(
                        code=-32000,
                        message="Client must call 'initialize' before any other method",
                    )
                    await websocket.send(json.dumps(self._format_error(request_id, error)))
                    continue
                handshake_complete = True

            try:
                result = await self.registry.dispatch(method, params, config=self.config)
            except JSONRPCError as exc:
                response = self._format_error(request_id, exc)
            except Exception as exc:  # pragma: no cover - catch-all safety
                logger.exception("Unhandled exception while processing method '%s'", method)
                error = JSONRPCError(code=-32603, message="Internal server error", data={"detail": str(exc)})
                response = self._format_error(request_id, error)
            else:
                response = self._format_response(request_id, result)

            if request_id is not None:
                await websocket.send(json.dumps(response))

        logger.info("Client disconnected: %s", websocket.remote_address)

    def _parse_request(self, raw_message: str) -> Dict[str, Any]:
        try:
            payload = json.loads(raw_message)
        except json.JSONDecodeError as exc:
            raise JSONRPCError(code=-32700, message="Parse error", data={"detail": str(exc)}) from exc

        if not isinstance(payload, dict):
            raise JSONRPCError(code=-32600, message="Invalid request")

        if payload.get("jsonrpc") != "2.0":
            raise JSONRPCError(code=-32600, message="Invalid JSON-RPC version")

        if "method" not in payload:
            raise JSONRPCError(code=-32600, message="Missing method field")

        if "params" in payload and not isinstance(payload["params"], dict):
            raise JSONRPCError(code=-32602, message="Invalid params")

        return payload

    def _format_response(self, request_id: Any, result: Dict[str, Any]) -> Dict[str, Any]:
        return {"jsonrpc": "2.0", "id": request_id, "result": result}

    def _format_error(self, request_id: Any, error: JSONRPCError) -> Dict[str, Any]:
        return {"jsonrpc": "2.0", "id": request_id, "error": error.to_dict()}

    async def start(self) -> None:
        logger.info("Starting MCP server on %s:%s", self.config.host, self.config.port)
        self._server = await websockets.serve(self._handle_connection, self.config.host, self.config.port)
        await self._server.wait_closed()

    async def stop(self) -> None:
        if self._server is not None:
            self._server.close()
            await self._server.wait_closed()
            logger.info("MCP server stopped")

    def run(self) -> None:
        asyncio.run(self.start())


def create_server() -> CustomMCPServer:
    """Convenience factory to create a server using environment configuration."""

    return CustomMCPServer()
