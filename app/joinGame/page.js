import { Stack, Typography } from "@mui/material";
import DownloadOnTheAppStore from "../DownloadOnTheAppStore";

export const generateMetadata = () => {
  return {
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
};

const JoinGamePage = () => (
  <Stack
    sx={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#000",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    }}
  >
    <Typography
      sx={{
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      If you want to play with your friends, please download the app from the
      App Store.
    </Typography>
    <a
      href="https://apple.co/3Hplkx6"
      target="_blank"
      rel="noopener noreferrer"
    >
      <DownloadOnTheAppStore />
    </a>
  </Stack>
);

export default JoinGamePage;
