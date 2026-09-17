import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Send, Sparkles } from "lucide-react";
import { askSukoonAssistant, getVibe, type AssistantAnswer } from "@/data/songs";

const examples = [
  "I'm stressed after college.",
  "I'm travelling today.",
  "I want romantic songs.",
  "I want something energetic.",
];

export default function SukoonAssistant() {
  const [text, setText] = useState("");
  const [answer, setAnswer] = useState<AssistantAnswer | null>(null);

  const respond = (input: string) => {
    setText(input);
    setAnswer(askSukoonAssistant(input));
  };

  const suggestion = answer?.vibe ? getVibe(answer.vibe) : null;

  return (
    <section className="sk-section" id="assistant">
      <div className="sk-panel">
        <span className="sk-eyebrow">
          <Sparkles size={13} aria-hidden="true" /> Sukoon Assistant
        </span>
        <h2 className="sk-h2">Tell me how your day was.</h2>
        <p className="sk-lead">
          A lightweight, AI-inspired helper built with local keyword matching - not a real language
          model, and completely free.
        </p>

        <form
          className="sk-assistant-form"
          onSubmit={(event) => {
            event.preventDefault();
            respond(text);
          }}
        >
          <input
            className="sk-input"
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="e.g. I'm stressed after college"
            aria-label="Tell the Sukoon Assistant how you feel"
          />
          <button type="submit" className="sk-btn sk-btn-primary">
            <Send size={16} aria-hidden="true" /> Ask Sukoon
          </button>
        </form>

        <div className="sk-suggest-list">
          {examples.map((example) => (
            <button
              key={example}
              type="button"
              className="sk-mood-chip"
              onClick={() => respond(example)}
            >
              {example}
            </button>
          ))}
        </div>

        {answer ? (
          <div className="sk-chat-bubble" role="status">
            <p style={{ margin: 0, fontWeight: 600 }}>{answer.reply}</p>
            {suggestion ? (
              <Link to={suggestion.path} className="sk-btn sk-btn-accent sk-btn-sm" style={{ marginTop: "0.9rem" }}>
                Explore {suggestion.title} <ArrowRight size={16} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
