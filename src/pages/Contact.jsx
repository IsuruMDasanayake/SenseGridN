import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const [activeForm, setActiveForm] = useState("custom"); // "custom" or "iframe"

  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  // Section Divider Component
  const SectionDivider = () => (
    <div className="relative py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className={`h-px w-full ${isDarkMode
            ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
            : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'
          }`} />
      </div>
    </div>
  );

  // Custom Styles
  const customStyles = `
    .tech-bg-dark {
      background-color: #0b1120;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.15) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.1) 0px, transparent 50%);
      background-attachment: fixed;
    }
    .tech-bg-light {
      background-color: #f0f4f8;
      background-image: 
        radial-gradient(at 0% 0%, rgba(14, 165, 234, 0.05) 0px, transparent 50%),
        radial-gradient(at 100% 100%, rgba(11, 209, 209, 0.05) 0px, transparent 50%);
      background-attachment: fixed;
    }
    
    .glass-panel-dark {
      background: rgba(17, 25, 40, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
    }
    .glass-panel-light {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
    }
    
    .glass-panel-dark:hover {
      border-color: rgba(14, 165, 234, 0.3);
      box-shadow: 0 8px 32px 0 rgba(14, 165, 234, 0.15);
    }
    .glass-panel-light:hover {
        border-color: rgba(14, 165, 234, 0.5);
        box-shadow: 0 4px 20px 0 rgba(14, 165, 234, 0.1);
    }

    .brand-gradient-text {
      background: linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .glow-blob {
      position: absolute;
      filter: blur(80px);
      z-index: 0;
      opacity: 0.3;
      border-radius: 50%;
    }

    .tech-grid-overlay {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
    }
  `;

  // Dynamic Class Names
  const techBgClass = isDarkMode ? 'tech-bg-dark' : 'tech-bg-light';
  const glassPanelClass = isDarkMode ? 'glass-panel-dark' : 'glass-panel-light';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

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
      value: "R&D Section, Sri Lanka Telecom PLC, Lotus Road, P.O.Box 503, Colombo 01, Sri Lanka.",
      description: "Come say hello to our team",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Monday - Friday: 8.30 AM - 4.30 PM PST",
      description: "Weekend: By appointment",
    },
  ];

  return (
    <div className={`${techBgClass} min-h-screen ${textColorClass} font-sans selection:bg-[rgb(14,165,234)] selection:text-white overflow-x-hidden`}>
      <style>{customStyles}</style>

      {/* Background Elements */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
          <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
          <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
        </>
      )}

      {/* Hero Section */}
      <section className="relative py-20 pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={`text-4xl md:text-6xl font-bold mb-6`}>
              <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)]">
                Get in Touch
              </span>
            </h1>
            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto mb-12`}>
              Have questions about our IoT solutions? We'd love to hear from
              you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <h2 className={`text-3xl font-bold ${darkTextColorClass} mb-8`}>
                Contact Information
              </h2>
              <p className={`${lightTextColorClass} mb-8`}>
                We're here to help you transform your industrial operations with
                cutting-edge IoT solutions. Reach out to us through any of these
                channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-start space-x-4 p-4 ${glassPanelClass} rounded-lg transition-all duration-300`}
                  >
                    <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-[rgb(14,165,234)]/10 border border-[rgb(14,165,234)]/20' : 'bg-blue-100'}`}>
                      <info.icon className="h-6 w-6 text-[rgb(14,165,234)]" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${darkTextColorClass} mb-1`}>
                        {info.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm ${lightTextColorClass}">
                        {info.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form Section with Toggle */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className={`${glassPanelClass} rounded-2xl p-8 shadow-2xl`}>
                {/* Header + Toggle Button */}
                <div className="flex justify-between items-center mb-4">
                  <h2 className={`text-3xl font-bold ${darkTextColorClass}`}>
                    Fill Out the Form to Connect Us
                  </h2>

                  <button
                    onClick={() =>
                      setActiveForm(
                        activeForm === "custom" ? "iframe" : "custom"
                      )
                    }
                    className="relative px-4 py-2 rounded-lg overflow-hidden group"
                  >
                    {/* Gradient background */}
                    <span
                      className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500 
               bg-[length:200%_100%] bg-[position:var(--x,0)_0] 
               transition-all duration-500 group-hover:[--x:100%] rounded-lg"
                    ></span>

                    {/* Button text */}
                    <span className="relative text-white font-medium">
                      {activeForm === "custom"
                        ? "Use Office Form"
                        : "Use Custom Form"}
                    </span>
                  </button>
                </div>

                {/* Animated Form Switch */}
                <AnimatePresence mode="wait">
                  {activeForm === "custom" ? (
                    <motion.div
                      key="custom"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <ContactForm />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="iframe"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <iframe
                        src="https://forms.office.com/pages/responsepage.aspx?id=_FNCU7bfL0a1ysvoGTn17m4kn0KsqvVBqePRPsMGFZRUNE9OWDJUQk5aNzlGWUFZUVkyWUs4V0MwSCQlQCNjPTEu&origin=QRCode&qrcodeorigin=presentation&route=shorturl"
                        width="100%"
                        height="600"
                        className="mx-auto rounded-2xl shadow-lg border-0"
                        title="SenseGrid QR Form"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
      <SectionDivider />
      {/* Map Section */}
      <section className="relative py-10 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className={`text-4xl font-bold ${darkTextColorClass} mb-6`}>
              Visit Our Office
            </h2>
            <p className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto`}>
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
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
