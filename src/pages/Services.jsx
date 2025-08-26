import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, BarChart3, Bell, Plug, Shield, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Monitoring',
      description: 'Real-time data collection and storage with scalable cloud infrastructure for all your IoT devices.',
      features: ['24/7 Data Collection', 'Scalable Storage', 'Global Access', 'API Integration'],
      color: 'blue'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'AI-powered analytics to predict equipment failures and optimize maintenance schedules.',
      features: ['Machine Learning Models', 'Failure Prediction', 'Maintenance Optimization', 'Cost Reduction'],
      color: 'green'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Intelligent notification system with customizable triggers and multi-channel delivery.',
      features: ['Custom Thresholds', 'Multiple Channels', 'Priority Levels', 'Escalation Rules'],
      color: 'orange'
    },
    {
      icon: Plug,
      title: 'Device Integration',
      description: 'Seamless integration with existing systems and third-party devices for unified monitoring.',
      features: ['Protocol Support', 'Legacy Integration', 'Custom Adapters', 'Real-time Sync'],
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Enterprise-grade security with end-to-end encryption and compliance management.',
      features: ['Data Encryption', 'Access Control', 'Compliance', 'Audit Trails'],
      color: 'red'
    },
    {
      icon: Headphones,
      title: 'Expert Support',
      description: '24/7 technical support with dedicated account management and training services.',
      features: ['24/7 Support', 'Account Manager', 'Training', 'Documentation'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 bg-blue-50 dark:bg-blue-900/10 text-blue-600 dark:text-blue-400',
      green: 'from-green-500 to-green-600 bg-green-50 dark:bg-green-900/10 text-green-600 dark:text-green-400',
      orange: 'from-orange-500 to-orange-600 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400',
      purple: 'from-purple-500 to-purple-600 bg-purple-50 dark:bg-purple-900/10 text-purple-600 dark:text-purple-400',
      red: 'from-red-500 to-red-600 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400',
      teal: 'from-teal-500 to-teal-600 bg-teal-50 dark:bg-teal-900/10 text-teal-600 dark:text-teal-400'
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 
               bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
               bg-clip-text text-transparent">
  Our Services
</h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive IIoT solutions designed to transform your industrial 
              operations with cutting-edge technology and expert support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getColorClasses(service.color).split(' ')[0]} ${getColorClasses(service.color).split(' ')[1]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${getColorClasses(service.color).split(' ')[2]} ${getColorClasses(service.color).split(' ')[3]} mr-3`}></div>
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
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful deployment 
              and maximum ROI from your IoT investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment & Planning',
                description: 'We analyze your current infrastructure and define clear objectives for your IoT implementation.',
                duration: '1-2 weeks'
              },
              {
                step: '02',
                title: 'Deployment & Integration',
                description: 'Our team handles device installation, network setup, and integration with your existing systems.',
                duration: '2-4 weeks'
              },
              {
                step: '03',
                title: 'Training & Support',
                description: 'Comprehensive training for your team and ongoing support to ensure optimal performance.',
                duration: 'Ongoing'
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {phase.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {phase.duration}
                  </div>
                </div>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300 dark:bg-blue-600 transform -translate-y-1/2"></div>
                )}
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your industrial 
              IoT goals and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Request Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;