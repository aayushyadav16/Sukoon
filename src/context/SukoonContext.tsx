import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { songs as allSongs, type Song } from "@/data/songs";

const STORAGE_KEY = "sukoon_playlist";

type SukoonValue = {
  currentSong: Song | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  audioError: string | null;
  playlist: Song[];
  playSong: (song: Song, queue?: Song[]) => void;
  togglePlay: () => void;
  pauseSong: () => void;
  nextSong: () => void;
  previousSong: () => void;
  seek: (time: number) => void;
  changeVolume: (value: number) => void;
  addToPlaylist: (song: Song) => void;
  removeFromPlaylist: (id: string) => void;
  clearPlaylist: () => void;
  isInPlaylist: (id: string) => boolean;
};

const SukoonContext = createContext<SukoonValue | null>(null);

export function SukoonProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const queueRef = useRef<Song[]>([]);

  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [audioError, setAudioError] = useState<string | null>(null);
  const [playlist, setPlaylist] = useState<Song[]>([]);

  // Load saved playlist (runs only in the browser, so refresh keeps it).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const savedIds = JSON.parse(raw) as unknown;
      if (!Array.isArray(savedIds)) return;
      const restored = savedIds
        .map((id) => allSongs.find((song) => song.id === id))
        .filter((song): song is Song => Boolean(song));
      setPlaylist(restored);
    } catch {
      // Corrupt data - ignore and start empty.
    }
  }, []);

  const persist = useCallback((next: Song[]) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next.map((song) => song.id)));
    } catch {
      // Storage unavailable (private mode) - app still works in-session.
    }
  }, []);

  // A single audio element for the whole app: only one song can ever play.
  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = "metadata";
      audio.volume = volume;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, [volume]);

  const goToOffset = useCallback(
    (offset: number) => {
      const queue = queueRef.current.length ? queueRef.current : allSongs;
      if (!currentSong || queue.length === 0) return;
      const index = queue.findIndex((song) => song.id === currentSong.id);
      const nextIndex = ((index === -1 ? 0 : index) + offset + queue.length) % queue.length;
      const nextSongItem = queue[nextIndex];
      if (nextSongItem) setCurrentSong(nextSongItem);
    },
    [currentSong],
  );

  const nextSong = useCallback(() => goToOffset(1), [goToOffset]);
  const previousSong = useCallback(() => goToOffset(-1), [goToOffset]);

  const startPlayback = useCallback(
    (song: Song) => {
      const audio = getAudio();
      const songUrl = new URL(song.src, window.location.href).href;

      setAudioError(null);
      setCurrentTime(0);
      setDuration(0);

      if (audio.src !== songUrl) {
        audio.src = song.src;
        audio.load();
      }

      void audio.play().catch(() => {
        setIsPlaying(false);
        setAudioError("Couldn't start playback. Check that your browser supports this MP3 file.");
      });
    },
    [getAudio],
  );

  // Attach listeners once.
  useEffect(() => {
    const audio = getAudio();
    const onTime = () => setCurrentTime(audio.currentTime || 0);
    const onMeta = () => setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    const onEnded = () => nextSong();
    const onError = () => {
      setIsPlaying(false);
      setAudioError(
        "This track's audio file isn't added yet. Drop the .mp3 into public/music to hear it.",
      );
    };
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("error", onError);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("error", onError);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [getAudio, nextSong]);

  // Advance playback for songs selected programmatically (for example, next/previous).
  // A user-initiated click starts playback directly in playSong below, which avoids
  // browser autoplay restrictions caused by waiting for this React effect.
  useEffect(() => {
    if (!currentSong) return;
    const audio = getAudio();
    const songUrl = new URL(currentSong.src, window.location.href).href;
    if (audio.src !== songUrl) startPlayback(currentSong);
  }, [currentSong, getAudio, startPlayback]);

  const playSong = useCallback(
    (song: Song, queue?: Song[]) => {
      if (queue && queue.length) queueRef.current = queue;
      startPlayback(song);
      setCurrentSong(song);
    },
    [startPlayback],
  );

  const pauseSong = useCallback(() => {
    audioRef.current?.pause();
  }, []);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !currentSong) {
      const first = queueRef.current[0] ?? allSongs[0];
      if (first) playSong(first);
      return;
    }
    if (audio.paused) {
      void audio.play().catch(() => {
        setIsPlaying(false);
        setAudioError("Couldn't resume playback. Check that your browser supports this MP3 file.");
      });
    } else {
      audio.pause();
    }
  }, [currentSong, playSong]);

  const seek = useCallback((time: number) => {
    const audio = audioRef.current;
    if (!audio || !Number.isFinite(time)) return;
    audio.currentTime = time;
    setCurrentTime(time);
  }, []);

  const changeVolume = useCallback((value: number) => {
    const safe = Math.min(1, Math.max(0, value));
    setVolume(safe);
    if (audioRef.current) audioRef.current.volume = safe;
  }, []);

  const addToPlaylist = useCallback(
    (song: Song) => {
      setPlaylist((prev) => {
        if (prev.some((item) => item.id === song.id)) return prev;
        const next = [...prev, song];
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const removeFromPlaylist = useCallback(
    (id: string) => {
      setPlaylist((prev) => {
        const next = prev.filter((song) => song.id !== id);
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const clearPlaylist = useCallback(() => {
    setPlaylist([]);
    persist([]);
  }, [persist]);

  const isInPlaylist = useCallback(
    (id: string) => playlist.some((song) => song.id === id),
    [playlist],
  );

  const value = useMemo<SukoonValue>(
    () => ({
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      audioError,
      playlist,
      playSong,
      togglePlay,
      pauseSong,
      nextSong,
      previousSong,
      seek,
      changeVolume,
      addToPlaylist,
      removeFromPlaylist,
      clearPlaylist,
      isInPlaylist,
    }),
    [
      currentSong,
      isPlaying,
      currentTime,
      duration,
      volume,
      audioError,
      playlist,
      playSong,
      togglePlay,
      pauseSong,
      nextSong,
      previousSong,
      seek,
      changeVolume,
      addToPlaylist,
      removeFromPlaylist,
      clearPlaylist,
      isInPlaylist,
    ],
  );

  return <SukoonContext.Provider value={value}>{children}</SukoonContext.Provider>;
}

export function useSukoon(): SukoonValue {
  const context = useContext(SukoonContext);
  if (!context) throw new Error("useSukoon must be used inside SukoonProvider");
  return context;
}

export function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}
