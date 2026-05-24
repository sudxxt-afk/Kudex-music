import pytest
import pytest_asyncio
import fakeredis
from fastapi_limiter import FastAPILimiter
from src.core.limiter import rate_limit_callback

@pytest_asyncio.fixture(autouse=True, scope="function")
async def setup_limiter():
    redis_conn = fakeredis.FakeAsyncRedis(decode_responses=True)
    await FastAPILimiter.init(redis_conn, http_callback=rate_limit_callback)
    yield
    await FastAPILimiter.close()
    await redis_conn.close()
