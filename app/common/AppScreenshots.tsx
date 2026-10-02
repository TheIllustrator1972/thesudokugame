"use client";
import { useEffect, useState } from "react";

const AppScreenshots = () => {
  const allScreenshots = [
    { src: "/AppScreenshots/1.png", alt: "Single Player Mode" },
    { src: "/AppScreenshots/2.png", alt: "Invite Screen" },
    { src: "/AppScreenshots/3.png", alt: "Versus Mode" },
  ];

  const [currentScreenSize, setCurrentScreenSize] = useState("base");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCurrentScreenSize("lg");
      } else if (width >= 768) {
        setCurrentScreenSize("md");
      } else if (width >= 640) {
        setCurrentScreenSize("sm");
      } else {
        setCurrentScreenSize("base");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getScreenshotsToDisplay = () => {
    switch (currentScreenSize) {
      case "lg":
      case "md":
        return allScreenshots;
      case "sm":
      case "base":
      default:
        return allScreenshots.slice(0, 1);
    }
  };

  const screenshotsToRender = getScreenshotsToDisplay();
  return (
    <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 sm:gap-4 md:grid-cols-3 md:gap-3 lg:gap-6">
        {screenshotsToRender.map((shot) => (
          <div key={shot.src} className="relative overflow-visible rounded-lg">
            <img
              src={shot.src}
              alt={shot.alt}
              className="max-h-[45vh] w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppScreenshots;
