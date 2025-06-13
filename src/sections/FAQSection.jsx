import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "Is there training for children?",
      answer:
        "Yes, we offer specialized training programs tailored for children of different age groups and skill levels.",
    },
    {
      question: "What are the subscription requirements?",
      answer:
        "You need to fill out the registration form, choose a plan, and complete the payment to subscribe.",
    },
    {
      question: "Is there a level assessment test?",
      answer:
        "Yes, we conduct an initial assessment to place swimmers in the appropriate level.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center"
        >
          Frequently Asked <span className="text-cyan-600">Questions</span>
        </motion.h2>
        <div className="space-y-4 text-left">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl shadow-sm cursor-pointer bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center p-6">
                <h3 className="font-medium text-lg text-gray-800">
                  {faq.question}
                </h3>
                <span
                  className="text-2xl text-cyan-600 transform transition-transform duration-300"
                  style={{
                    transform:
                      openIndex === index ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 px-6 pb-6">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQSection;
