import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function GallerySection() {
  const galleryImages = [
    {
      src: "https://www.ymcagta.org/files/images/components/childrenProgram.webp?f=jpg",
      alt: "Swimmers during a training session",
    },
    {
      src: "https://bathymca.org/wordpress/wp-content/uploads/2015/01/Heather-Perry.png",
      alt: "View of the olympic-sized swimming pool",
    },
    {
      src: "https://cyberexpo-websites.s3.ap-south-1.amazonaws.com/ajmanswimmingacademy.cyberexpo.ajm.habitatschool.org/swim.jpg",
      alt: "Children learning to swim",
    },
    {
      src: "https://t4.ftcdn.net/jpg/03/00/15/41/360_F_300154101_DunPXnmWb8KI3dEl7KMD4NmhuxlffFWi.jpg",
      alt: "A swimming championship event at the academy",
    },
    {
      src: "https://media.istockphoto.com/id/465383082/photo/female-swimmer-at-the-swimming-pool.jpg?s=612x612&w=0&k=20&c=tcTwN2rTvUBK4wddan_GUCxrXX6bBoU-hyrVMvmT0BM=",
      alt: "A swimmer practicing advanced techniques",
    },
    {
      src: "https://www.oakridge.in/wp-content/uploads/2022/03/2.png",
      alt: "Group of happy swimmers posing",
    },
    {
      src: "https://www.swimnow.co.uk/wp-content/uploads/2023/05/Health-Benefits-of-Swimming.jpg",
      alt: "The academy's modern facility",
    },
  ];
  const duplicatedImages = [...galleryImages, ...galleryImages];
  const marqueeVariants = {
    animate: {
      x: [0, -2464],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 40,
          ease: "linear",
        },
      },
    },
  };
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <section id="gallery" className="py-20 bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Glimpse of Our <span className="text-cyan-600">Academy</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore moments of triumph, dedication, and fun from our daily
            sessions and special events.
          </p>
        </motion.div>
      </div>
      <div className="relative h-80 group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
        <motion.div
          className="flex gap-8"
          variants={marqueeVariants}
          animate="animate"
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 h-80 rounded-2xl overflow-hidden shadow-lg group-hover:[animation-play-state:paused]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/ef4444/white?text=Image+Error";
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default GallerySection;
