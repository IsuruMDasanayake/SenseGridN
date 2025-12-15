import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {

  // Use global theme context
  const { darkMode: isDarkMode } = useTheme();

  // Dynamic injected style sheet
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

  // Dynamic class names
  const techBgClass = isDarkMode ? "tech-bg-dark" : "tech-bg-light";
  const glassPanelClass = isDarkMode ? "glass-panel-dark" : "glass-panel-light";
  const textColorClass = isDarkMode ? 'text-gray-200' : 'text-gray-800';
  const lightTextColorClass = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const darkTextColorClass = isDarkMode ? 'text-white' : 'text-gray-900';

  const slides = [
    "/assets/images/presentation/Slide1.jpg",
    "/assets/images/presentation/Slide2.jpg",
    "/assets/images/presentation/Slide3.jpg",
    "/assets/images/presentation/Slide4.jpg",
    "/assets/images/presentation/Slide5.jpg",
    "/assets/images/presentation/Slide6.jpg",
    "/assets/images/presentation/Slide7.jpg",
    "/assets/images/presentation/Slide8.jpg",
    "/assets/images/presentation/Slide9.jpg",
    "/assets/images/presentation/Slide10.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const containerRef = useRef(null);

  // Swipe support
  useEffect(() => {
    const container = containerRef.current;
    let startX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      if (endX - startX > 50) prevSlide();
    };

    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  const [isFullscreen, setIsFullscreen] = useState(false);

  // Handle fullscreen change events from browser
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const toggleFullScreen = () => {
    const elem = containerRef.current;

    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div
      className={`${techBgClass} ${textColorClass} min-h-screen font-sans selection:bg-[rgb(14,165,234)] selection:text-white overflow-x-hidden`}
    >
      <style>{customStyles}</style>

      {/* Background Elements */}
      {isDarkMode && (
        <>
          <div className="fixed inset-0 tech-grid-overlay pointer-events-none" />
          <div className="glow-blob top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-[rgb(14,165,234)]" />
          <div className="glow-blob bottom-0 right-0 w-64 h-64 md:w-[500px] md:h-[500px] bg-[rgb(11,209,209)]" />
        </>
      )}

      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`${glassPanelClass} rounded-2xl p-4 md:p-8 shadow-2xl`} ref={containerRef}>
            {/* Main slide */}
            <div className="relative rounded-xl overflow-hidden bg-black/20 mb-6">
              <img
                src={slides[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-full h-auto object-contain cursor-zoom-in"
                onClick={toggleZoom}
              />
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-6">
              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                  } ${isDarkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                ❮ Previous
              </button>

              <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {currentSlide + 1} / {slides.length}
              </span>

              <button
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${currentSlide === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                  } ${isDarkMode
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  }`}
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
              >
                Next ❯
              </button>
            </div>

            {/* Fullscreen Toggle */}
            <button
              className={`w-full py-3 rounded-lg font-semibold transition-all hover:scale-105 ${isDarkMode
                ? "bg-[rgb(14,165,234)] text-white hover:bg-[rgb(11,209,209)]"
                : "bg-[rgb(14,165,234)] text-white hover:bg-[rgb(11,209,209)]"
                }`}
              onClick={toggleFullScreen}
            >
              {isFullscreen ? "✕ Exit Fullscreen" : "⛶ Fullscreen"}
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 scrollbar-thin">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${index === currentSlide
                  ? "ring-4 ring-[rgb(14,165,234)] scale-105"
                  : "opacity-60 hover:opacity-100"
                  }`}
                onClick={() => setCurrentSlide(index)}
              >
                <img src={slide} className="w-32 h-20 object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={toggleZoom}
        >
          <img src={slides[currentSlide]} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </div>
  );
};

export default About;
