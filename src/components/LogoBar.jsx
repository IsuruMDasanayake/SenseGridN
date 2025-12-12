import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

// Logo paths - using actual file names from /public/assets/images/logos/
const logos = [
  { light: "/assets/images/logos/raspberrypi_white.png", dark: "/assets/images/logos/raspberrypi_dark.png" },
  { light: "/assets/images/logos/arduino.png", dark: "/assets/images/logos/arduino.png" },
  { light: "/assets/images/logos/nvidia_white.png", dark: "/assets/images/logos/nvidia_dark.png" },
  { light: "/assets/images/logos/simcom.png", dark: "/assets/images/logos/simcom.png" },
  { light: "/assets/images/logos/espressif_white.png", dark: "/assets/images/logos/espressif_dark.png" },

  // Duplicate set for seamless scrolling
  { light: "/assets/images/logos/raspberrypi_white.png", dark: "/assets/images/logos/raspberrypi_dark.png" },
  { light: "/assets/images/logos/arduino.png", dark: "/assets/images/logos/arduino.png" },
  { light: "/assets/images/logos/nvidia_white.png", dark: "/assets/images/logos/nvidia_dark.png" },
  { light: "/assets/images/logos/simcom.png", dark: "/assets/images/logos/simcom.png" },
  { light: "/assets/images/logos/espressif_white.png", dark: "/assets/images/logos/espressif_dark.png" },
];

const LogoBar = () => {
  const { darkMode } = useTheme();

  // Custom Styles for Glassmorphism
  
  const customStyles = `
    .glass-panel-dark {
      background: rgba(17, 25, 40, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
    .glass-panel-light {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.1);
    }
  `;

  // Dynamic Class Names
  const glassPanelClass = darkMode ? 'glass-panel-dark' : 'glass-panel-light';
  const textColorClass = darkMode ? 'text-white' : 'text-gray-900';

  return (
    <div className="relative w-full max-w-7xl mx-auto py-8 sm:py-6 -mt-8">
      <style>{customStyles}</style>

      {/* Heading */}
      <h2 className={`text-2xl font-bold ${textColorClass} mb-6 text-left`}>
        Powered By:
      </h2>

      {/* Logo Scrolling Bar Container */}
      <div
        className={`relative overflow-hidden ${glassPanelClass} p-5 rounded-xl`}
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex space-x-12 lg:space-x-20 sm:space-x-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {logos.map((logo, i) => (
            <div
              key={`logo-${i}`}
              className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              {darkMode ? (
                <img
                  src={logo.dark}
                  alt={`Tech Partner ${i + 1}`}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              ) : (
                <img
                  src={logo.light}
                  alt={`Tech Partner ${i + 1}`}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoBar;