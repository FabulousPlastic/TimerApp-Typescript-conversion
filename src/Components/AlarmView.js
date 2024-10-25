// src/AlarmView.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styles/AlarmView.css';
import youreImage from '../Assets/youre.png';
import outImage from '../Assets/out.png';
import ofImage from '../Assets/of.png';
import timeLogoImage from '../Assets/timeLogo.png';
import timeLogoCrashImage from '../Assets/timeLogoCrash.png';

const AlarmView = ({ onRestart }) => {
  const [animationPhase, setAnimationPhase] = useState(0); // Track animation phases
  const [isCrashed, setIsCrashed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleLogoClick = () => {
    if (!isTransitioning) {
      // Trigger the crash animation
      setIsTransitioning(true);
      setIsCrashed(true);

      // Delay before transitioning to setTimer
      setTimeout(() => {
        onRestart();
      }, 1000); // 1000ms delay to let the animation finish
    }
  };

  const handleReset = () => {
    if (!isTransitioning) {
      // Prevent further triggers
      setIsTransitioning(true);
      onRestart();
    }
  };

  return (
    <div className="alarm-view">
      <AnimatePresence>
        {animationPhase === 0 && (
          <motion.img
            key="youre"
            src={youreImage}
            alt="You're"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setAnimationPhase(1)}
          />
        )}

        {animationPhase === 1 && (
          <motion.img
            key="out"
            src={outImage}
            alt="Out"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setAnimationPhase(2)}
          />
        )}

        {animationPhase === 2 && (
          <motion.img
            key="of"
            src={ofImage}
            alt="Of"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setAnimationPhase(3)}
          />
        )}

        {animationPhase === 3 && !isCrashed && (
          <motion.img
            key="timeLogo"
            src={timeLogoImage}
            alt="Time Logo"
            className="time-logo"
            initial={{ y: -300, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn', type: 'spring', stiffness: 300 }}
            onClick={handleLogoClick}
          />
        )}

        {isCrashed && (
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
          />
        )}
      </AnimatePresence>
      <button className="reset-button" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default AlarmView;
