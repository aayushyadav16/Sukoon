import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { getVibe, moods, type Mood } from "@/data/songs";
import VibeCard from "./VibeCard";

export default function MoodSelector() {
  const [selected, setSelected] = useState<Mood | null>(null);
  const suggestion = selected ? getVibe(selected.vibe) : null;

  return (
    <section className="sk-section" id="find-my-vibe">
      <div className="sk-panel">
        <span className="sk-eyebrow">Mood recommendation</span>
        <h2 className="sk-h2">How are you feeling today?</h2>
        <p className="sk-lead">
          Pick a mood and Sukoon suggests the vibe that fits it. Simple, local logic - no paid AI.
        </p>

        <div className="sk-mood-grid" role="group" aria-label="Choose your mood">
          {moods.map((mood) => (
            <button
              key={mood.label}
              type="button"
              className={`sk-mood-chip ${selected?.label === mood.label ? "is-active" : ""}`}
              aria-pressed={selected?.label === mood.label}
              onClick={() => setSelected(mood)}
            >
              <span aria-hidden="true">{mood.emoji}</span> {mood.label}
            </button>
          ))}
        </div>

        {selected && suggestion ? (
          <div className="sk-result">
            <div>
              <p className="sk-tag">Feeling {selected.label}</p>
              <h3 className="sk-h2" style={{ marginTop: "0.6rem" }}>
                Based on your mood, we think you might enjoy{" "}
                <span className="sk-gradient-text">{suggestion.title}</span>
              </h3>
              <p className="sk-lead" style={{ marginTop: "0.6rem" }}>
                {selected.message}
              </p>
              <Link to={suggestion.path} className="sk-btn sk-btn-accent" style={{ marginTop: "1rem" }}>
                Take me there <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <VibeCard vibe={suggestion} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
