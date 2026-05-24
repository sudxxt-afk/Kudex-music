import logging
import redis.asyncio as redis
from fastapi import Request, Response, HTTPException, status
from fastapi_limiter import FastAPILimiter
from .settings import settings

logger = logging.getLogger("kudex")

async def rate_limit_callback(request: Request, response: Response, pexpire: int):
    """Custom callback for rate limiting to log IP and User ID as WARNING."""
    client_ip = getattr(request.state, 'client_ip', request.client.host if request.client else "unknown")
    # request.user is not natively set by get_current_user unless we manually attach it,
    # but we can check if it was attached or just log anonymous.
    user_id = getattr(request.state, 'user_id', "anonymous")
    logger.warning(
        f"Rate limit exceeded (429) for IP: {client_ip}, User: {user_id}. "
        f"Endpoint: {request.url.path}."
    )
    expire_sec = pexpire // 1000 if pexpire >= 1000 else 1
    raise HTTPException(
        status_code=status.HTTP_429_TOO_MANY_REQUESTS,
        detail=f"Too Many Requests. Retry after {expire_sec} seconds.",
        headers={"Retry-After": str(expire_sec)}
    )

async def init_limiter():
    """Initializes the FastAPILimiter with a Redis connection."""
    redis_conn = redis.from_url(settings.REDIS_URL, encoding="utf-8", decode_responses=True)
    await FastAPILimiter.init(redis_conn, http_callback=rate_limit_callback)
