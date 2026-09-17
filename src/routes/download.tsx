import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { songs, vibes } from "@/data/songs";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Your music, offline | Sukoon" },
      {
        name: "description",
        content: "Download the Sukoon tracks you love and keep your vibe with you offline.",
      },
      { property: "og:title", content: "Your music, offline | Sukoon" },
      { property: "og:description", content: "Grab any Sukoon track for offline listening." },
    ],
  }),
  component: DownloadPage,
});

function DownloadPage() {
  return (
    <div className="sk-container">
      <section className="sk-section">
        <span className="sk-eyebrow">Download</span>
        <h1 className="sk-h1">Your Music, Offline.</h1>
        <p className="sk-lead">
          Every track below downloads straight from this site. Files live in{" "}
          <code>public/music/</code> - add your own .mp3 files there and they're instantly available.
        </p>

        {vibes.map((vibe) => {
          const list = songs.filter((song) => song.category === vibe.id);
          return (
            <div key={vibe.id} style={{ marginTop: "2rem" }}>
              <h2 className="sk-h3">
                {vibe.emoji} {vibe.title}
              </h2>
              <div className="sk-song-list">
                {list.map((song) => (
                  <article key={song.id} className="sk-song">
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
                      <span className="sk-tag" style={{ marginTop: "0.3rem" }}>
                        {song.category}
                      </span>
                    </div>
                    <a
                      className="sk-btn sk-btn-primary sk-btn-sm"
                      href={song.src}
                      download
                      aria-label={`Download ${song.title} by ${song.artist}`}
                    >
                      <Download size={16} aria-hidden="true" /> Download
                    </a>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
