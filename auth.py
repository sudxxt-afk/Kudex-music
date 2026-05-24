import os
from datetime import datetime, timedelta, timezone
import jwt

SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "kudex-default-jwt-secret-key-123456")
ALGORITHM: str = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

def create_access_token(data: dict[str, int | str]) -> str:
    """Создает JWT токен доступа.

    Args:
        data: Данные для включения в payload токена (например, telegram_id, username).

    Returns:
        Закодированная строка JWT токена.
    """
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str) -> dict[str, int | str] | None:
    """Проверяет JWT токен и возвращает декодированные данные.

    Args:
        token: Строка JWT токена.

    Returns:
        Словарь с декодированными данными payload или None, если токен невалиден или просрочен.
    """
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        # Приведение типов для строгого соответствия возвращаемому значению
        return {str(k): v for k, v in payload.items() if isinstance(v, (int, str))}
    except jwt.PyJWTError:
        return None
