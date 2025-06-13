import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FacebookIcon, TwitterIcon, InstagramIcon, Logo } from "./Icons";

console.log("Loading Footer.jsx");

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold text-white">AquaFlow Academy</h3>
            <p className="text-gray-400">
              Your premier destination for swimming excellence. We offer
              top-tier coaching for all ages and skill levels in a
              state-of-the-art facility.
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#home"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#courses"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/#gallery"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="hover:text-cyan-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact</h3>
            <p className="text-gray-400">
              New Borg El Arab, Alexandria Governorate, Egypt
            </p>
            <p>
              <a
                href="tel:+201234567890"
                className="hover:text-cyan-400 transition-colors"
              >
                +20 123 456 7890
              </a>
            </p>
            <p>
              <a
                href="mailto:contact@swimacademy.com"
                className="hover:text-cyan-400 transition-colors"
              >
                contact@swimacademy.com
              </a>
            </p>
          </motion.div>
          <motion.div variants={fadeIn} className="space-y-4">
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <InstagramIcon className="stroke-current" />
              </a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} AquaFlow Swimming Academy. All
            Rights Reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
