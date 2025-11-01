"""Command line interface for running the MCP server."""

from __future__ import annotations

import argparse
import asyncio
import logging
from typing import Optional

from .config import AppConfig, get_config
from .server import CustomMCPServer


def parse_args(argv: Optional[list[str]] = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Launch the custom MCP server")
    parser.add_argument("--host", default=None, help="Host interface to bind")
    parser.add_argument("--port", type=int, default=None, help="TCP port to bind")
    parser.add_argument("--log-level", default="INFO", help="Logging level (INFO, DEBUG, ...)")
    return parser.parse_args(argv)


def main(argv: Optional[list[str]] = None) -> None:
    args = parse_args(argv)

    logging.basicConfig(level=getattr(logging, args.log_level.upper(), logging.INFO))

    config_data = get_config().model_dump()
    if args.host:
        config_data["host"] = args.host
    if args.port:
        config_data["port"] = args.port

    config = AppConfig(**config_data)
    server = CustomMCPServer(config=config)

    try:
        asyncio.run(server.start())
    except KeyboardInterrupt:
        pass


if __name__ == "__main__":
    main()
