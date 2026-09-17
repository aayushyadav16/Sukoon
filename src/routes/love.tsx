import { createFileRoute } from "@tanstack/react-router";
import VibePageLayout from "@/components/VibePageLayout";

export const Route = createFileRoute("/love")({
  head: () => ({
    meta: [
      { title: "Love Vibe | Sukoon" },
      {
        name: "description",
        content: "Soft songs for late-night thoughts, memories and feelings. The Sukoon Love Vibe.",
      },
      { property: "og:title", content: "Love Vibe | Sukoon" },
      { property: "og:description", content: "For the feelings you can't put into words." },
    ],
  }),
  component: () => <VibePageLayout vibeId="love" />,
});
