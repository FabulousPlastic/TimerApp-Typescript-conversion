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
      <img src="/logo.png" alt="Logo" className="logo" />
      <p className="slogan">Din pålitliga timer-app</p>
    </motion.div>
  );
};

export default LoadingScreen;
