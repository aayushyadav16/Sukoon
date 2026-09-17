import { createFileRoute } from "@tanstack/react-router";
import VibePageLayout from "@/components/VibePageLayout";

export const Route = createFileRoute("/bus")({
  head: () => ({
    meta: [
      { title: "Bus Vibe | Sukoon" },
      {
        name: "description",
        content: "Music for long rides, window seats and roads that never end. Play the Sukoon Bus Vibe.",
      },
      { property: "og:title", content: "Bus Vibe | Sukoon" },
      { property: "og:description", content: "Put on your headphones and enjoy the journey." },
    ],
  }),
  component: () => <VibePageLayout vibeId="bus" />,
});
