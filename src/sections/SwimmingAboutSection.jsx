import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function SwimmingAboutSection() {
  const stats = [
    {
      number: "500+",
      label: "Students",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
          />
        </svg>
      ),
    },
    {
      number: "10+",
      label: "Certified Coaches",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      number: "8+",
      label: "Years of Experience",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a18.95 18.95 0 014.75 6.778m-6.23-2.44a6.726 6.726 0 01-2.748 1.35m0 0V15.75a6 6 0 01-9.592-4.836c-.41-2.621-.233-5.415.695-7.939"
          />
        </svg>
      ),
    },
  ];
  const coaches = [
    {
      name: "Ahmed Mohamed",
      specialty: "Olympic Swimming Coach",
      experience: "12 Years Experience",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      name: "Fatima Ali",
      specialty: "Kids Swimming Instructor",
      experience: "8 Years Experience",
      gradient: "from-blue-400 to-cyan-500",
    },
    {
      name: "Mohamed Hassan",
      specialty: "Competitive Swimming Coach",
      experience: "15 Years Experience",
      gradient: "from-cyan-500 to-teal-500",
    },
    {
      name: "Sarah Ahmed",
      specialty: "Therapeutic Swimming Coach",
      experience: "10 Years Experience",
      gradient: "from-teal-400 to-cyan-400",
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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-cyan-600">Us</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="space-y-6"
          >
            <motion.h3
              variants={item}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
            >
              Leading Swimming Academy Since 2016
            </motion.h3>
            <motion.p
              variants={item}
              className="text-lg text-gray-700 leading-relaxed"
            >
              Our Swimming Academy was established in 2016 with the goal of
              teaching swimming to everyone, from children to adults, in a safe
              and professional environment. We believe that swimming is not just
              a sport, but an essential life skill.
            </motion.p>
            <motion.div variants={container} className="space-y-4">
              <motion.div
                variants={item}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Our Vision:</strong> To be the leading academy in
                  swimming education with the highest standards of quality and
                  safety
                </p>
              </motion.div>
              <motion.div
                variants={item}
                className="flex items-start space-x-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Our Mission:</strong> Teaching swimming with modern
                  and innovative methods while focusing on safety and fun
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl p-8 text-white text-center">
              <div className="mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a18.95 18.95 0 014.75 6.778m-6.23-2.44a6.726 6.726 0 01-2.748 1.35m0 0V15.75a6 6 0 01-9.592-4.836c-.41-2.621-.233-5.415.695-7.939"
                  />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2">
                Excellence in Education
              </h4>
              <p className="text-cyan-100">
                We are proud to be the first swimming academy in the region to
                obtain international certifications in swimming education
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mb-20"
        >
          <motion.h3
            variants={item}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our Achievements <span className="text-cyan-600">in Numbers</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4 text-cyan-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h3
            variants={item}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Our <span className="text-cyan-600">Coaches</span>
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${coach.gradient} flex items-center justify-center`}
                >
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-12 h-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {coach.name}
                  </h4>
                  <p className="text-cyan-600 font-medium mb-1">
                    {coach.specialty}
                  </p>
                  <p className="text-gray-600 text-sm">{coach.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default SwimmingAboutSection;
