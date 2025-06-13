// src/components/Logo.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg
      className="h-10 w-10 text-cyan-500"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        d="M15,50 C15,25 35,15 50,30 C65,45 75,35 85,50 C95,65 85,85 70,80 C55,75 35,75 25,60 C15,45 15,50 15,50"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.path
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        d="M20,55 C25,40 45,30 60,45 C75,60 85,50 90,65"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
    </svg>
    <span className="text-xl font-bold text-gray-800">AquaFlow</span>
  </Link>
);

export default Logo;
