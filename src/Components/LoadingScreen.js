// src/LoadingScreen.js
import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/LoadingScreen.css';

const LoadingScreen = ({ onProceed }) => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={onProceed}
    >
      <motion.svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="black"
          strokeWidth="3"
          fill="none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.line
          x1="30"
          y1="30"
          x2="70"
          y2="70"
          stroke="black"
          strokeWidth="3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </motion.svg>
      <motion.p
        className="slogan"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{
          scale: [0.5, 3, 0.8, 1],
          rotate: [10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0],
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        IIIiiiit's TIME!!!
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
