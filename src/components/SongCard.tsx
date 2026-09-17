import { Check, Download, Heart, Pause, Play, Trash2 } from "lucide-react";
import { useSukoon } from "@/context/SukoonContext";
import type { Song } from "@/data/songs";

type Props = {
  song: Song;
  queue: Song[];
  showVibe?: boolean;
  onRemove?: (id: string) => void;
};

export default function SongCard({ song, queue, showVibe = false, onRemove }: Props) {
  const { currentSong, isPlaying, playSong, pauseSong, addToPlaylist, isInPlaylist } = useSukoon();

  const isCurrent = currentSong?.id === song.id;
  const isThisPlaying = isCurrent && isPlaying;
  const saved = isInPlaylist(song.id);

  return (
    <article className={`sk-song ${isCurrent ? "is-current" : ""}`}>
      <img
        className="sk-song-art"
        src={song.image}
        alt={`Artwork for ${song.title}`}
        loading="lazy"
        width={62}
        height={62}
      />

      <div className="sk-song-meta">
        <p style={{ fontWeight: 700 }}>{song.title}</p>
        <p className="sk-muted">{song.artist}</p>
        {showVibe ? (
          <span className="sk-tag" style={{ marginTop: "0.3rem" }}>
            {song.category}
          </span>
        ) : null}
      </div>

      <div className="sk-song-actions">
        <button
          type="button"
          className="sk-btn sk-btn-primary sk-btn-sm"
          onClick={() => (isThisPlaying ? pauseSong() : playSong(song, queue))}
          aria-label={isThisPlaying ? `Pause ${song.title}` : `Play ${song.title}`}
        >
          {isThisPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          {isThisPlaying ? "Pause" : "Play"}
        </button>

        {onRemove ? (
          <button
            type="button"
            className="sk-btn sk-btn-quiet sk-btn-sm"
            onClick={() => onRemove(song.id)}
            aria-label={`Remove ${song.title} from playlist`}
          >
            <Trash2 size={16} aria-hidden="true" /> Remove
          </button>
        ) : (
          <button
            type="button"
            className="sk-btn sk-btn-ghost sk-btn-sm"
            onClick={() => addToPlaylist(song)}
            disabled={saved}
            aria-label={saved ? `${song.title} is already in your playlist` : `Add ${song.title} to playlist`}
          >
            {saved ? <Check size={16} aria-hidden="true" /> : <Heart size={16} aria-hidden="true" />}
            {saved ? "Saved" : "Add"}
          </button>
        )}

        <a
          className="sk-btn sk-btn-quiet sk-btn-sm"
          href={song.src}
          download
          aria-label={`Download ${song.title}`}
        >
          <Download size={16} aria-hidden="true" /> Download
        </a>
      </div>
    </article>
  );
}
