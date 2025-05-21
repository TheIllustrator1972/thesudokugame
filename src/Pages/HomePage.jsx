import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { Email } from "@mui/icons-material";
import { useMemo } from "react";

const classes = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  contentContainer: {
    width: {
      xs: "95%",
      sm: "90%",
      md: "80%",
      lg: "70%",
      xl: "65%",
    },
    height: "90vh",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topBarContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoAndTitleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 2,
  },
  appLogoStyles: {
    width: "50px",
    height: "50px",
    borderRadius: "5%",
  },
  appTitle: {
    color: "white",
    fontSize: {
      xs: "28px",
      sm: "24px",
      md: "32px",
      lg: "36px",
      xl: "40px",
    },
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  contactUs: {
    display: "flex",
    flexDirection: { sm: "column", md: "row" },
    gap: { sm: 1, md: 2 },
  },
  contactUsText: {
    color: "white",
    fontSize: { sm: "14px", md: "20px" },
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  emailIcon: {
    color: "white",
    fontSize: "30px",
    cursor: "pointer",
    alignSelf: "flex-end",
  },
  headLine: {
    color: "white",
    fontSize: { sm: "36px", md: "38px", lg: "40px" },
    fontWeight: "bold",
    fontFamily: "monospace",
    textAlign: "center",
  },
  comingSoon: {
    color: "#ccc",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "monospace",
    marginTop: 2,
  },
};

const screenshots = [
  {
    name: 1,
    alt: "Single Player Mode",
  },
  {
    name: 2,
    alt: "Invite Screen",
  },
  {
    name: 3,
    alt: "Versus Mode",
  },
];

function HomePage() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm")); // True for xs only
  const isSmMd = useMediaQuery(theme.breakpoints.between("sm", "lg")); // True for sm and md

  const screenshotVisibilityMap = useMemo(() => {
    if (isXs) {
      return [2];
    } else if (isSmMd) {
      return [0, 2];
    } else {
      return screenshots.map((_, index) => index);
    }
  }, [isXs, isSmMd, screenshots]); // Recalculate if these dependencies change

  const visibleScreenshots = screenshots.filter((_, index) =>
    screenshotVisibilityMap.includes(index)
  );

  return (
    <Stack sx={classes.container}>
      <Stack sx={classes.contentContainer}>
        <Stack sx={classes.topBarContainer}>
          <Stack sx={classes.logoAndTitleContainer}>
            <img
              src={"/Logo.png"}
              alt="Versus Sudoku Logo"
              style={classes.appLogoStyles}
            />
            <Typography sx={classes.appTitle}>Versus Sudoku</Typography>
          </Stack>
          <Stack sx={classes.contactUs}>
            <Typography sx={classes.contactUsText}>Contact Us</Typography>
            <a
              href="mailto:theillustrator2001@gmail.com"
              style={{ color: "inherit" }}
            >
              <Email sx={classes.emailIcon} />
            </a>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={4}>
          {visibleScreenshots.map((screenshot) => (
            <img
              key={screenshot.name}
              src={`/AppScreenshots/${screenshot.name}.png`}
              alt={screenshot.alt}
              style={{ width: "100%", maxWidth: 250, borderRadius: 8 }}
            />
          ))}
        </Stack>

        <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
          <Typography sx={classes.headLine}>
            "Sudoku Just Got Competitive."
          </Typography>
          <Typography sx={classes.comingSoon}>
            Coming Soon on the App Store
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default HomePage;
