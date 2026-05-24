from datetime import datetime
from pydantic import BaseModel, ConfigDict

class UserBase(BaseModel):
    telegram_id: int
    username: str | None = None

class UserCreate(UserBase):
    pass

class UserResponse(UserBase):
    model_config = ConfigDict(from_attributes=True)

    telegram_id: int
    username: str | None
    created_at: datetime

class PlaylistBase(BaseModel):
    title: str
    is_public: bool = True

class PlaylistCreate(PlaylistBase):
    pass

class PlaylistResponse(PlaylistBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    user_id: int

class TrackBase(BaseModel):
    title: str
    artist: str
    source_id: str
    source_name: str

class TrackCreate(TrackBase):
    pass

class TrackResponse(TrackBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    playlist_id: int
