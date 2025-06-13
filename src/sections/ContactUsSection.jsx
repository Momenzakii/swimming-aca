import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { MapPinIcon } from "../components/Icons";
import { PhoneContactIcon } from "../components/Icons";
import { MailIcon } from "../components/Icons";


function ContactUsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-cyan-600">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to enroll? Reach out to us! Our team is here
            to help you start your swimming journey.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h3>
            <form action="#" method="POST" className="space-y-6">
              <motion.div variants={fadeIn}>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="Full Name"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="Email Address"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="Subject"
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
                  placeholder="Your Message"
                ></textarea>
              </motion.div>
              <motion.div variants={fadeIn}>
                <button
                  type="submit"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeIn}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4 text-lg">
                <p className="flex items-start">
                  <MapPinIcon className="w-6 h-6 text-cyan-600 mt-1 mr-4 flex-shrink-0" />
                  <span>New Borg El Arab, Alexandria Governorate, Egypt</span>
                </p>
                <p className="flex items-center">
                  <PhoneContactIcon className="w-6 h-6 text-cyan-600 mr-4 flex-shrink-0" />
                  <a
                    href="tel:+201234567890"
                    className="text-gray-700 hover:text-cyan-600 transition"
                  >
                    +20 123 456 7890
                  </a>
                </p>
                <p className="flex items-center">
                  <MailIcon className="w-6 h-6 text-cyan-600 mr-4 flex-shrink-0" />
                  <a
                    href="mailto:contact@swimacademy.com"
                    className="text-gray-700 hover:text-cyan-600 transition"
                  >
                    contact@swimacademy.com
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn}
              className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 h-80"
            >
              <iframe
                title="Academy Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437209.3242634354!2d29.405527996538356!3d30.97811211993416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14587a6435f33a89%3A0x4238e83395610842!2sNew%20Borg%20El%20Arab%2C%20Alexandria%20Governorate!5e0!3m2!1sen!2seg!4v1672605234567!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
