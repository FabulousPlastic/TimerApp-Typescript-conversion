// src/LoadingScreen.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styles/LoadingScreen.css';
import iiItsImage from '../Assets/iiIts.png';
import timeLogoImage from '../Assets/timeLogo.png';
import timeLogoCrashImage from '../Assets/timeLogoCrash.png';

const LoadingScreen = ({ onProceed }) => {
  const [showCrash, setShowCrash] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isCrashed, setIsCrashed] = useState(false);

  const handleLogoClick = () => {
    // Trigger the crash animation
    setIsCrashed(true);

    // Add a delay before calling onProceed to transition to setTimer
    setTimeout(() => {
      onProceed();
    }, 1000); // 1000ms delay to allow the animation to finish
  };

  return (
    <motion.div
      className="loading-screen"
      initial={{ backgroundColor: '#ecf0f1' }}
      animate={{ backgroundColor: '#000' }}
      transition={{ duration: 0.0 }}
    >
      <AnimatePresence>
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
            transition={{ duration: 2.5, ease: 'easeIn' }}
            onAnimationComplete={() => setShowCrash(true)}
          />
        )}

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
            onClick={handleLogoClick}
          />
        )}

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
