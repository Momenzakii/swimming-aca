import React, { useState } from "react";
import { motion } from "framer-motion";

console.log("Loading EnrollmentModal.jsx");

export default function EnrollmentModal({ isOpen, onClose }) {
  if (!isOpen) return null;
  const levels = ["Beginner", "Intermediate", "Advanced", "Kids"];
  const VisaInput = () => {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
      let formattedInput = e.target.value
        .replace(/\D/g, "")
        .substring(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setValue(formattedInput);
    };
    return (
      <div className="relative">
        <input
          id="credit-card"
          type="text"
          required
          className="w-full pl-12 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
          placeholder="0000 0000 0000 0000"
          value={value}
          onChange={handleChange}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.1,6.3H18.9V5.8A2.8,2.8,0,0,0,16.1,3H7.9A2.8,2.8,0,0,0,5.1,5.8v.5H2.9A2.8,2.8,0,0,0,0,9.1v9.8A2.8,2.8,0,0,0,2.9,21.7H21.1A2.8,2.8,0,0,0,24,18.9V9.1A2.8,2.8,0,0,0,21.1,6.3ZM6.1,5.8A1.8,1.8,0,0,1,7.9,4h8.2a1.8,1.8,0,0,1,1.8,1.8v.5H6.1ZM23,18.9A1.8,1.8,0,0,1,21.1,20.7H2.9A1.8,1.8,0,0,1,1,18.9V9.1A1.8,1.8,0,0,1,2.9,7.3H21.1A1.8,1.8,0,0,1,23,9.1Z" />
          </svg>
        </div>
      </div>
    );
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-2 text-gray-900">
          Enroll in a Course
        </h2>
        <p className="text-gray-500 mb-6">
          Complete the form below to book your spot.
        </p>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="booking-name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="booking-name"
              type="text"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="e.g., Ahmed Mohamed"
            />
          </div>
          <div>
            <label
              htmlFor="booking-age"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Age
            </label>
            <input
              id="booking-age"
              type="number"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="e.g., 25"
            />
          </div>
          <div>
            <label
              htmlFor="booking-phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              id="booking-phone"
              type="tel"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
              placeholder="e.g., 01234567890"
            />
          </div>
          <div>
            <label
              htmlFor="booking-level"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Level
            </label>
            <select
              id="booking-level"
              required
              className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500 transition"
            >
              {levels.map((level) => (
                <option key={level}>{level}</option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="credit-card"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Credit Card (Visa)
            </label>
            <VisaInput />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
