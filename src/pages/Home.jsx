import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Activity,
  Thermometer,
  Satellite,
  Wifi,
  TrendingUp,
  Zap,
} from "lucide-react";
import CircuitBoard3D from "../components/CircuitBoard3D";
import AnimatedCounter from "../components/AnimatedCounter";
import TestimonialSlider from "../components/TestimonialSlider";
import BlogSlider from "../components/BlogSlider";


const Home = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Environmental Monitoring",
      description:
        "Track temperature, humidity, and machine health in real-time with industrial-grade sensors.",
    },
    {
      icon: Activity,
      title: "Energy & Machine Insights",
      description:
        "Capture current, power usage, and machine uptime to reduce downtime and optimize costs.",
    },
    {
      icon: Satellite,
      title: "Reliable Connectivity",
      description:
        "GSM-powered data transfer ensures connectivity without Wi-Fi or LAN dependency.",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Plug-and-play devices deployed in hours, not weeks — designed for field-ready use.",
    },
    {
      icon: Wifi,
      title: "Cloud Dashboard",
      description:
        "Centralized dashboard for real-time visualization, anomaly alerts, and decision-making.",
    },
    {
      icon: TrendingUp,
      title: "Proven Impact",
      description:
        "Deployed solutions cut downtime by 60% and improved logistics efficiency by 90%.",
    },
  ];

  const stats = [
    { number: 2000, suffix: "+", label: "Devices Deployed" },
    { number: 15, suffix: "+", label: "Industries Served" },
    { number: 10, suffix: "+", label: "Countries Covered" },
    { number: 60, suffix: "%", label: "Downtime Reduction" },
  ];

  const milestones = [
    {
      year: "2021",
      title: "SenseGrid Founded",
      description: "Launched with the goal of smarter industrial monitoring.",
    },
    {
      year: "2022",
      title: "First Deployment",
      description:
        "DSI Production Monitor successfully implemented in factories.",
    },
    {
      year: "2023",
      title: "Cold Chain Tracking",
      description: "DHL Asset Tracker deployed nationwide for logistics.",
    },
    {
      year: "2024",
      title: "Global Rollout",
      description:
        "Expanded SenseGrid to 10+ countries with enterprise clients.",
    },
  ];

  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209) 51%, rgb(14,165,234))",
                  }}
                >
                  SENSEGRID
                </span>

                <br />
                <span className="text-3xl md:text-4xl">
                  Smart IoT for Industry & Logistics
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From factory floors to global cold chain logistics — SenseGrid
                delivers real-time monitoring, asset tracking, and actionable
                insights powered by IoT and GSM connectivity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to="/use-cases"
                  className="relative inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 bg-[length:200%_100%] bg-[position:var(--x,0)_0] transition-all duration-500 group-hover:[--x:100%] rounded-lg"></span>
                  <span className="relative flex items-center">
                    Explore Projects
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              <div className="relative">
                <CircuitBoard3D />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BlogSlider />

      {/* About Section */}
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
              About SenseGrid
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SenseGrid is a next-generation IoT device and platform designed to
              give businesses complete visibility into their operations. From
              monitoring industrial machines to tracking assets across
              countries, our solutions combine hardware, connectivity, and cloud
              intelligence to deliver actionable insights in real-time.
            </p>
          </motion.div>

          {/* Mission / Values */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To simplify the way businesses collect and act on data by
                providing rugged, reliable, and easy-to-deploy IoT devices
                powered by secure cloud technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Why SenseGrid?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Unlike generic trackers, SenseGrid devices are tailored for
                industrial and logistics environments. They are built rugged,
                battery-efficient, and GSM-ready for deployments where Wi-Fi is
                not an option.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be the trusted partner for global industries and logistics
                providers, enabling them to operate smarter, safer, and more
                sustainably through IoT innovation.
              </p>
            </motion.div>
          </div> */}
        </div>
      </section>

      {/* Why Choose SenseGrid */}
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
              Why You Choose SenseGrid?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Trusted by leading enterprises for industrial monitoring and
              logistics tracking, our devices are proven in the field with
              measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/30 transition-colors">
                    <feature.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

    </div>
  );
};

export default Home;
