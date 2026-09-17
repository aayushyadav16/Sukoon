import { createFileRoute } from "@tanstack/react-router";
import VibePageLayout from "@/components/VibePageLayout";

export const Route = createFileRoute("/dance")({
  head: () => ({
    meta: [
      { title: "Dance Vibe | Sukoon" },
      {
        name: "description",
        content: "Turn up the energy and let the music take over with the Sukoon Dance Vibe.",
      },
      { property: "og:title", content: "Dance Vibe | Sukoon" },
      { property: "og:description", content: "Forget everything. Just move." },
    ],
  }),
  component: () => <VibePageLayout vibeId="dance" />,
});
