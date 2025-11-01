import pytest

from custom_mcp_server.config import AppConfig
from custom_mcp_server.server import JSONRPCError, MethodRegistry


@pytest.mark.asyncio
async def test_dispatch_invokes_registered_handler():
    registry = MethodRegistry()
    config = AppConfig()

    @registry.method("testMethod")
    async def handler(params, *, config):
        return {"result": params["value"]}

    response = await registry.dispatch("testMethod", {"value": 42}, config=config)
    assert response == {"result": 42}


@pytest.mark.asyncio
async def test_dispatch_missing_method_raises_jsonrpc_error():
    registry = MethodRegistry()
    config = AppConfig()

    with pytest.raises(JSONRPCError) as exc:
        await registry.dispatch("unknown", {}, config=config)

    assert exc.value.code == -32601
