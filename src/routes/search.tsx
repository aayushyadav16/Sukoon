import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import SearchBar from "@/components/SearchBar";
import SongCard from "@/components/SongCard";
import { songs, vibes } from "@/data/songs";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search songs and moods | Sukoon" },
      {
        name: "description",
        content: "Search Sukoon by mood, song, artist or vibe and start listening instantly.",
      },
      { property: "og:title", content: "Search songs and moods | Sukoon" },
      { property: "og:description", content: "Type a feeling like calm, love or travel and find your music." },
    ],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return songs;
    return songs.filter((song) =>
      [song.title, song.artist, song.category, song.mood].join(" ").toLowerCase().includes(term),
    );
  }, [query]);

  return (
    <div className="sk-container">
      <section className="sk-section">
        <span className="sk-eyebrow">Search</span>
        <h1 className="sk-h1">Find the song you're after.</h1>
        <p className="sk-lead">Try a mood like “calm”, a vibe like “dance”, or a song name.</p>

        <SearchBar value={query} onChange={setQuery} />

        <div className="sk-suggest-list">
          {["love", "travel", "dance", "calm", "focus"].map((term) => (
            <button key={term} type="button" className="sk-mood-chip" onClick={() => setQuery(term)}>
              {term}
            </button>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="sk-empty">
            <span aria-hidden="true">🔍</span>
            <h2 className="sk-h3" style={{ marginTop: "0.5rem" }}>
              No songs found.
            </h2>
            <p className="sk-muted">Try another word, or explore a full vibe instead.</p>
            <div className="sk-hero-actions" style={{ justifyContent: "center" }}>
              {vibes.map((vibe) => (
                <Link key={vibe.id} to={vibe.path} className="sk-btn sk-btn-ghost sk-btn-sm">
                  {vibe.emoji} {vibe.title}
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            <p className="sk-muted" style={{ marginTop: "1rem" }}>
              {results.length} {results.length === 1 ? "result" : "results"}
            </p>
            <div className="sk-song-list">
              {results.map((song) => (
                <SongCard key={song.id} song={song} queue={results} showVibe />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
