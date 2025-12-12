import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";
import {
  Cloud,
  BarChart3,
  Bell,
  Plug,
  Shield,
  Headphones,
  Check,
  ClipboardList,
  Cpu,
  Wrench,
  CheckCircle,
  FileText,
  Factory,
  Gauge,
  PenTool,
  CircuitBoard,
  Layout,
  Code,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
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

  const services = [
    {
      icon: Cloud,
      title: "Cloud Monitoring",
      description:
        "Real-time data ingestion and storage with globally scalable cloud infrastructure for all your devices.",
      features: [
        "24/7 Uptime & Monitoring",
        "Scalable Data Storage",
        "Global Access Anywhere",
        "Secure API Integration",
      ],
      color: "blue",
    },
    {
      icon: BarChart3,
      title: "Predictive Insights",
      description:
        "Advanced analytics to detect anomalies, forecast trends, and optimize asset performance.",
      features: [
        "Data-Driven Forecasting",
        "Downtime Prevention",
        "Resource Optimization",
        "Operational Efficiency",
      ],
      color: "green",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description:
        "Intelligent notification engine with configurable triggers and multi-channel delivery.",
      features: [
        "Custom Threshold Settings",
        "Email, SMS & App Alerts",
        "Priority Escalations",
        "Event-Based Rules",
      ],
      color: "orange",
    },
    {
      icon: Plug,
      title: "Device Integration",
      description:
        "Seamless onboarding and integration with existing systems, protocols, and third-party hardware.",
      features: [
        "Multi-Protocol Support",
        "Legacy System Integration",
        "Custom Connectors",
        "Real-Time Sync",
      ],
      color: "purple",
    },
    {
      icon: Shield,
      title: "Security Management",
      description:
        "Enterprise-grade protection with full-stack encryption, compliance, and audit capabilities.",
      features: [
        "End-to-End Encryption",
        "Role-Based Access",
        "Compliance Frameworks",
        "Complete Audit Trails",
      ],
      color: "red",
    },
    {
      icon: Headphones,
      title: "Expert Support",
      description:
        "24/7 dedicated support with account managers, onboarding assistance, and continuous training.",
      features: [
        "Round-the-Clock Helpdesk",
        "Dedicated Account Manager",
        "Workshops & Training",
        "Comprehensive Documentation",
      ],
      color: "teal",
    },
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400",
      green:
        "from-green-500 to-green-600 bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400",
      orange:
        "from-orange-500 to-orange-600 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400",
      purple:
        "from-purple-500 to-purple-600 bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400",
      red: "from-red-500 to-red-600 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400",
      teal: "from-teal-500 to-teal-600 bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400",
    };
    return colorMap[color] || colorMap.blue;
  };

  // Workflow steps (horizontal flow)
  const steps = [
    { icon: ClipboardList, title: "Requirements elicitation" },
    {
      icon: Cpu,
      title: "Electronics Development",
      subSteps: [
        { icon: Layout, title: "Electronics Layout" },
        { icon: CircuitBoard, title: "PCB / Hardware Design" },
        { icon: Code, title: "FW & SW Development" },
      ],
    },
    { icon: Wrench, title: "Prototyping and assembly" },
    { icon: CheckCircle, title: "Testing" },
    {
      icon: FileText,
      title: "Composing design documentation for mass production",
    },
    { icon: Factory, title: "Manufacturing" },
    { icon: Gauge, title: "Samples testing after production" },
    { icon: PenTool, title: "Documenting changes and updates" },
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
      <section className="relative py-10 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 
               leading-tight md:leading-[1.3] 
               bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
               bg-clip-text text-transparent"
            >
              Our Services
            </h1>

            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto mb-12`}>
              Comprehensive IIoT services designed to modernize industrial
              operations with scalable platforms, actionable insights, and
              dedicated support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${glassPanelClass} rounded-xl p-8 transition-all duration-300 group hover:-translate-y-2`}
              >
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClasses(service.color).split(" ")[0]
                      } ${getColorClasses(service.color).split(" ")[1]
                      } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className={`text-2xl font-bold ${darkTextColorClass} mb-3 group-hover:text-[rgb(11,209,209)] transition-colors`}>
                    {service.title}
                  </h3>
                  <p className={`${lightTextColorClass} mb-6`}>
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div
                        className={`w-2 h-2 rounded-full ${getColorClasses(service.color).split(" ")[2]
                          } ${getColorClasses(service.color).split(" ")[3]} mr-3`}
                      ></div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 mb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Desktop unchanged */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className={`text-4xl font-bold ${darkTextColorClass} mb-6`}>
              Our Implementation Process
            </h2>
            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto`}>
              We follow a structured methodology to ensure smooth deployment and
              maximum ROI for your IIoT investment.
            </p>
          </motion.div>
          <div className="md:scale-100 sm:scale-80 scale-75 transform origin-top">
            <div className="flex flex-wrap md:flex-nowrap items-start justify-center md:justify-between relative mt-24 gap-x-16 gap-y-12 text-gray-900 dark:text-white">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="flex flex-col items-center relative w-48 md:w-48"
                >
                  {/* Icon */}
                  <div className="relative">
                    <step.icon
                      className="w-16 h-16 text-green-400"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Title */}
                  <p className="mt-4 text-sm md:text-base max-w-[160px] text-center">
                    {step.title}
                  </p>

                  {/* Sub-steps box */}
                  {step.subSteps && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: i * 0.2 + 0.1 }}
                      className="hidden md:flex absolute left-100 transform -translate-x-1/2 top-60 border-2 border-dashed border-green-400 rounded-xl p-4 flex space-x-6 dark:bg-slate-900"
                    >
                      {step.subSteps.map((sub, j) => (
                        <div
                          key={j}
                          className="flex flex-col items-center w-32"
                        >
                          <sub.icon
                            className="w-10 h-10 text-green-400"
                            strokeWidth={1.5}
                          />
                          <p className="mt-2 text-xs">{sub.title}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {/* Vertical double-headed arrow */}
                  {step.subSteps &&
                    step.title === "Electronics Development" && (
                      <motion.svg
                        className="hidden md:block absolute z-20 pointer-events-none"
                        style={{
                          left: "50%",
                          top: "100%",
                          transform: "translateX(-50%)",
                          width: "20px",
                          height: "120px",
                        }}
                        viewBox="0 0 20 120"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.2 + 0.2 }}
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <defs>
                          <marker
                            id="double-arrow-vertical"
                            markerWidth="6"
                            markerHeight="6"
                            refX="3"
                            refY="3"
                            orient="auto"
                          >
                            <path d="M0 0 L6 3 L0 6 Z" fill="#34D399" />
                          </marker>
                          <marker
                            id="double-arrow-vertical-start"
                            markerWidth="6"
                            markerHeight="6"
                            refX="3"
                            refY="3"
                            orient="auto-start-reverse"
                          >
                            <path d="M0 0 L6 3 L0 6 Z" fill="#34D399" />
                          </marker>
                        </defs>

                        <line
                          x1="10"
                          y1="10"
                          x2="10"
                          y2="100"
                          stroke="#34D399"
                          strokeWidth="1.5"
                          strokeDasharray="1,2.9"
                          markerStart="url(#double-arrow-vertical-start)"
                          markerEnd="url(#double-arrow-vertical)"
                        />
                      </motion.svg>
                    )}

                  {/* Dotted horizontal arrow */}
                  {i < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                      className="absolute top-8 left-full -ml-0 w-16 flex items-center"
                    >
                      <div className="border-t-2 border-dotted border-green-400 flex-grow"></div>
                      <div className="ml-[-4px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[9px] border-l-green-400 border-b-[6px] border-b-transparent"></div>
                    </motion.div>
                  )}

                  {/* Custom loop arrow */}
                  {step.title === "Testing" && (
                    <motion.svg
                      className="hidden md:block absolute z-20 pointer-events-none"
                      style={{
                        left: "-305px",
                        top: "-64px",
                        width: "540px",
                        height: "144px",
                      }}
                      viewBox="-40 0 240 144"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: i * 0.2 + 0.4 }}
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <defs>
                        <marker
                          id="sg-arrow-small"
                          markerWidth="6"
                          markerHeight="6"
                          refX="3"
                          refY="3"
                          orient="auto"
                        >
                          <path d="M0 0 L6 3 L0 6 Z" fill="#34D399" />
                        </marker>
                      </defs>

                      <path
                        d="M160 55 L160 16 L-150 16 L-150 55"
                        stroke="#34D399"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray="1,2.9"
                        markerEnd="url(#sg-arrow-small)"
                      />
                    </motion.svg>
                  )}
                </motion.div>
              ))}
            </div>
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let’s discuss how our services can help you unlock efficiency,
              resilience, and scalability across your industrial workflows.
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

export default Services;
