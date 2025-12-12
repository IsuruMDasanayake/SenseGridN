import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const BRAND_BLUE = 'rgb(14,165,234)';
const BRAND_TEAL = 'rgb(11,209,209)';

// Define the award images paths for both themes
const awardsLight = [
  "/assets/images/awards/award1_light.png",
  "/assets/images/awards/award2_light.png",
  "/assets/images/awards/award3_light.png",
  "/assets/images/awards/award4_light.png",
  "/assets/images/awards/award5_light.png",
  "/assets/images/awards/award6_light.png",
];

const awardsDark = [
  "/assets/images/awards/award1_dark.png",
  "/assets/images/awards/award2_dark.png",
  "/assets/images/awards/award3_dark.png",
  "/assets/images/awards/award4_dark.png",
  "/assets/images/awards/award5_dark.png",
  "/assets/images/awards/award6_dark.png",
];

const AwardsBar = () => {
  // Use global theme context
  const { darkMode } = useTheme();

  // Custom Styles
  const customStyles = `
    .brand-gradient-text {
      background: linear-gradient(90deg, ${BRAND_BLUE}, ${BRAND_TEAL});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

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

  // Select the appropriate award images based on theme
  const awards = darkMode ? awardsDark : awardsLight;

  return (
    <div className={`relative w-full max-w-5xl mx-auto mt-4 rounded-3xl ${glassPanelClass} p-6 shadow-2xl mt-14`}>
      <style>{customStyles}</style>

      <h2 className={`text-3xl sm:text-4xl font-bold text-center ${textColorClass} mb-14`}>
        {/* Apply Gradient Text to Title */}
        <span className="brand-gradient-text">
          Awards & Recognitions
        </span>
      </h2>

      {/* Awards Grid: Reduced gap on mobile for better fit */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 place-items-center -mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        {awards.map((award, i) => (
          <motion.img
            key={i}
            src={award}
            alt={`Award ${i + 1}`}
            // Conditional class to dim images slightly in Light Mode for contrast
            className={`h-40 sm:h-48 lg:h-64 object-contain ${darkMode ? 'opacity-100' : 'opacity-100'}`}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: i * 0.1 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AwardsBar;