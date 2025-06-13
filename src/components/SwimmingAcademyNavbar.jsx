import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Icons";

console.log("Loading SwimmingAcademyNavbar.jsx");

export default function SwimmingAcademyNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // Use regular <a> for hash links if on the homepage, otherwise use <Link>
  const NavLink = ({ href, children }) => {
    if (location.pathname === "/" && href.startsWith("#")) {
      return (
        <a
          href={href}
          onClick={closeMenu}
          className="text-gray-600 hover:text-cyan-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        to={`/${href}`}
        onClick={closeMenu}
        className="text-gray-600 hover:text-cyan-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
      >
        {children}
      </Link>
    );
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-lg backdrop-blur-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <img src="/src/assets/ChatGPT Image Jun 12, 2025, 07_39_23 PM.png" className="w-20" />
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/login"
              className="text-cyan-600 hover:text-cyan-800 px-4 py-2 rounded-md text-sm font-medium border border-cyan-600 hover:bg-cyan-50 transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="bg-cyan-600 text-white hover:bg-cyan-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                  animate={{
                    d: isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 12h16",
                  }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink key={link.name} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 pb-2 space-y-2 border-t">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="block w-full text-center text-cyan-600 px-4 py-2 rounded-md font-medium border border-cyan-600 hover:bg-cyan-50"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="block w-full text-center bg-cyan-600 text-white px-4 py-2 rounded-md font-medium hover:bg-cyan-700"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
