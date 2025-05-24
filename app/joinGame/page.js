import { Stack, Typography } from "@mui/material";
import DownloadOnTheAppStore from "../DownloadOnTheAppStore";

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
