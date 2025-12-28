import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Document, Page, pdfjs } from "react-pdf";
import {
    ChevronRight,
    ChevronLeft,
    ZoomIn,
    ZoomOut,
    FileText,
    Download,
    Maximize,
    ChevronDown,
    X,
    Loader2,
    BookOpen
} from "lucide-react";

// ---------------------------------------------------------
// 1. PDF Worker Configuration
// ---------------------------------------------------------
// NOTE: Make sure this file path is correct in your setup
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

// ---------------------------------------------------------
// 2. Data Source
// ---------------------------------------------------------
const docsList = [
    {
        id: 1,
        title: "SenseGrid Overview",
        file: "/assets/docs/Predictive Network Fault Detection & Automated Dispatch.pdf",
    },
    { id: 2, title: "Device Installation Guide", file: "/assets/docs/Cloud Computing.pdf" },
    { id: 3, title: "Maintenance Manual", file: "/assets/docs/Can You Build a Survey in Node.pdf" },
    { id: 4, title: "Technical Specifications", file: "/assets/docs/BioinformaticTask01.pdf" },
];

// Define the custom default scale for the PDF content
const DEFAULT_CONTENT_SCALE = 0.7;

// ---------------------------------------------------------
// Framer Motion Page Transition Variants (Cross-Fade & Scale)
// ---------------------------------------------------------
const crossFadeScaleVariants = {
    // Current pages shrinking and fading out
    exit: {
        opacity: 0,
        scale: 0.95, // Shrink slightly
        transition: { duration: 0.25, ease: "easeInOut" }
    },
    // New pages starting small and transparent
    initial: {
        opacity: 0,
        scale: 1.05, // Start slightly large
    },
    // New pages growing and fading in
    animate: {
        opacity: 1,
        scale: 1, // Return to original size
        transition: { duration: 0.25, ease: "easeInOut" }
    }
};


const Docs = () => {
    const { darkMode: isDarkMode } = useTheme();

    // ---------------------------------------------------------
    // 3. State Management
    // ---------------------------------------------------------
    const [activeDoc, setActiveDoc] = useState(docsList[0]);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(DEFAULT_CONTENT_SCALE);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Check if the screen width is mobile size
    const isSmallScreen = window.innerWidth < 1024;
    // Determine viewer mode: Single Page for mobile, Spread for desktop
    const [isSpreadMode, setIsSpreadMode] = useState(window.innerWidth >= 1024);

    // Update isSpreadMode on resize
    useEffect(() => {
        const handleResize = () => setIsSpreadMode(window.innerWidth >= 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Reset viewer when document changes
    useEffect(() => {
        setPageNumber(1);
        setScale(DEFAULT_CONTENT_SCALE);
    }, [activeDoc]);


    // ---------------------------------------------------------
    // 4. Viewer Logic (Book Mode) - UPDATED FOR DYNAMIC SPREAD MODE
    // ---------------------------------------------------------
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const nextPage = () => {
        if (!numPages || pageNumber >= numPages) return;

        if (!isSpreadMode) {
            // Single Page mode (Mobile)
            setPageNumber((prev) => Math.min(prev + 1, numPages));
        } else {
            // Spread Mode (Desktop)
            // Page 1 transitions to Page 2. Page 2 transitions to Page 4, etc.
            const nextVal = pageNumber === 1 ? 2 : pageNumber + 2;
            setPageNumber((prev) => Math.min(nextVal, numPages));
        }
    };

    const previousPage = () => {
        if (pageNumber <= 1) return;

        if (!isSpreadMode) {
            // Single Page mode (Mobile)
            setPageNumber((prev) => Math.max(prev - 1, 1));
        } else {
            // Spread Mode (Desktop)
            // Page 2 or 3 transitions to Page 1. Page 4 or 5 transitions to Page 2, etc.
            const prevVal = pageNumber <= 2 ? 1 : pageNumber - 2;
            setPageNumber((prev) => Math.max(prevVal, 1));
        }
    };

    // Zoom adjustments remain the same
    const zoomIn = () => setScale((s) => Math.min(s + 0.1, 2.0));
    const zoomOut = () => setScale((s) => Math.max(s - 0.1, 0.2));

    // Keyboard Shortcuts remain the same
    useEffect(() => {
        const handler = (e) => {
            if (e.key === "ArrowRight") nextPage();
            if (e.key === "ArrowLeft") previousPage();
            if (e.key === "Escape") setIsFullscreen(false);
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [pageNumber, numPages, isSpreadMode]); // Dependency update

    // ---------------------------------------------------------
    // 5. Styles (Dynamic Theme) - ADOPTING CONTACT.JSX STYLES
    // ---------------------------------------------------------
    const techBgClass = isDarkMode ? "tech-bg-dark" : "tech-bg-light";
    const glassPanelClass = isDarkMode ? "glass-panel-dark" : "glass-panel-light";
    const textMain = isDarkMode ? "text-white" : "text-gray-900";
    const textSub = isDarkMode ? "text-gray-400" : "text-gray-600";
    const borderColor = isDarkMode ? "border-white/10" : "border-black/10";

    // Custom Styles Injection (From Contact.jsx)
    const customStyles = `
    /* Backgrounds */
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
    
    /* Glass Panels */
    .glass-panel-dark {
      background: rgba(17, 25, 40, 0.6);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.25);
      transition: all 0.3s ease;
    }
    .glass-panel-light {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.05);
        transition: all 0.3s ease;
    }
    
    /* Glass Panel Hover Effects */
    .glass-panel-dark:hover {
      border-color: rgba(14, 165, 234, 0.3);
      box-shadow: 0 8px 32px 0 rgba(14, 165, 234, 0.15);
    }
    .glass-panel-light:hover {
        border-color: rgba(14, 165, 234, 0.5);
        box-shadow: 0 4px 20px 0 rgba(14, 165, 234, 0.1);
    }

    /* Brand Gradient Text */
    .brand-gradient-text {
      background: linear-gradient(90deg, rgb(14,165,234), rgb(11,209,209));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    /* PDF Canvas Shadows */
    .react-pdf__Page__canvas {
        border-radius: 4px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        margin: 0 auto;
    }
    /* Hide scrollbars for cleaner UI */
    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Premium Glow & Grid Effects */
    .glow-blob {
      position: absolute;
      filter: blur(90px);
      z-index: 0;
      opacity: 0.25;
      border-radius: 50%;
      pointer-events: none;
    }
    .tech-grid-overlay {
      background-size: 40px 40px;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
      mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
      pointer-events: none;
    }
    `;

    // Calculate pages to show
    const leftPage = pageNumber;
    // Show a second page only if we are in spread mode AND the next page exists AND it is not the first page (Cover)
    const rightPage = isSpreadMode && pageNumber !== 1 && pageNumber + 1 <= numPages ? pageNumber + 1 : null;

    // The key now represents the entire current spread/view
    const viewerKey = isSpreadMode ? `${pageNumber}-${rightPage}` : pageNumber;


    return (
        <div className={`${techBgClass} min-h-screen overflow-x-hidden transition-colors duration-300 selection:bg-[rgb(14,165,234)] selection:text-white`}>
            <style>{customStyles}</style>

            {/* Background Effects */}
            {isDarkMode && (
                <>
                    <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
                    {/* The glow blobs use the new sizes from Contact.jsx */}
                    <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
                    <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
                </>
            )}

            {/* HEADER */}
            <section className="pt-28 pb-10 text-center px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={`text-4xl md:text-6xl font-bold mb-4 mt-6 ${textMain}`}>
                        <span className="brand-gradient-text drop-shadow-[0_0_15px_rgba(14,165,234,0.15)]">
                            SenseGrid Documentation
                        </span>{" "}
                    </h1>
                    <p className={`${textSub} text-lg max-w-2xl mx-auto leading-relaxed mb-10`}>
                        Technical manuals, installation guides, and API references for the SenseGrid Industrial IoT platform.
                    </p>
                </motion.div>
            </section>

            <section className="max-w-[1400px] mx-auto px-4 pb-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* LEFT SIDEBAR (Navigation) */}
                    <div className="hidden lg:block">
                        <div className={`${glassPanelClass} rounded-2xl p-6 sticky top-28 transition-all duration-300`}>
                            <h3 className={`text-xs font-bold uppercase tracking-wider mb-5 ${textSub} ml-1`}>
                                Available Guides
                            </h3>
                            <div className="space-y-3">
                                {docsList.map((doc) => (
                                    <button
                                        key={doc.id}
                                        onClick={() => setActiveDoc(doc)}
                                        className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-300 flex items-center gap-3 text-sm font-medium group
                                        ${activeDoc.id === doc.id
                                                ? "border border-[rgb(14,165,234)]/30 text-[rgb(14,165,234)] shadow-[0_0_15px_rgba(14,165,234,0.15)] bg-[rgb(14,165,234)]/5"
                                                : `border border-transparent ${textSub} hover:bg-white/5 hover:text-sky-400`
                                            }
                                        `}
                                    >
                                        <div className={`p-2 rounded-lg transition-colors ${activeDoc.id === doc.id ? "bg-[rgb(14,165,234)]/10" : "bg-black/5 dark:bg-white/5 group-hover:bg-[rgb(14,165,234)]/10"}`}>
                                            <FileText size={18} className={activeDoc.id === doc.id ? "text-[rgb(14,165,234)]" : "opacity-70 group-hover:text-[rgb(14,165,234)]"} />
                                        </div>
                                        {doc.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* MOBILE DROPDOWN */}
                    <div className="lg:hidden">
                        <div className="relative">
                            <select
                                value={activeDoc.id}
                                onChange={(e) => setActiveDoc(docsList.find(d => d.id === Number(e.target.value)))}
                                className={`w-full px-6 py-4 rounded-xl appearance-none outline-none ${glassPanelClass} ${textMain} font-medium border focus:border-[rgb(14,165,234)] transition-all shadow-lg`}
                            >
                                {docsList.map(doc => (
                                    // The text-gray-900 in the option is necessary because select options don't inherit well
                                    <option key={doc.id} value={doc.id} className="text-gray-900">
                                        {doc.title}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[rgb(14,165,234)] pointer-events-none" size={20} />
                        </div>
                    </div>

                    {/* MAIN VIEWER AREA */}
                    <div className="lg:col-span-3">
                        <div
                            className={`${glassPanelClass} rounded-2xl overflow-hidden flex flex-col shadow-2xl transition-all duration-300
                            ${isFullscreen ? "fixed inset-0 z-50 rounded-none h-screen bg-gray-900/95 backdrop-blur-xl" : "min-h-[700px]"}
                            `}
                        >
                            {/* TOOLBAR */}
                            <div className={`
                                px-4 py-4 flex flex-wrap justify-between items-center z-20 border-b backdrop-blur-md
                                ${isFullscreen ? "border-white/10" : borderColor}
                            `}>
                                {/* Pagination Controls */}
                                <div className="flex items-center gap-3 order-2 md:order-1 mt-2 md:mt-0 w-full md:w-auto justify-center md:justify-start">
                                    <button
                                        onClick={previousPage}
                                        disabled={pageNumber <= 1}
                                        className={`p-2 rounded-xl transition-colors ${pageNumber <= 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[rgb(14,165,234)]/10 text-[rgb(14,165,234)]"}`}
                                    >
                                        <ChevronLeft />
                                    </button>

                                    <div className={`px-4 py-1.5 rounded-xl text-sm font-mono font-medium ${isDarkMode ? "bg-black/30 text-gray-300" : "bg-black/5 text-gray-600"} min-w-[100px] text-center`}>
                                        {/* Display logic: Cover (1) vs Spread (2-3) */}
                                        {!numPages ? "--" :
                                            (isSpreadMode && pageNumber !== 1)
                                                ? `${pageNumber}-${Math.min(pageNumber + 1, numPages)} / ${numPages}`
                                                : `${pageNumber} / ${numPages}`
                                        }
                                    </div>

                                    <button
                                        onClick={nextPage}
                                        disabled={pageNumber >= numPages || (isSpreadMode && pageNumber + 1 >= numPages)}
                                        className={`p-2 rounded-xl transition-colors ${(pageNumber >= numPages || (isSpreadMode && pageNumber + 1 >= numPages)) ? "opacity-30 cursor-not-allowed" : "hover:bg-[rgb(14,165,234)]/10 text-[rgb(14,165,234)]"}`}
                                    >
                                        <ChevronRight />
                                    </button>
                                </div>

                                {/* Tools (Zoom, DL, Fullscreen) */}
                                <div className="flex items-center gap-2 order-1 md:order-2 w-full md:w-auto justify-end">
                                    <button onClick={zoomOut} className={`p-2.5 rounded-xl hover:bg-white/10 ${textSub} hover:text-[rgb(14,165,234)] transition-colors`} title="Zoom Out"><ZoomOut size={18} /></button>
                                    <span className={`text-xs font-mono w-12 text-center font-bold ${textMain}`}>{Math.round(scale * 100)}%</span>
                                    <button onClick={zoomIn} className={`p-2.5 rounded-xl hover:bg-white/10 ${textSub} hover:text-[rgb(14,165,234)] transition-colors`} title="Zoom In"><ZoomIn size={18} /></button>

                                    <div className={`h-6 w-px mx-3 ${isDarkMode ? "bg-white/10" : "bg-black/10"}`}></div>

                                    <a
                                        href={activeDoc.file}
                                        download
                                        className={`p-2.5 rounded-xl hover:bg-white/10 ${textSub} hover:text-[rgb(14,165,234)] transition-colors`}
                                        title="Download PDF"
                                    >
                                        <Download size={18} />
                                    </a>

                                    <button
                                        onClick={() => setIsFullscreen(!isFullscreen)}
                                        className={`p-2.5 rounded-xl hover:bg-white/10 ${textSub} hover:text-[rgb(14,165,234)] transition-colors`}
                                        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                                    >
                                        {isFullscreen ? <X size={18} /> : <Maximize size={18} />}
                                    </button>
                                </div>
                            </div>

                            {/* PDF RENDERER (Wrapper for animation) */}
                            {/* Adjusted padding: Reduced p-12 to p-4 md:p-8 for better mobile fit and overall balance */}
                            <div className="flex-1 overflow-auto bg-black/5 relative flex items-start justify-center p-4 md:p-8 hide-scrollbar">
                                <Document
                                    file={activeDoc.file}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading={
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                                            {/* Custom loader using CSS for the brand colors */}
                                            <div className="w-16 h-16 rounded-full border-4 border-t-[rgb(14,165,234)] border-r-transparent border-b-[rgb(11,209,209)] border-l-transparent animate-spin" />
                                            <span className={`text-sm font-medium tracking-wider uppercase ${textSub}`}>Loading Document...</span>
                                        </div>
                                    }
                                    error={
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-red-400 gap-3">
                                            <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                                                <FileText size={24} className="text-red-400" />
                                            </div>
                                            <div className="text-center">
                                                <h4 className="font-bold mb-1">Error Loading PDF</h4>
                                                <span className="text-sm opacity-70">Please check the file path.</span>
                                            </div>
                                        </div>
                                    }
                                    className="flex shadow-2xl transition-all duration-300 transform-gpu"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={viewerKey} // The key change triggers the animation for the whole spread
                                            variants={crossFadeScaleVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            // Adjusted gap for a slightly closer book feel
                                            className="flex gap-4"
                                        >
                                            {/* Left Page (Always shown) */}
                                            <div className="relative group">
                                                <Page
                                                    pageNumber={leftPage}
                                                    scale={scale}
                                                    className="shadow-xl"
                                                    renderTextLayer={false}
                                                    renderAnnotationLayer={false}
                                                />
                                                {/* Spine Shadow */}
                                                {/* Only apply spine shadow if it's not the first page AND we are in spread mode */}
                                                {isSpreadMode && leftPage > 1 && (
                                                    <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
                                                )}
                                            </div>

                                            {/* Right Page (Conditional) */}
                                            {rightPage && rightPage <= numPages && isSpreadMode && (
                                                <div className="relative group">
                                                    <Page
                                                        pageNumber={rightPage}
                                                        scale={scale}
                                                        className="shadow-xl"
                                                        renderTextLayer={false}
                                                        renderAnnotationLayer={false}
                                                    />
                                                    {/* Spine Shadow */}
                                                    <div className="absolute top-0 left-0 bottom-0 w-8 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
                                                </div>
                                            )}
                                        </motion.div>
                                    </AnimatePresence>
                                </Document>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Docs;