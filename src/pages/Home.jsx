import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Thermometer,
  Satellite,
  Cpu,
  Wifi,
  Zap,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

import TestimonialSlider from "../components/TestimonialSlider";
import LogoBar from "../components/LogoBar";
import AwardsBar from "../components/AwardsBar";
import BlogSlider from "../components/BlogSlider";

const Home = () => {
  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();


  // --- Custom Styles for Glassmorphism & Tech Glow ---
  // Note: These styles are now dynamic based on the theme
  const customStyles = `
    .tech-bg-dark {
      background-color: #0b1120;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.1) 0px, transparent 50%);
      background-attachment: fixed;
    }
    .tech-bg-light {
      background-color: #f0f4f8;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.05) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.05) 0px, transparent 50%);
      background-attachment: fixed;
    }
    
    .glass-panel-dark {
      background: rgba(17, 25, 40, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
    .glass-panel-light {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    }
    
    .glass-panel-dark:hover {
      border-color: rgba(14, 165, 234, 0.3);
      box-shadow: 0 8px 32px 0 rgba(14, 165, 234, 0.15);
    }
    .glass-panel-light:hover {
        border-color: rgba(14, 165, 234, 0.5);
        box-shadow: 0 4px 20px 0 rgba(14, 165, 234, 0.1);
    }

    .brand-gradient-text {
      background: linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Adjusted glow blobs for mobile to prevent overflow/messiness */
    .glow-blob {
      position: absolute;
      filter: blur(80px);
      z-index: 0;
      opacity: 0.3;
      border-radius: 50%;
    }

    .tech-grid-overlay {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }
  `;

  // Dynamic Class Names
  const techBgClass = isDarkMode ? 'tech-bg-dark' : 'tech-bg-light';
  const glassPanelClass = isDarkMode ? 'glass-panel-dark' : 'glass-panel-light';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryButtonClass = isDarkMode
    ? "border-gray-600 hover:border-[rgb(11,209,209)] text-gray-300 hover:text-white hover:bg-[rgb(11,209,209)]/10"
    : "border-gray-300 hover:border-[rgb(11,209,209)] text-gray-700 hover:text-gray-900 hover:bg-[rgb(11,209,209)]/10";
  const navigate = useNavigate();
  // Section Divider Component
  const SectionDivider = () => (
    <div className="relative py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`h-px w-full ${isDarkMode
          ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
          : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          }`} />
      </div>
    </div>
  );
  const features = [
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description:
        "Track temperature, humidity, and critical machine conditions in real time.",
    },
    {
      icon: Activity,
      title: "Energy & Machine Insights",
      description:
        "Measure AC current, power usage, and machine uptime to reduce downtime.",
    },
    {
      icon: Satellite,
      title: "Reliable Connectivity",
      description:
        "Multiple wireless options — GSM, LoRaWAN, and NB-IoT — ensure connectivity anywhere.",
    },
    {
      icon: Cpu,
      title: "Anomaly Detection",
      description:
        "Real-time alerts notify you of unusual conditions to prevent costly breakdowns.",
    },
    {
      icon: Wifi,
      title: "Cloud Dashboard",
      description:
        "A centralized dashboard for real-time visualization, data export, and analytics.",
    },
    {
      icon: Zap,
      title: "Full Solution",
      description:
        "From sensors to dashboards, SenseGrid provides the complete end-to-end IoT system.",
    },
  ];

  return (
    <div className={`${techBgClass} min-h-screen ${textColorClass} font-sans selection:bg-[rgb(14,165,234)] selection:text-white overflow-x-hidden`}>
      <style>{customStyles}</style>


      {/* Background Elements (Only active in dark mode) */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
          <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
          <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
        </>
      )}

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-40 lg:pb-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Side: Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[rgb(14,165,234)]/30 ${isDarkMode ? 'bg-[rgb(14,165,234)]/10' : 'bg-[rgb(14,165,234)]/20'} mb-6 backdrop-blur-sm`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgb(11,209,209)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[rgb(11,209,209)]"></span>
                </span>
                <span className="text-xs font-medium tracking-wider uppercase text-[rgb(11,209,209)]">
                  Next Gen IoT Platform
                </span>
              </motion.div>

              {/* Responsive text sizing: text-4xl on mobile, 7xl on desktop */}
              <motion.h1
                className={`text-5xl sm:text-5xl md:text-7xl font-bold ${darkTextColorClass} mb-6 leading-tight`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)] block">
                  SENSEGRID
                </span>
                {/* <span className={`block text-2xl sm:text-3xl md:text-4xl ${lightTextColorClass} font-light mt-2 tracking-wide`}>
                  Intelligent Industrial Monitoring
                </span> */}
              </motion.h1>

              <motion.p
                className={`text-base sm:text-lg ${lightTextColorClass} mb-8 sm:mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:border-l-2 lg:border-[rgb(14,165,234)]/30 lg:pl-6`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SenseGrid provides a full-featured Industrial IoT platform combining
                embedded intelligence, flexible connectivity, and cloud control
                from real-time device management to actionable insights. Whether
                you're tracking equipment, monitoring energy usage, or delivering
                predictive maintenance, SenseGrid scales with your needs.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/case-studies"
                  className="relative group overflow-hidden px-8 py-3 rounded-lg text-white font-semibold 
             shadow-[0_0_20px_rgba(14,165,234,0.3)] hover:shadow-[0_0_30px_rgba(14,165,234,0.5)] 
             active:scale-95 text-center transition-all"
                >
                  {/* New gradient background */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
               bg-[length:200%_100%] bg-[position:var(--x,0)_0]
               transition-all duration-500 group-hover:[--x:100%] rounded-lg"
                  ></div>

                  {/* Shine effect remains */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                  translate-x-[-200%] group-hover:translate-x-[100%] 
                  transition-transform duration-700"></div>

                  <span className="relative z-10 flex items-center justify-center">
                    Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Link>

                <button
                  onClick={() => navigate("/contact")}
                  className={`px-8 py-3 rounded-lg border transition-all hover:bg-opacity-5 font-medium active:scale-95 ${secondaryButtonClass}`}
                >
                  Request Demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side: Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative mt-8 lg:mt-0"
            >
              {isDarkMode && (
                <div className="absolute -inset-1 bg-gradient-to-br from-[rgb(14,165,234)] to-[rgb(11,209,209)] rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              )}
              <div className={`relative ${glassPanelClass} rounded-2xl p-2 shadow-2xl`}>
                <div className={`relative rounded-xl overflow-hidden ${isDarkMode ? 'bg-black/50' : 'bg-white/50'} aspect-video`}>
                  <video
                    src="/assets/videos/home.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Overlay Lines - reduced opacity for mobile */}
                  <div className={`absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgb(11,209,209)] to-transparent opacity-30 ${!isDarkMode && 'opacity-50'}`}></div>
                  <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgb(14,165,234)] to-transparent opacity-30 ${!isDarkMode && 'opacity-50'}`}></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <BlogSlider /> */}

      {/* About Section */}
      <section className="py-16 md:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} // 20% visible to trigger
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >


            {/* Responsive padding: p-6 on mobile, p-12 on desktop */}
            <div className={`${glassPanelClass} p-6 md:p-12 rounded-2xl md:rounded-3xl max-w-5xl mx-auto ${isDarkMode ? 'border-t border-[rgb(14,165,234)]/20' : 'border-t border-[rgb(14,165,234)]/30'}`}>
              <h2 className={`text-3xl md:text-5xl font-bold ${darkTextColorClass} mb-6`}>
                <span className="text-[rgb(11,209,209)]">  About SenseGrid</span>
              </h2>
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed font-light text-center md:text-center`}>
                SenseGrid is an IIoT platform that improves industrial operations through
                smart monitoring and automation. It combines sensor data such as machine
                current, temperature, and warehouse conditions with cloud analytics to
                deliver real-time insights and predictive alerts. By preventing
                over-temperature and over-current events, it reduces downtime and
                improves MTTA and MTBF. Proven in machine and warehouse monitoring,
                SenseGrid enables early intervention, safer operations, and data-driven
                decisions. With full historical logs, it supports accurate analysis and
                predictive maintenance for a more resilient industrial environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Logo Bar Area */}
      <div className={`relative z-10 border-y ${isDarkMode ? 'border-white/5 bg-black/20' : 'border-gray-200 bg-white/50'} backdrop-blur-sm overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <LogoBar />
        </div>
      </div>

      <div className="mt-12 opacity-80 overflow-x-auto">
        <AwardsBar />
      </div>

      {/* Features Grid */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-5xl font-bold ${darkTextColorClass} mb-4 md:mb-6`}
            >
              Why Choose <span className="brand-gradient-text">SenseGrid?</span>
            </motion.h2>
            <p className={`text-lg ${lightTextColorClass} max-w-2xl mx-auto px-4`}>
              Enterprise-grade reliability for industrial and logistics environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${glassPanelClass} p-6 rounded-xl group transition-all duration-300 relative overflow-hidden`}
              >
                {/* Hover Gradient Overlay */}
                {isDarkMode && (
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgb(14,165,234)]/5 to-[rgb(11,209,209)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 md:mb-6 transition-colors border ${isDarkMode ? 'bg-[rgb(14,165,234)]/10 border-[rgb(14,165,234)]/20 group-hover:bg-[rgb(14,165,234)]/20' : 'bg-gray-100 border-gray-200 group-hover:bg-gray-200'}`}>
                    <feature.icon className={`h-6 w-6 ${isDarkMode ? 'text-[rgb(11,209,209)] group-hover:text-[rgb(14,165,234)]' : 'text-[rgb(14,165,234)] group-hover:text-[rgb(11,209,209)]'} transition-colors`} />
                  </div>

                  <h3 className={`text-lg md:text-xl font-bold ${darkTextColorClass} mb-2 md:mb-3 group-hover:text-[rgb(11,209,209)] transition-colors`}>
                    {feature.title}
                  </h3>

                  <p className={`${lightTextColorClass} text-sm leading-relaxed`}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Testimonials */}
      <div className="relative z-10 pb-16 md:pb-20">
        <TestimonialSlider />
      </div>
    </div>
  );
};

export default Home;