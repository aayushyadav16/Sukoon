import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Vibe } from "@/data/songs";

export default function VibeCard({ vibe }: { vibe: Vibe }) {
  return (
    <Link to={vibe.path} className="sk-vibe-card" aria-label={`Explore ${vibe.title}`}>
      <img src={vibe.image} alt={`${vibe.title} atmosphere`} loading="lazy" width={1536} height={1024} />
      <div className="sk-vibe-card-body">
        <span className="sk-vibe-emoji" aria-hidden="true">
          {vibe.emoji}
        </span>
        <h3 className="sk-h3">{vibe.title}</h3>
        <p className="sk-muted">{vibe.description}</p>
        <span className="sk-btn sk-btn-primary sk-btn-sm" style={{ alignSelf: "flex-start" }}>
          Explore <ArrowRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
