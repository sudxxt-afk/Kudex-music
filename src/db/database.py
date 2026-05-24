import logging
import os
import sys
from collections.abc import AsyncGenerator
from sqlalchemy import event
from sqlalchemy.ext.asyncio import (
    AsyncSession,
    create_async_engine,
    async_sessionmaker,
)

# Настройка логгера в stdout
logger = logging.getLogger("kudex_db")
logger.setLevel(logging.INFO)

# Предотвращаем дублирование обработчиков, если логгер инициализируется повторно
if not logger.handlers:
    handler = logging.StreamHandler(sys.stdout)
    handler.setFormatter(logging.Formatter("[%(asctime)s] %(levelname)s: %(message)s"))
    logger.addHandler(handler)

# URL по умолчанию - асинхронный SQLite в памяти
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///:memory:")

# Создание асинхронного движка
engine = create_async_engine(DATABASE_URL, echo=False)

# Настройка событий для логирования успешного подключения
@event.listens_for(engine.sync_engine, "connect")
def receive_connect(dbapi_connection, connection_record) -> None:
    logger.info("Successfully connected to the database.")

# Настройка событий для логирования ошибок транзакций/выполнения SQL
@event.listens_for(engine.sync_engine, "handle_error")
def handle_exception(context) -> None:
    logger.error(f"Database transaction error: {context.original_exception}")

# Фабрика асинхронных сессий
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """Асинхронный генератор сессий базы данных."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception as e:
            await session.rollback()
            logger.error(f"Transaction rollback due to error: {e}")
            raise
