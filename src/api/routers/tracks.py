from fastapi import APIRouter, Depends
from fastapi_limiter.depends import RateLimiter

from src.db.models import User
from src.api.dependencies import get_current_user

router = APIRouter(prefix="/api/v1", tags=["tracks"])

MOCK_TRACKS = [
    {
        "id": "1",
        "title": "Neon Skyline",
        "artist": "Synthwave Boy",
        "sourceId": "s_1",
        "sourceName": "Spotify",
        "duration": 240,
        "coverUrl": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        "id": "2",
        "title": "Midnight Pulse",
        "artist": "Cyber Glitch",
        "sourceId": "s_2",
        "sourceName": "Yandex",
        "duration": 185,
        "coverUrl": "https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
        "id": "3",
        "title": "Digital Dream",
        "artist": "Future Funk",
        "sourceId": "s_3",
        "sourceName": "Apple Music",
        "duration": 210,
        "coverUrl": "https://images.unsplash.com/photo-1518972553952-c2cb723c3baf?auto=format&fit=crop&q=80&w=300&h=300"
    }
]

@router.get("/tracks")
async def get_tracks(
    current_user: User = Depends(get_current_user)
):
    """Получение демо-треков"""
    return {"tracks": MOCK_TRACKS}

@router.post("/import")
async def import_playlist(
    current_user: User = Depends(get_current_user),
    _ = Depends(RateLimiter(times=3, seconds=60))
):
    """Импорт плейлиста. Ограничение 3 запроса в минуту."""
    return {"message": "Import started", "user_id": current_user.telegram_id, "tracks": MOCK_TRACKS}

@router.get("/search")
async def search_tracks(
    current_user: User = Depends(get_current_user),
    _ = Depends(RateLimiter(times=10, seconds=60))
):
    """Поиск треков. Ограничение 10 запросов в минуту."""
    return {"message": "Search results", "user_id": current_user.telegram_id, "tracks": MOCK_TRACKS}
