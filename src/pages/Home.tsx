import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Target, Users, TrendingUp, Globe, User, Calendar, Award } from 'lucide-react';
import CircuitBoard3D from '../components/CircuitBoard3D';
import AnimatedCounter from '../components/AnimatedCounter';

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with sub-second response times globally.'
    },
    {
      icon: Target,
      title: 'Precision Analytics',
      description: 'Advanced AI-powered insights to drive data-driven decisions.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless workflows designed for modern distributed teams.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Infrastructure that grows with your business, from startup to enterprise.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Multi-region deployment with 99.9% uptime guarantee.'
    }
  ];

  const stats = [
    { number: 500, suffix: '+', label: 'Enterprise Clients' },
    { number: 50, suffix: 'M+', label: 'API Calls Daily' },
    { number: 100, suffix: '+', label: 'Countries Served' },
    { number: 99.9, suffix: '%', label: 'Uptime' }
  ];

  const milestones = [
    { year: '2019', title: 'Company Founded', description: 'Started with a vision to democratize industrial IoT' },
    { year: '2020', title: 'First Product Launch', description: 'Released Monitor One sensor platform' },
    { year: '2022', title: 'Global Expansion', description: 'Expanded operations to 50+ countries' },
    { year: '2024', title: 'AI Integration', description: 'Launched advanced AI analytics platform' }
  ];

  const team = [
    { name: 'Sarah Chen', role: 'CEO & Founder', image: 'https://images.pexels.com/photos/3771583/pexels-photo-3771583.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Marcus Rodriguez', role: 'CTO', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Emily Watson', role: 'Head of Engineering', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'David Kim', role: 'VP of Sales', image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
  ];

  return (
    <div className="pt-16">
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
                <span className="text-blue-600 dark:text-blue-400">SENSEGRID</span>
                <br />
                <span className="text-3xl md:text-4xl">
                  Seamlessly integrate intelligence into your industrial operations
                </span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                SenseGrid delivers cutting-edge IIoT solutions tailored for Industry 4.0, 
                enabling smarter operations and data-driven decision making.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Side - 3D Circuit Board */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
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
              We're on a mission to democratize artificial intelligence and make advanced 
              technology accessible to businesses of all sizes, everywhere.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 dark:bg-gray-700 rounded-xl"
              >
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                <p className="text-gray-600 dark:text-gray-300 mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CEO Message */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-blue-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/3771583/pexels-photo-3771583.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="CEO"
                  className="w-32 h-32 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  A Message from Our CEO
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "Industrial transformation shouldn't be limited to large corporations. 
                  Our vision is to make cutting-edge IoT technology accessible and 
                  practical for businesses of every size."
                </p>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Sarah Chen, CEO & Founder
                </p>
              </div>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Journey
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500"></div>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                      <div className="flex items-center mb-3">
                        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Our Team
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.role}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
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
              Why Choose SenseGrid?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with industry expertise to deliver 
              solutions that transform your operations.
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
    </div>
  );
};

export default Home;