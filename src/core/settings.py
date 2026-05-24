from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "kudex-default-jwt-secret-key-123456"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    REDIS_URL: str = "redis://localhost:6379"

    class Config:
        env_file = ".env"

settings = Settings()
