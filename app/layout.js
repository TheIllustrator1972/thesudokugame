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
  // Primary Meta Tags
  title: "Versus Sudoku", // Default title for your application
  description:
    "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",

  // Favicon and Apple Touch Icon (Next.js automatically looks in `public` directory)
  icons: {
    icon: "/Logo.png", // Refers to public/Logo.png
    apple: "/Logo.png", // Refers to public/Logo.png
  },

  // Viewport
  viewport: "width=device-width, initial-scale=1",

  // Theme Color (for mobile browsers)
  themeColor: "#000000",

  // Manifest (Next.js handles this, just ensure manifest.json is in public)
  manifest: "/manifest.json", // Refers to public/manifest.json

  // Open Graph Meta Tags (for social media sharing)
  openGraph: {
    title: "Versus Sudoku",
    description:
      "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
    url: "https://thesudokugame.com", // Your base URL
    siteName: "Versus Sudoku",
    images: [
      {
        url: "https://thesudokugame.com/OpenGraphPreview.png", // Absolute URL is important for social media
        width: 1200, // Recommended width for Open Graph images
        height: 630, // Recommended height for Open Graph images
        alt: "Versus Sudoku Game Preview",
      },
    ],
    type: "website",
  },

  // Twitter Card Meta Tags
  twitter: {
    card: "summary_large_image",
    title: "Versus Sudoku",
    description:
      "Challenge your friends in a battle of logic and numbers with Versus Sudoku.",
    images: ["https://thesudokugame.com/OpenGraphPreview.png"], // Absolute URL
  },
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
