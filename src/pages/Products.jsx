import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Thermometer, MapPin, Battery, Wifi, Gauge, Activity, Radio } from 'lucide-react';

const Products = () => {
  const specifications = [
    { label: 'Operating Temperature', value: '-40°C to +85°C' },
    { label: 'Enclosure Rating', value: 'IP67 (Dustproof & Waterproof)' },
    { label: 'Battery Life', value: 'Up to 5 years (replaceable pack)' },
    { label: 'Connectivity', value: 'GSM, NB-IoT, LoRaWAN, BLE' },
    { label: 'Sensors', value: 'Temperature, Current, Vibration, GPS, Humidity' },
    { label: 'Power Options', value: 'Battery, USB-C, or Solar (optional)' },
    { label: 'Dimensions', value: '118mm × 76mm × 38mm' },
    { label: 'Certifications', value: 'CE, FCC, IC' }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Rugged & Reliable',
      description: 'Industrial-grade enclosure (IP67) designed for factories, logistics, and outdoor use.'
    },
    {
      icon: Battery,
      title: 'Extended Battery Life',
      description: 'Up to 5 years of autonomous operation — no frequent maintenance required.'
    },
    {
      icon: Wifi,
      title: 'Flexible Connectivity',
      description: 'Multiple wireless options: GSM, LoRaWAN, and NB-IoT ensure coverage anywhere.'
    },
    {
      icon: Gauge,
      title: 'Smart Monitoring',
      description: 'Real-time sensor data with cloud integration, anomaly detection, and instant alerts.'
    }
  ];

  const workflowSteps = [
    {
      step: 1,
      title: 'Install Device',
      description: 'Mount Monitor One on machines, vehicles, or assets. No wiring required.'
    },
    {
      step: 2,
      title: 'Auto Connect',
      description: 'Device automatically connects via GSM / LoRaWAN and syncs with the cloud.'
    },
    {
      step: 3,
      title: 'Stream Data',
      description: 'Continuously logs temperature, vibration, GPS, and electrical usage.'
    },
    {
      step: 4,
      title: 'Analyze & Respond',
      description: 'AI-powered analytics with instant notifications for failures or abnormal conditions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Monitor One
                <span className="block text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mt-2">
                  Rugged Industrial IoT Device
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Monitor One is SenseGrid’s flagship IoT device built for industrial monitoring 
                and logistics. It provides real-time insights into equipment, energy, and assets 
                — anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                  IP67 Certified
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  5-Year Battery
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                  Global Connectivity
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop"
                  alt="SenseGrid Monitor One Device"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    Device Online
                  </span>
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
              Monitor One is engineered for reliability, scalability, and deployment 
              in the toughest industrial conditions.
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
              From factory floors to cold chain logistics, Monitor One helps you 
              track, optimize, and respond faster.
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
              Deploy in minutes — start monitoring immediately with real-time insights.
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
              Get in touch with our team to explore deployment options and 
              integrate SenseGrid Monitor One into your operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Request a Demo
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Download Datasheet
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
