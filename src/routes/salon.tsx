import { createFileRoute } from "@tanstack/react-router";
import VibePageLayout from "@/components/VibePageLayout";

export const Route = createFileRoute("/salon")({
  head: () => ({
    meta: [
      { title: "Salon Vibe | Sukoon" },
      {
        name: "description",
        content: "Slow down, breathe and enjoy peaceful self-care music with the Sukoon Salon Vibe.",
      },
      { property: "og:title", content: "Salon Vibe | Sukoon" },
      { property: "og:description", content: "Relax. Refresh. Reset." },
    ],
  }),
  component: () => <VibePageLayout vibeId="salon" />,
});
