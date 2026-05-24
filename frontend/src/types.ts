export interface Track {
  id: string;
  title: string;
  artist: string;
  sourceId: string;
  sourceName: string;
  duration?: number;
  coverUrl?: string;
}

export interface Playlist {
  id: number;
  userId: number;
  title: string;
  isPublic: boolean;
  tracks: Track[];
}

export interface Queue {
  tracks: Track[];
  currentIndex: number;
}
