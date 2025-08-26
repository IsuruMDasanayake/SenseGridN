import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started with IoT',
      monthlyPrice: 99,
      annualPrice: 999,
      color: 'blue',
      features: [
        { name: 'Up to 50 devices', included: true },
        { name: 'Basic dashboard', included: true },
        { name: 'Email alerts', included: true },
        { name: 'Standard support', included: true },
        { name: 'API access', included: true },
        { name: 'Data retention (6 months)', included: true },
        { name: 'Custom integrations', included: false },
        { name: 'Advanced analytics', included: false },
        { name: 'Priority support', included: false },
        { name: 'SLA guarantee', included: false }
      ]
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses with advanced needs',
      monthlyPrice: 299,
      annualPrice: 2999,
      color: 'green',
      popular: true,
      features: [
        { name: 'Up to 500 devices', included: true },
        { name: 'Advanced dashboard', included: true },
        { name: 'Multi-channel alerts', included: true },
        { name: 'Priority support', included: true },
        { name: 'Full API access', included: true },
        { name: 'Data retention (2 years)', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Predictive maintenance', included: true },
        { name: 'SLA guarantee', included: false }
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large organizations requiring maximum scalability',
      monthlyPrice: 999,
      annualPrice: 9999,
      color: 'purple',
      features: [
        { name: 'Unlimited devices', included: true },
        { name: 'Custom dashboard', included: true },
        { name: 'Advanced alerting', included: true },
        { name: '24/7 dedicated support', included: true },
        { name: 'Custom API development', included: true },
        { name: 'Unlimited data retention', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'AI-powered analytics', included: true },
        { name: 'Predictive maintenance', included: true },
        { name: '99.9% SLA guarantee', included: true }
      ]
    }
  ];

  const getColorClasses = (color, popular) => {
    if (popular) {
      return 'border-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10';
    }
    const colorMap = {
      blue: 'border-blue-200 dark:border-blue-800',
      green: 'border-green-200 dark:border-green-800',
      purple: 'border-purple-200 dark:border-purple-800'
    };
    return colorMap[color] || colorMap.blue;
  };

  const getButtonClasses = (color, popular) => {
    if (popular) {
      return 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700';
    }
    const colorMap = {
      blue: 'bg-blue-600 text-white hover:bg-blue-700',
      green: 'bg-green-600 text-white hover:bg-green-700',
      purple: 'bg-purple-600 text-white hover:bg-purple-700'
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Choose the plan that fits your needs. No hidden fees, no surprises. 
              Scale up or down as your business grows.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isAnnual ? 'bg-green-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
                Annual
              </span>
              <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 text-xs rounded-full">
                Save 16%
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-700 rounded-2xl p-8 border-2 ${getColorClasses(plan.color, plan.popular)} shadow-lg ${
                  plan.popular ? 'transform scale-105 shadow-2xl' : 'hover:shadow-xl'
                } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">
                      /{isAnnual ? 'year' : 'month'}
                    </span>
                  </div>

                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${getButtonClasses(plan.color, plan.popular)}`}>
                    Get Started
                  </button>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        feature.included 
                          ? 'bg-green-100 dark:bg-green-900/20' 
                          : 'bg-gray-100 dark:bg-gray-800'
                      }`}>
                        {feature.included ? (
                          <Check className="h-3 w-3 text-green-600 dark:text-green-400" />
                        ) : (
                          <X className="h-3 w-3 text-gray-400 dark:text-gray-500" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        feature.included 
                          ? 'text-gray-900 dark:text-white' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
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
              Detailed Feature Comparison
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compare all features across our pricing plans to find the perfect 
              fit for your organization.
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900 dark:text-white">
                    Feature
                  </th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="px-6 py-4 text-center text-sm font-medium text-gray-900 dark:text-white">
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans[0].features.map((_, featureIndex) => (
                  <tr key={featureIndex} className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {plans[0].features[featureIndex].name}
                    </td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="px-6 py-4 text-center">
                        {plan.features[featureIndex].included ? (
                          <Check className="h-5 w-5 text-green-600 dark:text-green-400 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 dark:text-gray-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No, there are no setup fees for any of our plans. You only pay the monthly or annual subscription fee.'
              },
              {
                question: 'What happens if I exceed my device limit?',
                answer: 'If you approach your device limit, we\'ll notify you in advance. You can either upgrade your plan or purchase additional device slots.'
              },
              {
                question: 'Do you offer a free trial?',
                answer: 'Yes, we offer a 30-day free trial of our Pro plan so you can experience all features before committing.'
              },
              {
                question: 'What kind of support do you provide?',
                answer: 'We offer email support for Starter, priority email support for Pro, and 24/7 phone and email support for Enterprise customers.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of industrial IoT 
              with SenseGrid. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;