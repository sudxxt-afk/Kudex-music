import pytest
from httpx import AsyncClient, ASGITransport
import fakeredis
from fastapi_limiter import FastAPILimiter
import logging

from main import app
from src.core.limiter import rate_limit_callback
from src.core.security import create_access_token
from models import User
from test_api import db_session, client, setup_db, override_get_db



@pytest.mark.asyncio
async def test_rate_limit_import_endpoint(client: AsyncClient, db_session):
    # Добавляем юзера
    test_user = User(telegram_id=999, username="limit_user")
    db_session.add(test_user)
    await db_session.commit()
    
    token = create_access_token({"telegram_id": 999})
    headers = {"Authorization": f"Bearer {token}"}
    
    # Эндпоинт /api/v1/import имеет лимит 3 запроса в минуту
    for _ in range(3):
        response = await client.post("/api/v1/import", headers=headers)
        assert response.status_code == 200
        
    # Четвертый запрос должен отбиваться 429
    response_429 = await client.post("/api/v1/import", headers=headers)
    assert response_429.status_code == 429
    assert "Too Many Requests" in response_429.json()["detail"]
