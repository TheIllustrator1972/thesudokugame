import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import "./globals.css"; // Make sure your global CSS is imported here
import MuiThemeProvider from "./MuiThemeProvider";

// Define your metadata object
export const metadata = {
  title: "Versus Sudoku", // Default title for your application
  description:
    "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
  icons: {
    icon: "/Logo.png", // Refers to public/Logo.png
    apple: "/Logo.png", // Refers to public/Logo.png
  },

  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  manifest: "/manifest.json", // Refers to public/manifest.json
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
