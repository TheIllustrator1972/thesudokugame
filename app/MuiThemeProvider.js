// src/components/MuiThemeProvider.js (or .tsx)
"use client"; // IMPORTANT: This component must be a Client Component

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline"; // Optional: for basic CSS reset
import { blueGrey, green } from "@mui/material/colors"; // Example colors

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900], // Example primary color
    },
    secondary: {
      main: green[500], // Example secondary color
    },
    // You can define more colors, typography, etc.
  },
  typography: {
    fontFamily: "monospace", // Matching your current appTitle font
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function MuiThemeProvider({ children }) {
  return (
    // AppRouterCacheProvider is essential for correct Material-UI styling
    // and hydration with Next.js App Router.
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline resets browser default styles, similar to a basic CSS reset */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
