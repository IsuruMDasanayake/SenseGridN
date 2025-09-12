import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
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

  const getColorClasses = (color, popular) => {
    if (popular) {
      return "border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10";
    }
    const colorMap = {
      blue: "border-blue-200 dark:border-blue-800",
      green: "border-green-200 dark:border-green-800",
      purple: "border-purple-200 dark:border-purple-800",
    };
    return colorMap[color] || colorMap.blue;
  };

  const getButtonClasses = (color, popular) => {
    if (popular) {
      return "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700";
    }
    const colorMap = {
      blue: "bg-blue-600 text-white hover:bg-blue-700",
      green: "bg-green-600 text-white hover:bg-green-700",
      purple: "bg-purple-600 text-white hover:bg-purple-700",
    };
    return colorMap[color] || colorMap.blue;
  };

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
              Custom Pricing for Your Needs
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 mt-5">
              SenseGrid’s solutions are tailored to your organization’s unique
              requirements. The pricing depends on the number of devices,
              features, and deployment scale. To get an exact quote, please
              contact our team and we’ll create a solution just for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Single Pricing Card Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-gradient-to-r from-blue-500 via-teal-400 to-sky-500 rounded-3xl p-1 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-10 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  SenseGrid Features
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Everything you need to manage your IoT deployment efficiently.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 dark:bg-gray-700 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <Check className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-teal-600 transition-all duration-300">
                    Request a Quote
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
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
              Ready to Explore SenseGrid?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Contact our team to discuss your specific challenges and receive a
              personalized solution.
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Request a Quote
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
