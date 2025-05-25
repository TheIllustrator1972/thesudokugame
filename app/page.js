import Home from "./Home";

export const generateMetadata = () => {
  return {
    title: "Versus Sudoku",
    description:
      "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
    openGraph: {
      title: "Versus Sudoku",
      description:
        "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
      url: "https://thesudokugame.com",
      siteName: "Versus Sudoku",
      images: [
        {
          url: "https://thesudokugame.com/OpenGraphPreview.png",
          width: 1200,
          height: 630,
          alt: "Versus Sudoku Home",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Versus Sudoku",
      description:
        "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
      images: ["https://thesudokugame.com/OpenGraphPreview.png"],
    },
  };
};

export default function Page() {
  return <Home />;
}
