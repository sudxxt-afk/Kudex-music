import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.pool import StaticPool
from sqlalchemy.exc import OperationalError

from src.main import app
from src.db.database import get_db
from src.db.models import Base, User
from src.core.security import verify_token

TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"

# Настройка тестового движка с StaticPool для сохранения ин-мемори данных между коннектами
test_engine = create_async_engine(
    TEST_DATABASE_URL,
    poolclass=StaticPool,
    connect_args={"check_same_thread": False}
)

TestingSessionLocal = async_sessionmaker(
    bind=test_engine,
    class_=AsyncSession,
    expire_on_commit=False
)

# Переопределенная зависимость get_db для тестов
async def override_get_db() -> AsyncSession:
    async with TestingSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise

app.dependency_overrides[get_db] = override_get_db

@pytest_asyncio.fixture(scope="function", autouse=True)
async def setup_db():
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

@pytest_asyncio.fixture(scope="function")
async def db_session(setup_db) -> AsyncSession:
    async with TestingSessionLocal() as session:
        yield session

@pytest_asyncio.fixture(scope="function")
async def client() -> AsyncClient:
    # Инициализируем асинхронный клиент с транспортом нашего ASGI-приложения
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        yield ac

@pytest.mark.asyncio
async def test_login_success(client: AsyncClient, db_session: AsyncSession) -> None:
    # 1. Создаем пользователя в БД
    test_user = User(telegram_id=987654321, username="alex_kudex")
    db_session.add(test_user)
    await db_session.commit()

    # 2. Выполняем POST запрос к логину
    response = await client.post(
        "/auth/login",
        json={"telegram_id": 987654321, "username": "alex_kudex"}
    )

    # 3. Валидируем результат
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["token_type"] == "bearer"

    # Декодируем и проверяем JWT-токен
    payload = verify_token(data["access_token"])
    assert payload is not None
    assert payload["telegram_id"] == 987654321
    assert payload["username"] == "alex_kudex"

@pytest.mark.asyncio
async def test_login_user_not_found(client: AsyncClient) -> None:
    # Запрос с ID пользователя, которого нет в базе данных
    response = await client.post(
        "/auth/login",
        json={"telegram_id": 111111111, "username": "ghost"}
    )

    assert response.status_code == 404
    assert response.json()["detail"] == "User not found"

@pytest.mark.asyncio
async def test_database_error_middleware(client: AsyncClient, db_session: AsyncSession, mocker) -> None:
    # Имитируем ошибку базы данных (OperationalError) при обращении к сессии
    mocker.patch(
        "sqlalchemy.ext.asyncio.AsyncSession.execute",
        side_effect=OperationalError("Mocked connection failure", params=None, orig=None)
    )

    response = await client.post(
        "/auth/login",
        json={"telegram_id": 987654321, "username": "alex_kudex"}
    )

    # Должен возвращаться код 500 с безопасным сообщением
    assert response.status_code == 500
    assert response.json()["detail"] == "A database error occurred. Please try again later."
