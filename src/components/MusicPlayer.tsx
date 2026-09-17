import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { formatTime, useSukoon } from "@/context/SukoonContext";

/**
 * The one and only music player. Mounted once in the root layout so a single
 * audio element is shared by every page.
 */
export default function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    audioError,
    togglePlay,
    nextSong,
    previousSong,
    seek,
    changeVolume,
  } = useSukoon();

  if (!currentSong) return null;

  return (
    <section className="sk-player" aria-label="Music player">
      <div className="sk-player-inner">
        <div className="sk-player-now">
          <img
            className="sk-player-art"
            src={currentSong.image}
            alt={`Artwork for ${currentSong.title}`}
            width={54}
            height={54}
          />
          <div style={{ minWidth: 0 }}>
            <p style={{ fontWeight: 700, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {currentSong.title}
            </p>
            <p className="sk-muted" style={{ margin: 0 }}>
              {currentSong.artist}
            </p>
          </div>
        </div>

        <div className="sk-player-controls">
          <button
            type="button"
            className="sk-btn sk-btn-ghost sk-btn-icon"
            onClick={previousSong}
            aria-label="Previous song"
          >
            <SkipBack size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="sk-btn sk-btn-primary sk-btn-icon"
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={20} aria-hidden="true" /> : <Play size={20} aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="sk-btn sk-btn-ghost sk-btn-icon"
            onClick={nextSong}
            aria-label="Next song"
          >
            <SkipForward size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="sk-player-progress">
          <span className="sk-time">{formatTime(currentTime)}</span>
          <input
            className="sk-range"
            type="range"
            min={0}
            max={duration || 0}
            step={0.5}
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.target.value))}
            aria-label="Seek through song"
            disabled={!duration}
          />
          <span className="sk-time">{formatTime(duration)}</span>
        </div>

        <div className="sk-player-volume">
          <Volume2 size={18} aria-hidden="true" />
          <input
            className="sk-range"
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={volume}
            onChange={(event) => changeVolume(Number(event.target.value))}
            aria-label="Volume"
          />
        </div>

        {audioError ? (
          <p className="sk-player-note" role="status">
            {audioError}
          </p>
        ) : null}
      </div>
    </section>
  );
}
