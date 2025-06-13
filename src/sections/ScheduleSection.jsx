import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function ScheduleSection() {
  const [levelFilter, setLevelFilter] = useState("All");
  const [trainerFilter, setTrainerFilter] = useState("All");
  const scheduleData = [
    {
      id: 1,
      course: "Beginner Swimming",
      level: "Beginner",
      trainer: "Fatima Ali",
      days: "Mon & Wed",
      time: "5:00 PM - 6:00 PM",
      startDate: "2023-06-05",
      duration: "4 weeks",
    },
    {
      id: 2,
      course: "Intermediate Techniques",
      level: "Intermediate",
      trainer: "Ahmed Mohamed",
      days: "Tue & Thu",
      time: "6:00 PM - 7:00 PM",
      startDate: "2023-06-06",
      duration: "6 weeks",
    },
    {
      id: 3,
      course: "Advanced Training",
      level: "Advanced",
      trainer: "Mohamed Hassan",
      days: "Mon, Wed, Fri",
      time: "7:00 AM - 8:00 AM",
      startDate: "2023-06-07",
      duration: "8 weeks",
    },
    {
      id: 4,
      course: "Kids Swimming",
      level: "Kids",
      trainer: "Sarah Ahmed",
      days: "Sat & Sun",
      time: "10:00 AM - 11:00 AM",
      startDate: "2023-06-10",
      duration: "4 weeks",
    },
    {
      id: 5,
      course: "Competitive Prep",
      level: "Advanced",
      trainer: "Mohamed Hassan",
      days: "Daily",
      time: "6:00 AM - 8:00 AM",
      startDate: "2023-06-12",
      duration: "10 weeks",
    },
    {
      id: 6,
      course: "Water Safety",
      level: "Beginner",
      trainer: "Fatima Ali",
      days: "Fri",
      time: "4:00 PM - 5:00 PM",
      startDate: "2023-06-09",
      duration: "4 weeks",
    },
  ];
  const levels = ["All", ...new Set(scheduleData.map((item) => item.level))];
  const trainers = [
    "All",
    ...new Set(scheduleData.map((item) => item.trainer)),
  ];
  const filteredSchedule = scheduleData.filter((item) => {
    return (
      (levelFilter === "All" || item.level === levelFilter) &&
      (trainerFilter === "All" || item.trainer === trainerFilter)
    );
  });
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section id="schedule" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Training <span className="text-cyan-600">Schedule</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View upcoming courses and find the perfect time for your swimming
            lessons
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="mb-12 bg-white p-6 rounded-xl shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="level-filter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Level:
              </label>
              <select
                id="level-filter"
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
              >
                {levels.map((level, index) => (
                  <option key={index} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="trainer-filter"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Filter by Trainer:
              </label>
              <select
                id="trainer-filter"
                value={trainerFilter}
                onChange={(e) => setTrainerFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-cyan-500 focus:border-cyan-500"
              >
                {trainers.map((trainer, index) => (
                  <option key={index} value={trainer}>
                    {trainer}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={item}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-cyan-500 to-blue-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Course
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Level
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Trainer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Days
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Starts
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Duration
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSchedule.length > 0 ? (
                  filteredSchedule.map((item) => (
                    <motion.tr
                      key={item.id}
                      whileHover={{
                        backgroundColor: "rgba(6, 182, 212, 0.05)",
                      }}
                      className="transition-colors duration-200"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.course}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            item.level === "Beginner"
                              ? "bg-blue-100 text-blue-800"
                              : item.level === "Intermediate"
                              ? "bg-cyan-100 text-cyan-800"
                              : item.level === "Advanced"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.trainer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.days}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(item.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-cyan-600 hover:text-cyan-800">
                          Enroll
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-6 py-4 text-center text-sm text-gray-500"
                    >
                      No courses match your filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default ScheduleSection;
