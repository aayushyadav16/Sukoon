import { Search as SearchIcon, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="sk-assistant-form" role="search">
      <label className="sk-input" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <SearchIcon size={18} aria-hidden="true" />
        <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
          Search songs
        </span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search your mood, song or vibe..."
          style={{
            border: "none",
            outline: "none",
            background: "transparent",
            width: "100%",
            font: "inherit",
            color: "inherit",
          }}
        />
      </label>
      {value ? (
        <button type="button" className="sk-btn sk-btn-quiet" onClick={() => onChange("")}>
          <X size={16} aria-hidden="true" /> Clear
        </button>
      ) : null}
    </div>
  );
}
