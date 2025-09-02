import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Thermometer,
  Activity,
  Battery,
  Wifi,
  Gauge,
  Bell,
} from "lucide-react";

const Products = () => {
  const specifications = [
    { label: "Operating Temperature", value: "-20°C to +70°C" },
    { label: "Enclosure Rating", value: "IP65 (Dust & Splash Resistant)" },
    { label: "Power Options", value: "Direct AC (Primary), with backup support" },
    { label: "Connectivity", value: "GSM, NB-IoT, LoRaWAN" },
    {
      label: "Sensors",
      value: "Current, Temperature, Humidity, Infrared (Condition Monitoring)",
    },
    { label: "Dashboard", value: "Cloud-based, with export & analytics" },
    { label: "Dimensions", value: "Compact, industrial-ready design" },
    { label: "Customer Support", value: "Provided by SLT-Mobitel Digital Labs" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Industrial-Grade",
      description:
        "Rugged design for factories, warehouses, and logistics environments.",
    },
    {
      icon: Battery,
      title: "Reliable Power",
      description:
        "Plugs directly into AC power with backup options for uninterrupted monitoring.",
    },
    {
      icon: Wifi,
      title: "Multiple Connectivity",
      description:
        "GSM, LoRaWAN, and NB-IoT ensure data flows even without Wi-Fi or LAN.",
    },
    {
      icon: Gauge,
      title: "Real-Time Monitoring",
      description:
        "Live dashboards and alerts provide clear insights into machine health and environment.",
    },
  ];

  const workflowSteps = [
    {
      step: 1,
      title: "Install Device",
      description:
        "Mount the Monitor One unit on machines or in warehouses — simple and quick setup.",
    },
    {
      step: 2,
      title: "Connect Wirelessly",
      description:
        "Device transmits securely via GSM, NB-IoT, or LoRaWAN depending on location.",
    },
    {
      step: 3,
      title: "Stream Data",
      description:
        "Continuously tracks current, temperature, humidity, and machine conditions.",
    },
    {
      step: 4,
      title: "Monitor & Respond",
      description:
        "Cloud dashboards provide alerts, reports, and insights to reduce downtime and optimize costs.",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
                  IoT Monitoring Device
                </span>
                {/* <span className="block text-2xl md:text-3xl text-gray-900 dark:text-white mt-2">
                  Industrial IoT Monitoring Device
                </span> */}
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                SenseGrid is flagship IoT solution, designed for
                machine condition and environment monitoring. It provides
                real-time insights into equipment health, energy usage, and
                safety conditions — all through a cloud dashboard.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  Industrial-Grade
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  Reliable Connectivity
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  Cloud Dashboard
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative inline-block w-[580px] max-w-full mx-auto lg:ml-20">
                {/* Gradient Glow Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>

                {/* Image Container */}
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <img
                    src="/assets/images/abstract-1.png"
                    alt="SenseGrid Monitor One Device"
                    className="mx-auto w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-contain rounded-xl"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Monitor One is engineered for continuous operation in demanding
              industrial environments, with dependable sensors and secure
              connectivity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {spec.label}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {spec.value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Key Benefits
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From factory floors to warehouse monitoring, Monitor One helps you
              track conditions, prevent downtime, and make smarter decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Deploy in minutes — start monitoring immediately with live
              dashboards and alerts.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-teal-500 to-blue-500 transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
