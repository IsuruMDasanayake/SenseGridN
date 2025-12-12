import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  // Custom Styles
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

    .brand-gradient-text {
      background: linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

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

  const features = [
    "Customizable dashboards",
    "Real-time monitoring of devices and assets",
    "Predictive maintenance and alerts",
    "Flexible deployment for any scale",
    "Advanced analytics and reporting",
    "Secure cloud integration",
    "Expert support and consultation",
    "Seamless third-party integrations",
  ];

  return (
    <div className={`${techBgClass} min-h-screen ${textColorClass} font-sans selection:bg-[rgb(14,165,234)] selection:text-white overflow-x-hidden`}>
      <style>{customStyles}</style>

      {/* Background Elements */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
          <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
          <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
        </>
      )}

      {/* Hero Section */}
      <section className="relative py-20 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-[1.3]`}>
              <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)]">
                Custom Pricing for Your Needs
              </span>
            </h1>
            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto mb-12 mt-5 leading-relaxed`}>
              SenseGrid's solutions are tailored to your organization's unique
              requirements. The pricing depends on the number of devices,
              features, and deployment scale. To get an exact quote, please
              contact our team and we'll create a solution just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Single Pricing Card Section */}
      <section className="relative py-0 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {isDarkMode && (
                <div className="absolute -inset-1 bg-gradient-to-r from-[rgb(14,165,234)] to-[rgb(11,209,209)] rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              )}
              <div className={`relative ${glassPanelClass} rounded-3xl p-10 text-center shadow-2xl`}>
                <h2 className={`text-3xl font-bold ${darkTextColorClass} mb-4`}>
                  SenseGrid Features
                </h2>
                <p className={`${lightTextColorClass} mb-8`}>
                  Everything you need to manage your IoT deployment efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center ${glassPanelClass} rounded-lg px-4 py-3 transition-all duration-300 hover:-translate-y-1`}
                    >
                      <Check className="h-5 w-5 text-[rgb(11,209,209)] mr-3 flex-shrink-0" />
                      <span className={`${textColorClass} text-left`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <Link to="/contact" className="inline-block">
                  <button
                    className="relative group overflow-hidden px-8 py-4 rounded-lg text-white font-semibold 
               shadow-[0_0_20px_rgba(14,165,234,0.3)] hover:shadow-[0_0_30px_rgba(14,165,234,0.5)]
               active:scale-95 transition-all"
                  >
                    {/* New gradient background */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
                 bg-[length:200%_100%] bg-[position:var(--x,0)_0]
                 transition-all duration-500 group-hover:[--x:100%] rounded-lg"
                    ></div>

                    {/* Shine effect */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                 translate-x-[-200%] group-hover:translate-x-[200%]
                 transition-transform duration-700"
                    ></div>

                    <span className="relative z-10">Request a Quote</span>
                  </button>
                </Link>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${glassPanelClass} rounded-2xl p-12 shadow-2xl`}
          >
            <h2 className={`text-4xl font-bold ${darkTextColorClass} mb-6`}>
              Ready to Explore SenseGrid?
            </h2>
            <p className={`text-xl ${lightTextColorClass} mb-8 max-w-3xl mx-auto`}>
              Contact our team to discuss your specific challenges and receive a
              personalized solution.
            </p>
            <Link to="/contact">
              <button className="relative group overflow-hidden px-8 py-4 rounded-lg bg-[rgb(14,165,234)] text-white font-semibold shadow-[0_0_20px_rgba(14,165,234,0.3)] transition-all hover:shadow-[0_0_30px_rgba(14,165,234,0.5)] active:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
                <span className="relative">Request a Quote</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Pricing;
