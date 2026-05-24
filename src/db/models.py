from datetime import datetime
from sqlalchemy import BigInteger, ForeignKey, func
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship

class Base(DeclarativeBase):
    """Базовый класс для всех ORM моделей."""
    pass

class User(Base):
    """Модель пользователя Telegram."""
    __tablename__ = "users"

    telegram_id: Mapped[int] = mapped_column(BigInteger, primary_key=True, autoincrement=False)
    username: Mapped[str | None] = mapped_column(nullable=True)
    created_at: Mapped[datetime] = mapped_column(server_default=func.now())

    # Связи
    playlists: Mapped[list["Playlist"]] = relationship(
        back_populates="user",
        cascade="all, delete-orphan",
        lazy="selectin"
    )

    def __repr__(self) -> str:
        return f"<User telegram_id={self.telegram_id} username={self.username}>"

class Playlist(Base):
    """Модель музыкального плейлиста."""
    __tablename__ = "playlists"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_id: Mapped[int] = mapped_column(ForeignKey("users.telegram_id", ondelete="CASCADE"), nullable=False)
    title: Mapped[str] = mapped_column(nullable=False)
    is_public: Mapped[bool] = mapped_column(default=True, nullable=False)

    # Связи
    user: Mapped["User"] = relationship(back_populates="playlists")
    tracks: Mapped[list["Track"]] = relationship(
        back_populates="playlist",
        cascade="all, delete-orphan",
        lazy="selectin"
    )

    def __repr__(self) -> str:
        return f"<Playlist id={self.id} title='{self.title}' user_id={self.user_id}>"

class Track(Base):
    """Модель музыкального трека."""
    __tablename__ = "tracks"

    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    playlist_id: Mapped[int] = mapped_column(ForeignKey("playlists.id", ondelete="CASCADE"), nullable=False)
    title: Mapped[str] = mapped_column(nullable=False)
    artist: Mapped[str] = mapped_column(nullable=False)
    source_id: Mapped[str] = mapped_column(nullable=False)
    source_name: Mapped[str] = mapped_column(nullable=False)

    # Связи
    playlist: Mapped["Playlist"] = relationship(back_populates="tracks")

    def __repr__(self) -> str:
        return f"<Track id={self.id} title='{self.title}' artist='{self.artist}'>"


# Демонстрация PEP 695: Обобщенный CRUD-хелпер для моделей
class ModelHelper[T: Base]:
    """Вспомогательный класс для работы с моделями на основе PEP 695."""
    def __init__(self, model: type[T]) -> None:
        self.model = model

    def get_model_name(self) -> str:
        return self.model.__name__
