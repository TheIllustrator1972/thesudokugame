export const appData = {
  name: "Versus Sudoku",
  title: "Sudoku Just Got Competitive.",
  description:
    "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
  isLaunched: true,
  socialLinks: {
    email: "mailto:theillustrator2001@gmail.com",
    twitter: "https://x.com/devillus1972",
    linkedin: "https://www.linkedin.com/in/nileshsk1/",
    website: "https://nileshkamble.co.in/",
  },
  appStoreLink: "https://apple.co/3Hplkx6",
};

export const openGraphMetadata = {
  title: appData.name,
  description: appData.description,
  url: "https://thesudokugame.com",
  siteName: appData.name,
  images: [
    {
      url: "https://thesudokugame.com/OpenGraphPreview.png",
      width: 1200,
      height: 630,
      alt: "Versus Sudoku Home",
    },
  ],
  locale: "en_US",
  type: "website",
};

export const twitterMetadata = {
  card: "summary_large_image",
  title: appData.name,
  description: appData.description,
  images: ["https://thesudokugame.com/OpenGraphPreview.png"],
  creator: "@devillus1972",
};
