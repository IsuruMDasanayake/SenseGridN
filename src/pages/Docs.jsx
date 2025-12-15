import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion } from "framer-motion";

const docsList = [
    {
        id: 1,
        title: "SenseGrid Overview",
        url: "https://online.pubhtml5.com/bcaqj/xibi/",
    },
    {
        id: 2,
        title: "Installation Guide",
        url: "https://online.pubhtml5.com/bcaqj/dgmv/",
    },
    {
        id: 3,
        title: "User Manual",
        url: "https://online.pubhtml5.com/bcaqj/wzyh/",
    },
    {
        id: 4,
        title: "Technical Specifications",
        url: "https://online.pubhtml5.com/bcaqj/hifs/",
    },
];

const Docs = () => {
    const { darkMode: isDarkMode } = useTheme();
    const [activeDoc, setActiveDoc] = useState(docsList[0]);

    /* Custom Styles for Glassmorphism & Tech Glow */
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

    /* Theme Classes */
    const techBgClass = isDarkMode ? "tech-bg-dark" : "tech-bg-light";
    const glassPanelClass = isDarkMode ? "glass-panel-dark" : "glass-panel-light";
    const darkTextColorClass = isDarkMode ? "text-white" : "text-gray-900";
    const lightTextColorClass = isDarkMode ? "text-gray-400" : "text-gray-600";

    return (
        <div className={`${techBgClass} min-h-screen font-sans overflow-x-hidden`}>
            <style>{customStyles}</style>

            {/* Background Elements (Only active in dark mode) */}
            {isDarkMode && (
                <>
                    <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
                    <div className="glow-blob top-0 left-0 w-64 h-64 bg-[rgb(14,165,234)]" />
                    <div className="glow-blob bottom-0 right-0 w-96 h-96 bg-[rgb(11,209,209)]" />
                </>
            )}

            {/* HERO SECTION */}
            <section className="relative py-20 pt-24 md:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${darkTextColorClass}`}>
                            <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.3)]">
                                SenseGrid Documentation
                            </span>
                        </h1>

                        <p
                            className={`text-xl ${lightTextColorClass} max-w-3xl mx-auto leading-relaxed`}
                        >
                            Explore official guides, manuals, and technical documentation to
                            help you deploy, configure, and scale SenseGrid solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DOCS SECTION */}
            <section className="relative pb-24 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* LEFT SIDEBAR (Desktop) */}
                        <div className="hidden lg:block">
                            <div className={`${glassPanelClass} rounded-2xl p-6 sticky top-24`}>
                                <h3
                                    className={`text-lg font-bold mb-6 ${darkTextColorClass} border-b ${isDarkMode ? 'border-white/10' : 'border-black/5'} pb-4`}
                                >
                                    <span className="text-[rgb(11,209,209)] mr-2">📚</span>
                                    Available Guides
                                </h3>

                                <ul className="space-y-3">
                                    {docsList.map((doc) => (
                                        <li key={doc.id}>
                                            <button
                                                onClick={() => setActiveDoc(doc)}
                                                className={`w-full text-left px-4 py-3 rounded-xl transition-all font-medium text-sm
                                                                        border
          ${activeDoc.id === doc.id
                                                        ? "border-sky-400 text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                                                        : isDarkMode
                                                            ? "border-white/10 text-gray-400 hover:text-white hover:border-white/30"
                                                            : "border-gray-200 text-gray-600 hover:text-gray-900 hover:border-gray-400"
                                                    }`}
                                            >
                                                {doc.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>

                        {/* MOBILE DROPDOWN */}
                        <div className="lg:hidden">
                            <div className="relative">
                                <select
                                    value={activeDoc.id}
                                    onChange={(e) =>
                                        setActiveDoc(
                                            docsList.find((d) => d.id === Number(e.target.value))
                                        )
                                    }
                                    className={`w-full mb-6 px-6 py-4 rounded-xl appearance-none ${glassPanelClass} ${darkTextColorClass} font-semibold focus:outline-none focus:ring-2 focus:ring-[rgb(14,165,234)]`}
                                >
                                    {docsList.map((doc) => (
                                        <option key={doc.id} value={doc.id} className="text-gray-900 bg-white">
                                            {doc.title}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute right-6 top-1/2 transform -translate-y-[calc(50%+12px)] pointer-events-none text-[rgb(11,209,209)]">
                                    ▼
                                </div>
                            </div>
                        </div>

                        {/* IFRAME VIEWER */}
                        <div className="lg:col-span-3">
                            <motion.div
                                key={activeDoc.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className={`${glassPanelClass} rounded-2xl p-2 md:p-4 shadow-2xl relative group`}
                            >
                                {/* Glow effect specific to document viewer */}
                                {isDarkMode && (
                                    <div className="absolute -inset-1 bg-gradient-to-br from-[rgb(14,165,234)] to-[rgb(11,209,209)] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                                )}

                                <div className="relative z-10 bg-white rounded-xl overflow-hidden h-[500px] md:h-[600px]">
                                    <iframe
                                        src={activeDoc.url}
                                        title={activeDoc.title}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Docs;
