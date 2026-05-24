import logging
from typing import Any, Callable, Coroutine
from fastapi import FastAPI, Depends, HTTPException, Request, Response, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.exc import SQLAlchemyError

from database import get_db, logger
from models import User
from src.core.security import create_access_token, get_current_user
from src.core.limiter import init_limiter
from fastapi_limiter.depends import RateLimiter
from contextlib import asynccontextmanager

@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_limiter()
    yield

app = FastAPI(title="Kudex Music API", lifespan=lifespan)

# Схема для авторизации
class LoginRequest(BaseModel):
    telegram_id: int
    username: str

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

@app.post("/auth/login")
async def login(
    payload: LoginRequest,
    db: AsyncSession = Depends(get_db)
) -> dict[str, str]:
    """Авторизация пользователя Telegram.

    Проверяет наличие пользователя в базе данных и возвращает JWT токен.
    """
    stmt = select(User).where(User.telegram_id == payload.telegram_id)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    # Генерация токена
    token = create_access_token({
        "telegram_id": user.telegram_id,
        "username": user.username or ""
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }

@app.post("/api/v1/import")
async def import_playlist(
    current_user: User = Depends(get_current_user),
    _ = Depends(RateLimiter(times=3, seconds=60))
):
    """Импорт плейлиста. Ограничение 3 запроса в минуту."""
    return {"message": "Import started", "user_id": current_user.telegram_id}

@app.get("/api/v1/search")
async def search_tracks(
    current_user: User = Depends(get_current_user),
    _ = Depends(RateLimiter(times=10, seconds=60))
):
    """Поиск треков. Ограничение 10 запросов в минуту."""
    return {"message": "Search results", "user_id": current_user.telegram_id}

@app.get("/health")
async def health_check():
    """Эндпоинт проверки работоспособности сервиса."""
    return {"status": "ok"}
