"""fastapi

Minimal stub implementation for testing without external dependency.
"""
from __future__ import annotations

import asyncio
from typing import Any, Awaitable, Callable, Dict, Tuple

__all__ = ["FastAPI", "HTTPException"]


class HTTPException(Exception):
    """Simple HTTP exception capturing status code and detail."""

    def __init__(self, status_code: int, detail: Any) -> None:
        super().__init__(detail)
        self.status_code = status_code
        self.detail = detail


class FastAPI:
    """Very small subset of the FastAPI API for unit testing."""

    def __init__(self, title: str = "") -> None:
        self.title = title
        self.routes: Dict[Tuple[str, str], Callable[..., Awaitable[Any]]] = {}
        self.exception_handlers: Dict[type[Exception], Callable[[Any, Exception], Any]] = {}

    def post(self, path: str) -> Callable[[Callable[..., Awaitable[Any]]], Callable[..., Awaitable[Any]]]:
        return self._register("POST", path)

    def get(self, path: str) -> Callable[[Callable[..., Awaitable[Any]]], Callable[..., Awaitable[Any]]]:
        return self._register("GET", path)

    def exception_handler(self, exc_type: type[Exception]) -> Callable[[Callable[[Any, Exception], Any]], Callable[[Any, Exception], Any]]:
        def decorator(handler: Callable[[Any, Exception], Any]) -> Callable[[Any, Exception], Any]:
            self.exception_handlers[exc_type] = handler
            return handler

        return decorator

    def _register(self, method: str, path: str) -> Callable[[Callable[..., Awaitable[Any]]], Callable[..., Awaitable[Any]]]:
        def decorator(func: Callable[..., Awaitable[Any]]) -> Callable[..., Awaitable[Any]]:
            self.routes[(method.upper(), path)] = func
            return func

        return decorator

    def _call(self, method: str, path: str, body: Any | None = None) -> Tuple[int, Any]:
        handler = self.routes.get((method.upper(), path))
        if handler is None:
            return 404, {"detail": "Not Found"}
        try:
            result = handler()  # type: ignore[arg-type]
            if asyncio.iscoroutine(result):
                result = asyncio.run(result)
            return 200, result
        except HTTPException as exc:
            return exc.status_code, {"detail": exc.detail}

