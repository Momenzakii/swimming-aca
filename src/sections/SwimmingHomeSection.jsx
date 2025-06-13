import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

console.log("Loading SwimmingHomeSection.jsx");

export default function SwimmingHomeSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      background:
        "url(https://cdn.pixabay.com/photo/2016/11/22/21/43/woman-1850709_1280.jpg) center center / cover no-repeat",
    },
    {
      id: 2,
      background:
        "url(https://cdn.pixabay.com/photo/2013/02/09/04/23/swimmers-79592_1280.jpg) center center / cover no-repeat",
    },
    {
      id: 3,
      background:
        "url(https://cdn.pixabay.com/photo/2015/04/22/21/04/indoor-swimming-pool-735309_1280.jpg) center center / cover no-repeat",
    },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-gray-800"
    >
      <div className="relative w-full h-full">
        <AnimatePresence>
          {slides.map(
            (slide, index) =>
              index === currentSlide && (
                <motion.div
                  key={slide.id}
                  className="absolute inset-0 bg-cover"
                  style={{ background: slide.background }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <div className="absolute inset-0 bg-black/40"></div>
                </motion.div>
              )
          )}
        </AnimatePresence>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg"
            >
              Welcome to
              <br />
              <span className="text-cyan-400">BlueWave</span> Academy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 drop-shadow-md"
            >
              Learn swimming with professional coaches in a safe and friendly
              environment. Start your swimming journey today!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/signup"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Join Us
              </Link>
              <a
                href="#about"
                className="bg-white hover:bg-gray-100 text-cyan-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-cyan-400 scale-125"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
