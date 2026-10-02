import type { Metadata } from "next";
import DownloadOnTheAppStore from "../common/Download/DownloadOnTheAppStore";

export const metadata: Metadata = {
  title: "Join a Game | Versus Sudoku",
  description: "Join your friend's Sudoku challenge now!",
  openGraph: {
    title: "Join a Game | Versus Sudoku",
    description: "Join your friend's Sudoku challenge now!",
    url: "https://thesudokugame.com/joinGame",
    siteName: "Versus Sudoku",
    images: [
      {
        url: "https://thesudokugame.com/OpenGraphJoinPreview.png",
        width: 1200,
        height: 630,
        alt: "Join Sudoku Game",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join a Game | Versus Sudoku",
    description: "Join your friend's Sudoku challenge now!",
    images: ["https://thesudokugame.com/OpenGraphJoinPreview.png"],
  },
};

export default function JoinGamePage() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-6 bg-dark-background px-6 text-center">
      <p className="max-w-xl text-2xl font-bold text-light-app-name-text">
        If you want to play with your friend, please paste the link in app or
        download the app from the App Store.
      </p>
      <DownloadOnTheAppStore />
    </main>
  );
}
