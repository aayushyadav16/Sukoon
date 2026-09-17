import { Link } from "@tanstack/react-router";
import { useSukoon } from "@/context/SukoonContext";
import SongCard from "./SongCard";

export default function PlaylistPanel() {
  const { playlist, removeFromPlaylist, clearPlaylist } = useSukoon();

  if (playlist.length === 0) {
    return (
      <div className="sk-empty">
        <span aria-hidden="true">🎧</span>
        <h3 className="sk-h3" style={{ marginTop: "0.5rem" }}>
          Your playlist is empty.
        </h3>
        <p className="sk-muted">Add songs from any vibe and they'll stay here, even after a refresh.</p>
        <Link to="/" hash="vibes" className="sk-btn sk-btn-primary" style={{ marginTop: "1rem" }}>
          Explore Vibes
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center" }}>
        <span className="sk-tag">{playlist.length} saved</span>
        <button type="button" className="sk-btn sk-btn-quiet sk-btn-sm" onClick={clearPlaylist}>
          Clear playlist
        </button>
      </div>

      <div className="sk-song-list">
        {playlist.map((song) => (
          <SongCard key={song.id} song={song} queue={playlist} showVibe onRemove={removeFromPlaylist} />
        ))}
      </div>
    </div>
  );
}
