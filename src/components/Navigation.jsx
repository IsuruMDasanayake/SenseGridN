import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Docs", path: "/docs" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  // Custom Styles for Glassmorphism
  const customStyles = `
    .nav-glass-dark {
      background: rgba(11, 17, 32, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.4);
    }
    .nav-glass-light {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
      box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.08);
    }
  `;

  const navGlassClass = darkMode ? 'nav-glass-dark' : 'nav-glass-light';

  return (
    <>
      <style>{customStyles}</style>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 ${navGlassClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/assets/images/SensGrid_logo.png"
                alt="SenseGrid Logo"
                className="h-8 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${location.pathname === item.path
                      ? darkMode
                        ? "text-[rgb(14,165,234)]"
                        : "text-[rgb(14,165,234)]"
                      : darkMode
                        ? "text-gray-300 hover:text-[rgb(14,165,234)]"
                        : "text-gray-700 hover:text-[rgb(14,165,234)]"
                    }`}
                >
                  {item.name}

                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[rgb(14,165,234)] to-[rgb(11,209,209)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              ))}

              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all ${darkMode
                    ? "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all ${darkMode
                    ? "bg-white/10 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-all ${darkMode
                    ? "bg-white/10 text-gray-300"
                    : "bg-gray-100 text-gray-600"
                  }`}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden ${darkMode
                  ? "bg-gray-900/95 border-t border-white/10"
                  : "bg-white/95 border-t border-gray-200"
                } backdrop-blur-md`}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors ${location.pathname === item.path
                          ? darkMode
                            ? "bg-[rgb(14,165,234)]/20 text-[rgb(14,165,234)]"
                            : "bg-[rgb(14,165,234)]/10 text-[rgb(14,165,234)]"
                          : darkMode
                            ? "text-gray-300 hover:bg-white/5"
                            : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
