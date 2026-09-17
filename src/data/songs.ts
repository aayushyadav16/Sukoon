// Central song data for Sukoon.
// NOTE: audio files are NOT bundled. Drop real .mp3 files into
// public/music/<vibe>/ using the exact file names below and they will play.
// The app never crashes when a file is missing - it shows a friendly message.

export type VibeId = "bus" | "dance" | "love" | "salon";

export type Song = {
  id: string;
  title: string;
  artist: string;
  category: VibeId;
  mood: string;
  image: string;
  src: string;
};

export type Vibe = {
  id: VibeId;
  emoji: string;
  title: string;
  description: string;
  subheading: string;
  image: string;
  path: "/bus" | "/dance" | "/love" | "/salon";
};

export const vibes: Vibe[] = [
  {
    id: "bus",
    emoji: "🚌",
    title: "Bus Vibe",
    description: "Music for long rides, window seats and roads that never end.",
    subheading: "Put on your headphones and enjoy the journey.",
    image: "/images/bus.jpg",
    path: "/bus",
  },
  {
    id: "dance",
    emoji: "💃",
    title: "Dance Vibe",
    description: "Turn up the energy and let the music take over.",
    subheading: "Forget everything. Just move.",
    image: "/images/dance.jpg",
    path: "/dance",
  },
  {
    id: "love",
    emoji: "❤️",
    title: "Love Vibe",
    description: "For late-night thoughts, memories and feelings.",
    subheading: "For the feelings you can't put into words.",
    image: "/images/love.jpg",
    path: "/love",
  },
  {
    id: "salon",
    emoji: "💆",
    title: "Salon Vibe",
    description: "Slow down, breathe and enjoy some peaceful time.",
    subheading: "Relax. Refresh. Reset.",
    image: "/images/salon.jpg",
    path: "/salon",
  },
];

export const songs: Song[] = [
  // 🚌 BUS — supplied local MP3 files
  {
    id: "bus-01",
    title: "Bus Track 01",
    artist: "Your music collection",
    category: "bus",
    mood: "travel journey road calm",
    image: "/images/bus.jpg",
    src: "/music/bus/song1.mp3",
  },
  {
    id: "bus-02",
    title: "Bus Track 02",
    artist: "Your music collection",
    category: "bus",
    mood: "travel drive open road",
    image: "/images/bus.jpg",
    src: "/music/bus/song2.mp3",
  },
  {
    id: "bus-03",
    title: "Bus Track 03",
    artist: "Your music collection",
    category: "bus",
    mood: "travel adventure focus",
    image: "/images/bus.jpg",
    src: "/music/bus/song3.mp3",
  },
  {
    id: "bus-04",
    title: "Bus Track 04",
    artist: "Your music collection",
    category: "bus",
    mood: "travel morning hopeful",
    image: "/images/bus.jpg",
    src: "/music/bus/song4.mp3",
  },
  {
    id: "bus-05",
    title: "Bus Track 05",
    artist: "Your music collection",
    category: "bus",
    mood: "travel journey road calm",
    image: "/images/bus.jpg",
    src: "/music/bus/song5.mp3",
  },
  {
    id: "bus-06",
    title: "Bus Track 06",
    artist: "Your music collection",
    category: "bus",
    mood: "travel drive open road",
    image: "/images/bus.jpg",
    src: "/music/bus/song6.mp3",
  },
  {
    id: "bus-07",
    title: "Bus Track 07",
    artist: "Your music collection",
    category: "bus",
    mood: "travel adventure focus",
    image: "/images/bus.jpg",
    src: "/music/bus/song7.mp3",
  },
  {
    id: "bus-08",
    title: "Bus Track 08",
    artist: "Your music collection",
    category: "bus",
    mood: "travel morning hopeful",
    image: "/images/bus.jpg",
    src: "/music/bus/song8.mp3",
  },
  {
    id: "bus-09",
    title: "Bus Track 09",
    artist: "Your music collection",
    category: "bus",
    mood: "travel journey road calm",
    image: "/images/bus.jpg",
    src: "/music/bus/song9.mp3",
  },
  {
    id: "bus-10",
    title: "Bus Track 10",
    artist: "Your music collection",
    category: "bus",
    mood: "travel drive open road",
    image: "/images/bus.jpg",
    src: "/music/bus/song10.mp3",
  },

  // 💃 DANCE — supplied local MP3 files
  {
    id: "dance-01",
    title: "Abhi Toh Party Shuru Hui Hai",
    artist: "Bollywood Party",
    category: "dance",
    mood: "happy energetic party dance",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-01.mp3",
  },
  {
    id: "dance-02",
    title: "Blue Eyes",
    artist: "Yo Yo Honey Singh",
    category: "dance",
    mood: "energetic party workout happy",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-02.mp3",
  },
  {
    id: "dance-03",
    title: "Chaar Botal Vodka",
    artist: "Bollywood Party",
    category: "dance",
    mood: "happy celebration dance",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-03.mp3",
  },
  {
    id: "dance-04",
    title: "Dope Shope",
    artist: "Yo Yo Honey Singh",
    category: "dance",
    mood: "energetic loud hype",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-04.mp3",
  },
  {
    id: "dance-05",
    title: "Excuses",
    artist: "AP Dhillon",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-05.mp3",
  },
  {
    id: "dance-06",
    title: "Galat Baat Hai",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-06.mp3",
  },
  {
    id: "dance-07",
    title: "Gali Gali",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-07.mp3",
  },
  {
    id: "dance-08",
    title: "Gali Gali (Version 2)",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-08.mp3",
  },
  {
    id: "dance-09",
    title: "Genda Phool",
    artist: "Badshah",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-09.mp3",
  },
  {
    id: "dance-10",
    title: "Hookah Bar",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-10.mp3",
  },
  {
    id: "dance-11",
    title: "Kamariya",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-11.mp3",
  },
  {
    id: "dance-12",
    title: "Nachange Saari Raat",
    artist: "Bollywood Party",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-12.mp3",
  },
  {
    id: "dance-13",
    title: "One Bottle Down",
    artist: "Yo Yo Honey Singh",
    category: "dance",
    mood: "party dance upbeat",
    image: "/images/dance.jpg",
    src: "/music/dance/dance-13.mp3",
  },

  // ❤️ LOVE — supplied local MP3 files
  {
    id: "love-01",
    title: "Bol Do Na Zara",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-01.mp3",
  },
  {
    id: "love-02",
    title: "Dheere Dheere Se Meri Zindagi Mein Aana",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-02.mp3",
  },
  {
    id: "love-03",
    title: "Guli Mata",
    artist: "Saad Lamjarred",
    category: "love",
    mood: "romantic date dreamy",
    image: "/images/love.jpg",
    src: "/music/love/love-03.mp3",
  },
  {
    id: "love-04",
    title: "Ishq Bulaava",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-04.mp3",
  },
  {
    id: "love-05",
    title: "Jeene Laga Hoon",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-05.mp3",
  },
  {
    id: "love-06",
    title: "Khuda Bhi",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-06.mp3",
  },
  {
    id: "love-07",
    title: "Libaas",
    artist: "Love Playlist",
    category: "love",
    mood: "romantic love soft",
    image: "/images/love.jpg",
    src: "/music/love/love-07.mp3",
  },

  // 💆 SALON — supplied local MP3 files
  {
    id: "salon-01",
    title: "Aake Teri Baahon Mein",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-01.mp3",
  },
  {
    id: "salon-02",
    title: "Aapke Pyaar Mein Hum",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-02.mp3",
  },
  {
    id: "salon-03",
    title: "Aaye Ho Meri Zindagi Mein (Female)",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-03.mp3",
  },
  {
    id: "salon-04",
    title: "Aayiye Aapka Intezaar Tha",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-04.mp3",
  },
  {
    id: "salon-05",
    title: "Chamma Chamma Baaje Re",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "dance energetic classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-05.mp3",
  },
  {
    id: "salon-06",
    title: "Dil Deta Hai Ro Ro Duhai",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "sad emotional classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-06.mp3",
  },
  {
    id: "salon-07",
    title: "Ghoonghat Ki Aadh Se",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-07.mp3",
  },
  {
    id: "salon-08",
    title: "Jo Bhi Kasmein",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-08.mp3",
  },
  {
    id: "salon-09",
    title: "Kisi Din Banoongi Main Raja",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-09.mp3",
  },
  {
    id: "salon-10",
    title: "Kitna Pyaara Hai",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-10.mp3",
  },
  {
    id: "salon-11",
    title: "Main Agar Saamne",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-11.mp3",
  },
  {
    id: "salon-12",
    title: "Mujhse Mohabbat Ka",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-12.mp3",
  },
  {
    id: "salon-13",
    title: "Pardesi Pardesi",
    artist: "Kumar Sanu & Alka Yagnik",
    category: "salon",
    mood: "sad romantic classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-13.mp3",
  },
  {
    id: "salon-14",
    title: "Phool Maangu Na Bahaar Maangu",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-14.mp3",
  },
  {
    id: "salon-15",
    title: "Sona Kitna Sona Hai",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "happy romantic classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-15.mp3",
  },
  {
    id: "salon-16",
    title: "Tumse Milne Ko Dil",
    artist: "Classic Bollywood",
    category: "salon",
    mood: "romantic love classic",
    image: "/images/salon.jpg",
    src: "/music/salon/salon-16.mp3",
  },
];

export const getSongsByCategory = (category: VibeId): Song[] =>
  songs.filter((song) => song.category === category);

export const getVibe = (id: VibeId): Vibe =>
  vibes.find((vibe) => vibe.id === id) ?? (vibes[0] as Vibe);

// ---- Mood + assistant logic (fully local, no paid API) ----

export type Mood = { emoji: string; label: string; vibe: VibeId; message: string };

export const moods: Mood[] = [
  {
    emoji: "😊",
    label: "Happy",
    vibe: "dance",
    message: "You're glowing today - let's keep that energy moving.",
  },
  {
    emoji: "😔",
    label: "Sad",
    vibe: "love",
    message: "Some feelings need soft music, not answers.",
  },
  {
    emoji: "😌",
    label: "Relaxed",
    vibe: "salon",
    message: "Let's stretch this calm a little longer.",
  },
  {
    emoji: "😫",
    label: "Stressed",
    vibe: "salon",
    message: "Sounds like you need some calm. Breathe with us.",
  },
  {
    emoji: "❤️",
    label: "Romantic",
    vibe: "love",
    message: "Perfect evening for slow, warm songs.",
  },
  {
    emoji: "🔥",
    label: "Energetic",
    vibe: "dance",
    message: "Full volume it is. Let the beat lead.",
  },
  {
    emoji: "😴",
    label: "Tired",
    vibe: "salon",
    message: "Rest is productive too. Soft sounds ahead.",
  },
  {
    emoji: "🚌",
    label: "Travelling",
    vibe: "bus",
    message: "Window seat, headphones on, roads rolling.",
  },
  {
    emoji: "🧠",
    label: "Focused",
    vibe: "salon",
    message: "Quiet music helps the mind settle into work.",
  },
  {
    emoji: "🌙",
    label: "Lonely",
    vibe: "love",
    message: "You're not alone tonight - here's something gentle.",
  },
];

const assistantRules: { keywords: string[]; vibe: VibeId; reply: string }[] = [
  {
    keywords: [
      "stress",
      "stressed",
      "anxious",
      "anxiety",
      "tension",
      "exam",
      "pressure",
      "tired",
      "sleep",
      "relax",
      "calm",
      "peace",
      "spa",
    ],
    vibe: "salon",
    reply: "Sounds like you need some calm. Try Salon Vibe - slow, soft and easy on the mind.",
  },
  {
    keywords: [
      "love",
      "romantic",
      "romance",
      "date",
      "crush",
      "miss",
      "breakup",
      "heart",
      "lonely",
      "alone",
      "sad",
    ],
    vibe: "love",
    reply: "Feelings deserve the right soundtrack. Love Vibe has the soft ones.",
  },
  {
    keywords: [
      "dance",
      "party",
      "energy",
      "energetic",
      "happy",
      "celebrate",
      "workout",
      "gym",
      "hype",
      "excited",
    ],
    vibe: "dance",
    reply: "Let's turn the energy up! Dance Vibe is exactly your kind of loud.",
  },
  {
    keywords: [
      "travel",
      "travelling",
      "traveling",
      "bus",
      "road",
      "journey",
      "trip",
      "drive",
      "train",
      "window",
    ],
    vibe: "bus",
    reply: "Roads and music go together. Bus Vibe is made for your journey.",
  },
  {
    keywords: ["focus", "study", "work", "concentrate", "reading"],
    vibe: "salon",
    reply: "For deep focus, Salon Vibe keeps things quiet and steady.",
  },
];

export type AssistantAnswer = { vibe: VibeId | null; reply: string };

export function askSukoonAssistant(text: string): AssistantAnswer {
  const input = (text || "").toLowerCase();

  if (!input.trim()) {
    return { vibe: null, reply: "Tell me how your day is going and I'll pick a vibe for you." };
  }

  for (const rule of assistantRules) {
    if (rule.keywords.some((word) => input.includes(word))) {
      return { vibe: rule.vibe, reply: rule.reply };
    }
  }

  return {
    vibe: "salon",
    reply:
      "I'm not fully sure what you're feeling, but a little calm never hurts. Salon Vibe is a safe start.",
  };
}
