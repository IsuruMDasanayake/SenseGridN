import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const UseCases = () => {
  const [activeCase, setActiveCase] = useState(null);

  const caseStudies = [
    {
      client: "DHL Warehouse Monitoring",
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              See how enterprises are using SenseGrid to monitor environments,
              track machine health, and ensure operational reliability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.client}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-20 ${
                index < caseStudies.length - 1
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
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-xl"></div>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-3xl w-full relative overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setActiveCase(null)}
                className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
              >
                ✕
              </button>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {activeCase.client}
              </h2>
              <img
                src={activeCase.image}
                alt={activeCase.client}
                className="w-full rounded-xl mb-6 shadow-lg"
              />

              {/* Problem */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  The Challenge
                </h3>
                <p className="text-gray-600 dark:text-gray-300 pl-5">
                  {activeCase.problem}
                </p>
              </div>

              {/* Client Request */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Client Requirements
                </h3>
                <p className="text-gray-600 dark:text-gray-300 pl-5">
                  {activeCase.request}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Our Solution
                </h3>
                <ul className="space-y-2 pl-5">
                  {activeCase.solution.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Results & Impact
                </h3>
                <ul className="space-y-2 pl-5">
                  {activeCase.impact.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {Object.entries(activeCase.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">
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

export default UseCases;
