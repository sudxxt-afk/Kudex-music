import urllib.parse
import json
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from src.db.database import get_db
from src.db.models import User
from src.core.security import create_access_token, create_refresh_token, verify_token

router = APIRouter(prefix="/auth", tags=["auth"])

class LoginRequest(BaseModel):
    telegram_id: int
    username: str

@router.post("/login")
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

    token = create_access_token({
        "telegram_id": user.telegram_id,
        "username": user.username or ""
    })

    return {
        "access_token": token,
        "token_type": "bearer"
    }

class TelegramLoginRequest(BaseModel):
    initData: str

@router.post("/telegram-login")
async def telegram_login(
    payload: TelegramLoginRequest,
    db: AsyncSession = Depends(get_db)
):
    try:
        if payload.initData == "TEST_LOCAL":
            telegram_id = 999999
            username = "local_dev_user"
        else:
            parsed = dict(urllib.parse.parse_qsl(payload.initData))
            user_data = json.loads(parsed.get('user', '{}'))
            telegram_id = user_data.get('id', 0)
            username = user_data.get('username', 'unknown')
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid initData")
        
    if not telegram_id:
        raise HTTPException(status_code=400, detail="No user data in initData")

    stmt = select(User).where(User.telegram_id == telegram_id)
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()

    if not user:
        user = User(telegram_id=telegram_id, username=username)
        db.add(user)
        await db.commit()
        await db.refresh(user)

    access_token = create_access_token({
        "telegram_id": user.telegram_id,
        "username": user.username or ""
    })
    refresh_token = create_refresh_token({"telegram_id": user.telegram_id})

    return {
        "access_token": access_token,
        "refresh_token": refresh_token,
        "token_type": "bearer"
    }

class RefreshRequest(BaseModel):
    refresh_token: str

@router.post("/refresh")
async def refresh_token_endpoint(
    payload: RefreshRequest,
    db: AsyncSession = Depends(get_db)
):
    token_data = verify_token(payload.refresh_token, token_type="refresh")
    if not token_data or "telegram_id" not in token_data:
        raise HTTPException(status_code=401, detail="Invalid refresh token")
    
    stmt = select(User).where(User.telegram_id == int(token_data["telegram_id"]))
    result = await db.execute(stmt)
    user = result.scalar_one_or_none()
    
    if not user:
        raise HTTPException(status_code=401, detail="User not found")
        
    access_token = create_access_token({
        "telegram_id": user.telegram_id,
        "username": user.username or ""
    })
    new_refresh_token = create_refresh_token({"telegram_id": user.telegram_id})
    
    return {
        "access_token": access_token,
        "refresh_token": new_refresh_token,
        "token_type": "bearer"
    }
