import pytest
from httpx import AsyncClient, ASGITransport
from datetime import timedelta

from main import app
from src.core.security import create_access_token, create_refresh_token, verify_token
from src.core.settings import settings
from models import User
from test_api import db_session, client, setup_db, override_get_db

@pytest.mark.asyncio
async def test_access_token_generation():
    data = {"telegram_id": 123}
    token = create_access_token(data)
    payload = verify_token(token, "access")
    assert payload is not None
    assert payload["telegram_id"] == 123
    assert payload["type"] == "access"

@pytest.mark.asyncio
async def test_refresh_token_generation():
    data = {"telegram_id": 123}
    token = create_refresh_token(data)
    payload = verify_token(token, "refresh")
    assert payload is not None
    assert payload["telegram_id"] == 123
    assert payload["type"] == "refresh"
    
@pytest.mark.asyncio
async def test_verify_token_invalid():
    assert verify_token("invalid.token.here") is None
    
@pytest.mark.asyncio
async def test_protected_route_without_token(client: AsyncClient):
    response = await client.post("/api/v1/import")
    assert response.status_code == 401
    assert response.json()["detail"] == "Not authenticated"

@pytest.mark.asyncio
async def test_protected_route_with_valid_token(client: AsyncClient, db_session):
    # Add user
    test_user = User(telegram_id=777, username="test_auth_user")
    db_session.add(test_user)
    await db_session.commit()
    
    token = create_access_token({"telegram_id": 777})
    
    response = await client.post(
        "/api/v1/import",
        headers={"Authorization": f"Bearer {token}"}
    )
    # The route returns 200 on success
    assert response.status_code == 200
    assert response.json()["user_id"] == 777
