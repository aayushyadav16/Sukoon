import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import MoodSelector from "@/components/MoodSelector";
import SukoonAssistant from "@/components/SukoonAssistant";
import VibeCard from "@/components/VibeCard";
import { songs, vibes } from "@/data/songs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sukoon | Your mood. Your music. Your Sukoon." },
      {
        name: "description",
        content:
          "Sukoon is a mood-based music space. Pick how you feel and step into Bus, Dance, Love or Salon vibes.",
      },
      { property: "og:title", content: "Sukoon | Your mood. Your music. Your Sukoon." },
      {
        property: "og:description",
        content: "Music that matches the way you feel - four immersive vibes and mood-based suggestions.",
      },
    ],
  }),
  component: Home,
});

const features = [
  { icon: "🎵", title: "Curated vibes", text: "Four immersive music environments, each with its own feeling." },
  { icon: "🧠", title: "Mood recommendations", text: "Tell Sukoon your mood and get the vibe that fits it." },
  { icon: "❤️", title: "Personal playlists", text: "Save songs to your own playlist, kept in your browser." },
  { icon: "⬇️", title: "Offline downloads", text: "Take your favourite tracks with you, wherever you go." },
];

function Home() {
  return (
    <div className="sk-container">
      <section className="sk-hero sk-animate-in">
        <div className="sk-hero-content">
          <span className="sk-eyebrow">
            <Sparkles size={13} aria-hidden="true" /> Your mood. Your music. Your Sukoon.
          </span>
          <h1 className="sk-h1">
            Find Your <span className="sk-gradient-text">Vibe.</span>
          </h1>
          <p className="sk-lead" style={{ marginTop: "1rem" }}>
            Music that matches the way you feel.
          </p>

          <div className="sk-hero-actions">
            <Link to="/" hash="vibes" className="sk-btn sk-btn-primary">
              Explore Vibes <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/" hash="find-my-vibe" className="sk-btn sk-btn-ghost">
              Find My Mood
            </Link>
          </div>

          <div className="sk-hero-stats">
            <div className="sk-stat">
              <strong>{vibes.length}</strong>
              <span className="sk-muted">Immersive vibes</span>
            </div>
            <div className="sk-stat">
              <strong>{songs.length}</strong>
              <span className="sk-muted">Curated tracks</span>
            </div>
            <div className="sk-stat">
              <strong>10</strong>
              <span className="sk-muted">Moods understood</span>
            </div>
          </div>
        </div>
      </section>

      <MoodSelector />

      <section className="sk-section" id="vibes">
        <div className="sk-section-head">
          <span className="sk-eyebrow">Four worlds</span>
          <h2 className="sk-h2">Choose Your Vibe</h2>
          <p className="sk-lead">Each vibe is a small escape - pick the one that matches your moment.</p>
        </div>
        <div className="sk-grid-vibes">
          {vibes.map((vibe) => (
            <VibeCard key={vibe.id} vibe={vibe} />
          ))}
        </div>
      </section>

      <section className="sk-section">
        <div className="sk-section-head">
          <span className="sk-eyebrow">Features</span>
          <h2 className="sk-h2">Music that follows your mood.</h2>
        </div>
        <div className="sk-grid-features">
          {features.map((feature) => (
            <article key={feature.title} className="sk-feature">
              <span aria-hidden="true">{feature.icon}</span>
              <h3 className="sk-h3" style={{ marginTop: "0.6rem" }}>
                {feature.title}
              </h3>
              <p className="sk-muted">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SukoonAssistant />
    </div>
  );
}
