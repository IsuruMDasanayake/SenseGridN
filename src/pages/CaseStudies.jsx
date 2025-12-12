import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(null);

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

  const caseStudies = [
    {
      client: "DHL Warehouse Condition Monitoring",
      industry: "Logistics & Cold Storage",
      image: "/assets/images/dhl.png",
      shortDescription:
        "DHL required a reliable system to monitor warehouse temperature conditions across multiple sites. With real-time visibility, alerts, and analytics, DHL ensured compliance and prevented losses in cold storage operations.",
      problem:
        "Maintaining precise temperature conditions in warehouses was critical, but manual checks often led to delays, compliance risks, and potential losses in temperature-sensitive goods.",
      request:
        "Needed a reliable solution with multiple temperature sensors, real-time alerts, and centralized dashboards to ensure safe cold storage operations.",
      solution: [
        "6 high-accuracy temperature sensors deployed across key warehouse zones",
        "Automated alerts when temperature thresholds exceeded",
        "Centralized SenseGrid dashboard for real-time monitoring",
        "Analytics and reporting with data export capabilities",
        "Remote access for warehouse managers and compliance teams",
      ],
      impact: [
        "Eliminated manual monitoring delays",
        "Improved compliance with cold chain standards",
        "Minimized product loss from temperature fluctuations",
        "Provided full visibility for regional managers",
      ],
      metrics: {
        "Compliance Reliability": "100%",
        "Product Loss Reduction": "Significant",
        "Warehouses Connected": "Multiple",
        "Deployment Time": "3 weeks",
      },
    },
    {
      client: "DSI Machine Condition Monitoring",
      industry: "Industrial Manufacturing",
      image: "/assets/images/dsi.jpg",
      shortDescription:
        "DSI integrated SenseGrid sensors to monitor machine health in real time. With current and infrared sensors connected to a unified dashboard, DSI reduced downtime and improved maintenance planning.",
      problem:
        "Unexpected machine breakdowns were disrupting production and creating costly downtime in manufacturing operations.",
      request:
        "Needed a system to monitor machine health (current and infrared) and provide dashboards for analytics and predictive maintenance scheduling.",
      solution: [
        "Current sensors to track machine power usage",
        "Infrared sensors for monitoring machine surface conditions",
        "SenseGrid dashboard with real-time visualization and export",
        "Threshold-based alerts for abnormal readings",
        "Analytics tools for identifying recurring machine issues",
      ],
      impact: [
        "Reduced unplanned machine downtime",
        "Enabled proactive maintenance scheduling",
        "Improved machine utilization rates",
        "Enhanced operational efficiency across production lines",
      ],
      metrics: {
        "Downtime Reduction": "High",
        "Maintenance Efficiency": "Improved",
        "Machines Covered": "Multiple Lines",
        "Deployment Time": "4 weeks",
      },
    },
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
      <section className="relative py-0 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight md:leading-[1.3]`}>
              <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)]">
                Case Studies
              </span>
            </h1>
            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto mb-12`}>
              See how enterprises are using SenseGrid to monitor environments,
              track machine health, and ensure operational reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-20 ${index < caseStudies.length - 1
                ? "border-b border-gray-200 dark:border-gray-700 pb-20"
                : ""
                }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {caseStudy.client}
                    </h2>
                  </div>
                  {/* Short Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {caseStudy.shortDescription}
                  </p>
                  <button
                    onClick={() => setActiveCase(caseStudy)}
                    className="relative group px-10 py-2 rounded-lg overflow-hidden font-semibold text-white"
                  >
                    {/* Animated Gradient Background */}
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
                                 bg-[length:200%_100%] bg-[position:var(--x,0)_0] transition-all duration-500 
                                 group-hover:[--x:100%] rounded-lg"
                    ></span>

                    {/* Button Text */}
                    <span className="relative flex items-center justify-center">
                      Learn More
                    </span>
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.client}
                      className="w-100 rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {activeCase && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setActiveCase(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className={`${glassPanelClass} backdrop-blur-xl rounded-2xl p-8 max-w-3xl w-full relative overflow-y-auto max-h-[90vh] shadow-2xl`}
            >
              <button
                onClick={() => setActiveCase(null)}
                className={`absolute top-4 right-4 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} text-2xl font-bold transition-colors`}
              >
                ✕
              </button>

              <h2 className={`text-3xl font-bold ${darkTextColorClass} mb-4`}>
                {activeCase.client}
              </h2>
              <img
                src={activeCase.image}
                alt={activeCase.client}
                className="w-100 rounded-xl shadow-lg mb-6"
              />

              {/* Problem */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${darkTextColorClass} mb-3 flex items-center`}>
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  The Challenge
                </h3>
                <p className={`${lightTextColorClass} pl-5 leading-relaxed`}>
                  {activeCase.problem}
                </p>
              </div>

              {/* Client Request */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${darkTextColorClass} mb-3 flex items-center`}>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Client Requirements
                </h3>
                <p className={`${lightTextColorClass} pl-5 leading-relaxed`}>
                  {activeCase.request}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${darkTextColorClass} mb-3 flex items-center`}>
                  <div className="w-2 h-2 bg-[rgb(14,165,234)] rounded-full mr-3"></div>
                  Our Solution
                </h3>
                <ul className="space-y-2 pl-5">
                  {activeCase.solution.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[rgb(14,165,234)] mr-2 mt-0.5 flex-shrink-0" />
                      <span className={`${lightTextColorClass}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-6">
                <h3 className={`text-xl font-semibold ${darkTextColorClass} mb-3 flex items-center`}>
                  <div className="w-2 h-2 bg-[rgb(11,209,209)] rounded-full mr-3"></div>
                  Results & Impact
                </h3>
                <ul className="space-y-2 pl-5">
                  {activeCase.impact.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-[rgb(11,209,209)] mr-2 mt-0.5 flex-shrink-0" />
                      <span className={`${lightTextColorClass}`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {Object.entries(activeCase.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className={`${isDarkMode ? 'bg-white/5 border border-white/10' : 'bg-gray-50 border border-gray-200'} p-4 rounded-lg text-center backdrop-blur-sm`}
                  >
                    <div className="text-2xl font-bold bg-gradient-to-r from-[rgb(14,165,234)] to-[rgb(11,209,209)] bg-clip-text text-transparent mb-1">
                      {value}
                    </div>
                    <div className={`text-sm ${lightTextColorClass}`}>
                      {key}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SenseGrid solutions are adaptable across industries requiring
              reliable monitoring, data insights, and safe environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Manufacturing",
                icon: "🏭",
                description: "Machine health and downtime prevention",
              },
              {
                name: "Logistics",
                icon: "🚛",
                description: "Warehouse and fleet monitoring",
              },
              {
                name: "Agriculture",
                icon: "🌾",
                description: "Environmental and crop condition tracking",
              },
              {
                name: "Energy",
                icon: "⚡",
                description: "Power usage and grid condition monitoring",
              },
              {
                name: "Healthcare",
                icon: "🏥",
                description: "Cold storage and equipment monitoring",
              },
              {
                name: "Mining",
                icon: "⛏️",
                description: "Equipment safety and environmental checks",
              },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              SenseGrid delivers end-to-end solutions — from sensors to
              dashboards. Let’s discuss how we can support your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Schedule Consultation
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                  Request Demo
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
