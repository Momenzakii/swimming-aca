import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import EnrollmentModal from "../components/EnrollmentModal";


function SwimmingCoursesSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const courseLevels = [
    {
      level: "Beginner",
      description:
        "Perfect for first-time swimmers. Learn basic techniques and water safety.",
      courses: [
        {
          name: "Water Introduction",
          duration: "4 weeks",
          price: "$120",
          schedule: "Mon & Wed, 5-6 PM",
          trainer: "Fatima Ali",
        },
        {
          name: "Basic Strokes",
          duration: "6 weeks",
          price: "$180",
          schedule: "Tue & Thu, 6-7 PM",
          trainer: "Ahmed Mohamed",
        },
      ],
    },
    {
      level: "Intermediate",
      description: "Develop different swimming styles and increase endurance.",
      courses: [
        {
          name: "Stroke Improvement",
          duration: "8 weeks",
          price: "$250",
          schedule: "Mon & Wed, 7-8 PM",
          trainer: "Youssef Khaled",
        },
        {
          name: "Endurance Building",
          duration: "8 weeks",
          price: "$280",
          schedule: "Sat & Sun, 4-5 PM",
          trainer: "Sara Abdelrahman",
        },
      ],
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <>
      <section id="courses" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={item}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {" "}
              Our <span className="text-cyan-600">Programs</span>{" "}
            </h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {" "}
              Comprehensive swimming programs for all ages and skill levels.{" "}
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={container}
            className="space-y-16"
          >
            {courseLevels.map((levelData, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 text-white">
                  <h3 className="text-2xl font-bold">{levelData.level}</h3>
                  <p className="text-cyan-100">{levelData.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                  {levelData.courses.map((course, courseIndex) => (
                    <motion.div
                      key={courseIndex}
                      whileHover={{ scale: 1.03 }}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-bold text-gray-900">
                          {course.name}
                        </h4>
                        <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full">
                          {course.price}
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <strong>Duration:</strong> {course.duration}
                        </p>
                        <p>
                          <strong>Schedule:</strong> {course.schedule}
                        </p>
                        <p>
                          <strong>Trainer:</strong> {course.trainer}
                        </p>
                      </div>
                      <button
                        onClick={openModal}
                        className="mt-6 w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
                      >
                        Enroll Now
                      </button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {isModalOpen && (
          <EnrollmentModal isOpen={isModalOpen} onClose={closeModal} />
        )}
      </AnimatePresence>
    </>
  );
}
export default SwimmingCoursesSection;
