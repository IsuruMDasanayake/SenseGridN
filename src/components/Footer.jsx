import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Footer = ({ isDarkMode = false }) => {
  return (
    <footer id="footer" className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:flex md:justify-between">
          {/* Company Info */}
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/images/SensGrid_logo.png"
                alt="SenseGrid Logo"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-4">
              Seamlessly integrate intelligence into your industrial operations
              with our cutting-edge IIoT solutions.
            </p>
            <div className="flex space-x-4">
            </div>
          </div>

          {/* Quick Links + Support (grouped together) */}
          <div className="grid grid-cols-2 gap-20">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/use-cases"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Use Cases
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[rgb(14,165,234)]" />
                <span className="text-gray-400">info@sltdigitallab.lk</span>
              </li>
              <li className="flex items-center space-x-2">
                <a
                  href="https://wa.me/94704752330"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-[rgb(11,209,209)] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[rgb(11,209,209)]" />
                  <span>+94 70 475 2330</span>
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[rgb(14,165,234)]" />
                <span className="text-gray-400">
                  +94 (11) 243 0010, <br /> +94 (70) 475 2330
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[rgb(14,165,234)]" />
                <span className="text-gray-400">
                  R&D Section, Sri Lanka Telecom PLC, Lotus Road,<br /> P.O.Box 503, Colombo 01, Sri Lanka.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SenseGrid by SLT Mobitel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
