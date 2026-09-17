import { createFileRoute } from "@tanstack/react-router";
import PlaylistPanel from "@/components/PlaylistPanel";

export const Route = createFileRoute("/playlist")({
  head: () => ({
    meta: [
      { title: "My playlist | Sukoon" },
      {
        name: "description",
        content: "Your saved Sukoon songs, stored right in your browser so they survive a refresh.",
      },
      { property: "og:title", content: "My playlist | Sukoon" },
      { property: "og:description", content: "Save the songs that match your mood and keep them close." },
    ],
  }),
  component: PlaylistPage,
});

function PlaylistPage() {
  return (
    <div className="sk-container">
      <section className="sk-section">
        <span className="sk-eyebrow">Playlist</span>
        <h1 className="sk-h1">Songs you saved.</h1>
        <p className="sk-lead">
          Your playlist lives in this browser, so it's still here the next time you open Sukoon.
        </p>
        <div style={{ marginTop: "1.5rem" }}>
          <PlaylistPanel />
        </div>
      </section>
    </div>
  );
}
