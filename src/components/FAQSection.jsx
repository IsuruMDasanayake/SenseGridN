import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export default function FAQSection() {
    // Use global theme context
    const { darkMode: isDarkMode } = useTheme();

    const [activeIndex, setActiveIndex] = useState(null);

    const glassPanelClass = isDarkMode
        ? 'bg-white/5 border-white/10 hover:bg-white/10'
        : 'bg-white/80 border-gray-200 hover:bg-gray-50';
    const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
    const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

    const faqs = [
        {
            q: "What devices are supported by SenseGrid?",
            a: "SenseGrid supports IR sensors, K-type temperature sensors, current sensors, and other industrial monitoring devices via ESP32. Custom sensors can also be integrated with minimal configuration.",
        },
        {
            q: "Do I need internet to use the SenseGrid system?",
            a: "Yes. SenseGrid uses Wi-Fi or GSM (via SIM module) for real-time data transmission. An internet connection is required for accessing the dashboard and alerts remotely.",
        },
        {
            q: "Can I monitor multiple machines at once?",
            a: "Absolutely. You can connect and monitor multiple machines across different locations using the same dashboard. Each device has a unique ID for organized tracking.",
        },
        {
            q: "How are alerts and notifications handled?",
            a: "Thresholds can be set for each sensor. When a reading exceeds the limit, you'll receive instant mobile or email alerts via our ThingsBoard integration or custom logic rules.",
        },
        {
            q: "Can I access the system on mobile?",
            a: "Yes, our system includes a mobile-friendly dashboard so you can view real-time data, receive alerts, and manage devices directly from your phone or tablet.",
        },
        {
            q: "Is support available if I run into issues?",
            a: "We offer email and chat support for all plans. Enterprise users also receive dedicated phone support and custom integration assistance.",
        },
    ];

    return (
        <section className="relative py-28 -mb-12" id="faq">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Title and Description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={`text-4xl font-bold ${darkTextColorClass} mb-6`}>
                            Frequently Asked Questions
                        </h2>
                        <p className={`text-lg ${lightTextColorClass} mb-8`}>
                            Need help understanding how SenseGrid works? Here are answers to some
                            common questions about device setup, monitoring, and more.
                        </p>

                        <div className="hidden lg:block text-[rgb(14,165,234)] opacity-60">
                            <svg
                                width="180"
                                height="190"
                                viewBox="0 0 200 211"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488Z" />
                            </svg>
                        </div>

                    </motion.div>

                    {/* Right Side - Questions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className={`border ${glassPanelClass} backdrop-blur-sm rounded-lg p-6 transition-all cursor-pointer`}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className={`text-lg font-semibold ${darkTextColorClass}`}>
                                        {faq.q}
                                    </h3>
                                    <motion.div
                                        animate={{ rotate: activeIndex === index ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronRight className={`w-5 h-5 ${lightTextColorClass}`} />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`mt-3 ${lightTextColorClass}`}
                                        >
                                            {faq.a}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
