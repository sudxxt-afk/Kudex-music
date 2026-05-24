import logging
from typing import Any, Callable, Coroutine
from fastapi import FastAPI, Request, Response, status
from fastapi.responses import JSONResponse
from sqlalchemy.exc import SQLAlchemyError

from src.db.database import logger
from src.core.limiter import init_limiter
from contextlib import asynccontextmanager

from src.api.routers import auth, tracks

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_limiter()
    yield

app = FastAPI(title="Kudex Music API", lifespan=lifespan)

# Middleware для извлечения реального IP-адреса из заголовков Traefik (X-Forwarded-For)
@app.middleware("http")
async def client_ip_middleware(
    request: Request,
    call_next: Callable[[Request], Coroutine[Any, Any, Response]]
) -> Response:
    x_forwarded_for = request.headers.get("x-forwarded-for")
    if x_forwarded_for:
        # X-Forwarded-For может содержать цепочку прокси, реальный клиент - первый в списке
        client_ip = x_forwarded_for.split(",")[0].strip()
    else:
        client_ip = request.client.host if request.client else "unknown"
    
    # Сохраняем IP в состоянии запроса
    request.state.client_ip = client_ip
    
    response: Response = await call_next(request)
    return response

@app.middleware("http")
async def security_headers_middleware(
    request: Request,
    call_next: Callable[[Request], Coroutine[Any, Any, Response]]
) -> Response:
    response: Response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Content-Security-Policy"] = "default-src 'self'; script-src 'self'; connect-src 'self'"
    return response

# Middleware для обработки исключений SQLAlchemy (ошибок БД)
@app.middleware("http")
async def db_exception_middleware(
    request: Request,
    call_next: Callable[[Request], Coroutine[Any, Any, Response]]
) -> Response:
    try:
        response: Response = await call_next(request)
        return response
    except SQLAlchemyError as exc:
        # Логируем полную ошибку с трассировкой стека в stdout (через логгер БД)
        logger.error(f"Database error during request {request.url.path}: {exc}", exc_info=True)
        # Возвращаем клиенту чистую 500 ошибку без деталей реализации
        return JSONResponse(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            content={"detail": "A database error occurred. Please try again later."}
        )

# Обработчик исключений SQLAlchemy для ошибок, перехваченных самим FastAPI в зависимостях
@app.exception_handler(SQLAlchemyError)
async def sqlalchemy_exception_handler(request: Request, exc: SQLAlchemyError) -> JSONResponse:
    logger.error(f"Database exception handler caught error: {exc}", exc_info=True)
    return JSONResponse(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        content={"detail": "A database error occurred. Please try again later."}
    )

app.include_router(auth.router)
app.include_router(tracks.router)

@app.get("/health")
async def health_check():
    """Эндпоинт проверки работоспособности сервиса."""
    return {"status": "ok"}
