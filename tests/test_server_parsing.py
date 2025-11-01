import json

import pytest

from custom_mcp_server.server import CustomMCPServer, JSONRPCError


def test_parse_request_valid():
    server = CustomMCPServer()
    payload = {"jsonrpc": "2.0", "id": 1, "method": "ping", "params": {}}
    parsed = server._parse_request(json.dumps(payload))
    assert parsed == payload


def test_parse_request_invalid_json():
    server = CustomMCPServer()
    with pytest.raises(JSONRPCError) as exc:
        server._parse_request("not-json")
    assert exc.value.code == -32700
