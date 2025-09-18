import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@sltdigitallab.lk",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 (11) 243 0010, +94 (70) 475 2330",
      description: "Mon-Fri from 8.30 AM to 4.30 PM",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "PO Box 503, Lotus Rd, Colombo 01, Sri Lanka",
      description: "Come say hello at our HQ",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 8.30 AM - 4.30 PM PST",
      description: "Weekend: By appointment",
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
               bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
               bg-clip-text text-transparent"
            >
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
              Have questions about our IoT solutions? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center"
          >
            Contact Information
          </motion.h2>

          {/* Description */}
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto text-center">
            We're here to help you transform your industrial operations with
            cutting-edge IoT solutions. Reach out to us through any of these
            channels.
          </p>

          {/* Main Grid: Left QR (1/3) + Right Cards (2/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left: QR Code */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-1 flex justify-center"
            >
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6 w-full max-w-sm ml-14">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Scan to Connect
                </h3>
                <img
                  src="/assets/images/qr.png"
                  alt="SenseGrid QR Code"
                  className="mx-auto w-64 h-64 object-contain"
                />
              </div>
            </motion.div>

            {/* Right: 4 Cards in 2x2 grid */}
            <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg">
                    <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {info.title}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Visit Our Office
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're located in the heart of Sri Lanka's innovation district.
              Drop by for a coffee and let's discuss your IoT project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl h-96 w-full"
          >
            <iframe
              src="https://www.google.com/maps?q=6.9346212,79.8468999&hl=en&z=17&output=embed"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
