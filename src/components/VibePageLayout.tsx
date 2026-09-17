import { Link } from "@tanstack/react-router";
import { Headphones, ListMusic } from "lucide-react";
import { getSongsByCategory, getVibe, type VibeId } from "@/data/songs";
import SongCard from "./SongCard";
import { useSukoon } from "@/context/SukoonContext";

/** Shared layout for all four vibe pages - one consistent Sukoon look. */
export default function VibePageLayout({ vibeId }: { vibeId: VibeId }) {
  const vibe = getVibe(vibeId);
  const list = getSongsByCategory(vibeId);
  const { playSong } = useSukoon();
  const first = list[0];

  return (
    <div className={`sk-page-tint sk-page-${vibeId}`}>
      <div className="sk-container">
        <header className="sk-vibe-hero sk-animate-in">
          <img src={vibe.image} alt={`${vibe.title} background`} width={1536} height={1024} />
          <div className="sk-vibe-hero-body">
            <span className="sk-eyebrow">{vibe.emoji} Sukoon vibe</span>
            <h1 className="sk-h1">{vibe.title}</h1>
            <p className="sk-lead">{vibe.subheading}</p>
            <div className="sk-hero-actions">
              <button
                type="button"
                className="sk-btn sk-btn-primary"
                onClick={() => first && playSong(first, list)}
                disabled={!first}
              >
                <Headphones size={16} aria-hidden="true" /> Play this vibe
              </button>
              <Link to="/playlist" className="sk-btn sk-btn-ghost">
                <ListMusic size={16} aria-hidden="true" /> My playlist
              </Link>
            </div>
          </div>
        </header>

        <section className="sk-section" aria-label={`${vibe.title} songs`}>
          <div className="sk-section-head">
            <h2 className="sk-h2">Songs in this vibe</h2>
            <p className="sk-muted">
              {list.length} tracks. Play, save to your playlist or download for offline listening.
            </p>
          </div>

          {list.length === 0 ? (
            <div className="sk-empty">
              <span aria-hidden="true">🎵</span>
              <p className="sk-muted">No songs added to this vibe yet.</p>
            </div>
          ) : (
            <div className="sk-song-list">
              {list.map((song) => (
                <SongCard key={song.id} song={song} queue={list} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
