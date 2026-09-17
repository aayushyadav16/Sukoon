import { Link } from "@tanstack/react-router";
import { vibes } from "@/data/songs";

export default function Footer() {
  return (
    <footer className="sk-footer">
      <div className="sk-container">
        <div className="sk-footer-grid">
          <div>
            <Link to="/" className="sk-logo" aria-label="Sukoon home">
              <span className="sk-logo-mark" aria-hidden="true">
                S
              </span>
              <span className="sk-logo-text">SUKOON</span>
            </Link>
            <p className="sk-muted" style={{ marginTop: "0.75rem" }}>
              Music for every mood.
            </p>
          </div>

          <nav aria-label="Footer pages">
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/playlist">Playlist</Link>
              </li>
              <li>
                <Link to="/download">Download</Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer vibes">
            <h4>Vibes</h4>
            <ul>
              {vibes.map((vibe) => (
                <li key={vibe.id}>
                  <Link to={vibe.path}>
                    {vibe.emoji} {vibe.title.replace(" Vibe", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4>About</h4>
            <p className="sk-muted">
              Sukoon is a free, frontend-only student project. Mood suggestions use simple local
              keyword logic - no paid AI service involved.
            </p>
          </div>
        </div>

        <p className="sk-footer-note">Made with ❤️ by Team Sukoon</p>
      </div>
    </footer>
  );
}
