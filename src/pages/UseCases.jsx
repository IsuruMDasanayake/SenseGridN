import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Thermometer, MapPin, Battery, CheckCircle, ArrowRight } from 'lucide-react';

const UseCases = () => {
  const caseStudies = [
    {
      client: 'DHL Asset Tracker',
      industry: 'Logistics & Supply Chain',
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      problem: 'DHL faced difficulty in tracking sensitive packages during cross-country deliveries, especially temperature-sensitive medical supplies.',
      request: 'Needed compact device with GPS tracking, GSM alerts, and temperature logging for cold chain logistics.',
      solution: [
        'GPS live updates with 5-meter accuracy',
        'High-accuracy temperature sensor (-40°C to +85°C)',
        'GSM module for real-time cloud synchronization',
        'Rechargeable battery with 72-hour continuous operation',
        'Integrated with SenseGrid dashboard for fleet management'
      ],
      impact: [
        'Reduced temperature-related disputes by 90%',
        'Ensured compliance with pharmaceutical standards',
        'Improved customer satisfaction scores by 35%',
        'Saved $2M annually in damaged goods compensation'
      ],
      metrics: {
        'Dispute Reduction': '90%',
        'Cost Savings': '$2M/year',
        'Satisfaction Increase': '35%',
        'Deployment Time': '2 weeks'
      }
    },
    {
      client: 'DSI Production Monitor',
      industry: 'Industrial Manufacturing',
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      problem: 'Large manufacturing plant struggled with unexpected equipment failures causing costly production downtime.',
      request: 'Predictive maintenance solution for critical machinery to prevent unplanned downtime.',
      solution: [
        'Vibration and temperature sensors on critical equipment',
        'Machine learning algorithms for failure prediction',
        'Real-time alerts for maintenance teams',
        'Integration with existing CMMS system',
        'Custom dashboard for maintenance planning'
      ],
      impact: [
        'Reduced unplanned downtime by 75%',
        'Extended equipment lifespan by 40%',
        'Improved maintenance efficiency by 60%',
        'Saved $5M in avoided production losses'
      ],
      metrics: {
        'Downtime Reduction': '75%',
        'Equipment Lifespan': '+40%',
        'Efficiency Gain': '60%',
        'Annual Savings': '$5M'
      }
    }
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
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Discover how organizations across industries are transforming their 
              operations with SenseGrid's industrial IoT solutions.
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
              className={`mb-20 ${index < caseStudies.length - 1 ? 'border-b border-gray-200 dark:border-gray-700 pb-20' : ''}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {caseStudy.client}
                    </h2>
                  </div>

                  {/* Problem */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      The Challenge
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 pl-5">
                      {caseStudy.problem}
                    </p>
                  </div>

                  {/* Client Request */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      Client Requirements
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 pl-5">
                      {caseStudy.request}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Our Solution
                    </h3>
                    <ul className="space-y-2 pl-5">
                      {caseStudy.solution.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      Results & Impact
                    </h3>
                    <ul className="space-y-2 pl-5">
                      {caseStudy.impact.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(caseStudy.metrics).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.client}
                      className="w-full rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-teal-500/20 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
              Our solutions have been successfully deployed across diverse 
              industries, each with unique challenges and requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Manufacturing', icon: '🏭', description: 'Predictive maintenance and quality control' },
              { name: 'Logistics', icon: '🚛', description: 'Asset tracking and cold chain monitoring' },
              { name: 'Agriculture', icon: '🌾', description: 'Smart farming and precision agriculture' },
              { name: 'Energy', icon: '⚡', description: 'Grid monitoring and renewable energy' },
              { name: 'Healthcare', icon: '🏥', description: 'Medical device monitoring and compliance' },
              { name: 'Mining', icon: '⛏️', description: 'Safety monitoring and equipment tracking' }
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
              Join hundreds of organizations that have transformed their operations 
              with SenseGrid. Let's discuss your specific challenges and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View More Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;