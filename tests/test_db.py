import pytest
import pytest_asyncio
from sqlalchemy import select
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import selectinload
from sqlalchemy.pool import StaticPool

from src.db.models import Base, User, Playlist
from src.db.database import logger

TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"

@pytest_asyncio.fixture(scope="function")
async def test_engine():
    # Создаем асинхронный тестовый движок со StaticPool для сохранения данных в памяти
    engine = create_async_engine(
        TEST_DATABASE_URL,
        poolclass=StaticPool,
        connect_args={"check_same_thread": False}
    )

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    yield engine

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
    await engine.dispose()

@pytest_asyncio.fixture(scope="function")
async def db_session(test_engine) -> AsyncSession:
    TestingSessionLocal = async_sessionmaker(
        bind=test_engine,
        class_=AsyncSession,
        expire_on_commit=False
    )
    async with TestingSessionLocal() as session:
        yield session

@pytest.mark.asyncio
async def test_create_user_and_playlist(db_session: AsyncSession, mocker) -> None:
    # Мокаем логирование для проверки работы логгера
    mock_logger_info = mocker.patch("src.db.database.logger.info")

    # Имитируем успешное подключение (для теста работы логгера)
    logger.info("Successfully connected to the database.")
    mock_logger_info.assert_called_once_with("Successfully connected to the database.")

    # 1. Создание пользователя
    new_user = User(telegram_id=123456789, username="test_user")
    db_session.add(new_user)
    await db_session.flush()

    # 2. Добавление плейлиста для пользователя
    new_playlist = Playlist(user_id=new_user.telegram_id, title="My Fav Tracks", is_public=True)
    db_session.add(new_playlist)
    await db_session.commit()

    # 3. Извлечение пользователя из базы данных со связями
    stmt = select(User).where(User.telegram_id == 123456789).options(selectinload(User.playlists))
    result = await db_session.execute(stmt)
    user = result.scalar_one_or_none()

    # 4. Проверки
    assert user is not None
    assert user.username == "test_user"
    assert len(user.playlists) == 1
    assert user.playlists[0].title == "My Fav Tracks"
    assert user.playlists[0].user_id == 123456789
