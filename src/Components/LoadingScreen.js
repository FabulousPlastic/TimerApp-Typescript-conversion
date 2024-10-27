// src/LoadingScreen.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styles/LoadingScreen.css';
import iiItsImage from '../Assets/iiIts.png';
import timeLogoImage from '../Assets/timeLogo.png';
import timeLogoCrashImage from '../Assets/timeLogoCrash.png';

// LoadingScreen component with animated sequence before proceeding
const LoadingScreen = ({ onProceed }) => {
  const [showCrash, setShowCrash] = useState(false); // Controls transition to crash phase
  const [showLogo, setShowLogo] = useState(false); // Controls logo visibility
  const [isCrashed, setIsCrashed] = useState(false); // Tracks if crash animation is active

  // Handles logo click to trigger crash and proceed
  const handleLogoClick = () => {
    setIsCrashed(true);
    setTimeout(() => onProceed(), 1000); // Delay for animation completion
  };

  return (
    <motion.div
      className="loading-screen"
      initial={{ backgroundColor: '#ecf0f1' }}
      animate={{ backgroundColor: '#000' }}
      transition={{ duration: 0.0 }}
    >
      <AnimatePresence>
        {/* Initial animation with "It's!" image */}
        {!showCrash && !isCrashed && (
          <motion.img
            key="iiIts"
            src={iiItsImage}
            alt="IIiiiIt's!"
            className="iiIts"
            initial={{ scale: 0, opacity: 1 }}
            animate={{
              scale: [1, 20],
              rotate: [0, 10, -10, 10, -10, 20, -20, 20, -20, 30, -30, 30, -30, 30, -30, 30, -30, 40, -40, 40, -40, 50, -50, 50, -50, 0],
              opacity: [1, 1],
            }}
            transition={{ duration: 2.2, ease: 'easeIn' }}
            onAnimationComplete={() => setShowCrash(true)} // Starts crash animation
          />
        )}

        {/* Logo animation before crash */}
        {showCrash && !isCrashed && (
          <motion.img
            key="timeLogo"
            src={timeLogoImage}
            alt="Falling Logo"
            className="time-logo"
            initial={{ y: -300, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn', type: 'spring', stiffness: 300 }}
            onAnimationComplete={() => setShowLogo(true)}
            onClick={handleLogoClick} // Initiates crash on click
          />
        )}

        {/* Crash animation for logo */}
        {showLogo && isCrashed && (
          <AnimatePresence>
            <motion.img
              key="timeLogoCrash"
              src={timeLogoCrashImage}
              alt="Logo Crash"
              className="time-logo-crash"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1], rotate: [-3, 3, -3, 0] }}
              transition={{
                duration: 0.5,
                times: [0, 0.2, 0.5],
                ease: 'easeIn',
                repeat: 0,
              }}
              onAnimationComplete={() => setTimeout(() => setIsCrashed(false), 1000)}
            />
          </AnimatePresence>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;
