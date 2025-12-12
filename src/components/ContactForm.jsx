import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTheme } from "../contexts/ThemeContext";

const ContactForm = () => {
  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const glassPanelClass = isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/80 border-gray-200';
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const timestamp = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Colombo",
    });

    const dataToSend = {
      ...formData,
      time: timestamp,
    };

    emailjs
      .send(
        "sensegrid",
        "sensegrid_contact",
        dataToSend,
        "jjlSJsrti2KVZI6uJ"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsLoading(false);
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email sending error:", error);
          setIsLoading(false);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="lg:col-span-2"
    >
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8"
        >
          <CheckCircle className="h-16 w-16 text-[rgb(11,209,209)] mx-auto mb-4" />
          <h3 className={`text-2xl font-bold ${darkTextColorClass} mb-2`}>
            Message Sent Successfully!
          </h3>
          <p className={lightTextColorClass}>
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["name", "email", "company", "phone"].map((field) => (
              <div key={field}>
                <label className={`block ${textColorClass} mb-2 capitalize font-medium`}>
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  required={field === "name" || field === "email"}
                  className={`w-full px-4 py-3 rounded-lg border ${glassPanelClass} ${textColorClass} backdrop-blur-sm
                               focus:outline-none focus:ring-2 focus:ring-[rgb(14,165,234)] focus:border-transparent transition-all
                               placeholder:${lightTextColorClass}`}
                  placeholder={`Enter your ${field}`}
                />
              </div>
            ))}
          </div>

          <div>
            <label className={`block ${textColorClass} mb-2 font-medium`}>
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className={`w-full px-4 py-3 rounded-lg border ${glassPanelClass} ${textColorClass} backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-[rgb(14,165,234)] focus:border-transparent transition-all
                           placeholder:${lightTextColorClass}`}
              placeholder="Enter subject"
            />
          </div>

          <div>
            <label className={`block ${textColorClass} mb-2 font-medium`}>
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className={`w-full px-4 py-3 rounded-lg border ${glassPanelClass} ${textColorClass} backdrop-blur-sm
                           focus:outline-none focus:ring-2 focus:ring-[rgb(14,165,234)] focus:border-transparent transition-all
                           placeholder:${lightTextColorClass} resize-none`}
              placeholder="Enter your message"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="relative group overflow-hidden w-full md:w-auto px-8 py-3 rounded-lg text-white font-semibold
             shadow-[0_0_20px_rgba(14,165,234,0.3)] hover:shadow-[0_0_30px_rgba(14,165,234,0.5)]
             active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {/* Gradient background */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500
               bg-[length:200%_100%] bg-[position:var(--x,0)_0]
               transition-all duration-500 group-hover:[--x:100%] rounded-lg"
            ></div>

            {/* Shine swipe effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
               translate-x-[-200%] group-hover:translate-x-[200%]
               transition-transform duration-700"
            ></div>

            <span className="relative z-10">
              {isLoading ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
