// src/AlarmView.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../Styles/AlarmView.css';
import youreImage from '../Assets/youre.png';
import outImage from '../Assets/out.png';
import ofImage from '../Assets/of.png';
import timeLogoImage from '../Assets/timeLogo.png';
import timeLogoCrashImage from '../Assets/timeLogoCrash.png';

// AlarmView component displays alarm animation and reset option
const AlarmView = ({ onRestart }) => {
  const [animationPhase, setAnimationPhase] = useState(0); // Current phase in animation sequence
  const [isCrashed, setIsCrashed] = useState(false); // Tracks if crash animation is active
  const [isTransitioning, setIsTransitioning] = useState(false); // Prevents re-triggering animations

  // Handles logo click to trigger crash animation and restart
  const handleLogoClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setIsCrashed(true);
      setTimeout(() => onRestart(), 1000); // Delays restart to finish animation
    }
  };

  // Handles immediate reset without animation
  // const handleReset = () => {
  //   if (!isTransitioning) {
  //     setIsTransitioning(true);
  //     onRestart();
  //   }
  // };

  return (
    <div className="alarm-view">
      <AnimatePresence>
        {/* "You're" animation phase */}
        {animationPhase === 0 && (
          <motion.img
            key="youre"
            src={youreImage}
            alt="You're"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setAnimationPhase(1)} // Progresses to next phase
          />
        )}

        {/* "Out" animation phase */}
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

        {/* "Of" animation phase */}
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

        {/* "Time Logo" animation phase */}
        {animationPhase === 3 && !isCrashed && (
          <motion.img
            key="timeLogo"
            src={timeLogoImage}
            alt="Time Logo"
            className="time-logo"
            initial={{ y: -300, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeIn', type: 'spring', stiffness: 300 }}
            onClick={handleLogoClick} // Triggers crash on click
          />
        )}

        {/* Crash animation for "Time Logo" */}
        {isCrashed && (
          <motion.img
            key="timeLogoCrash"
            src={timeLogoCrashImage}
            alt="Logo Crash"
            className="time-logo-crash"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1], rotate: [-3, 3, -3, 0] }}
            transition={{ duration: 0.5, times: [0, 0.2, 0.5], ease: 'easeIn' }}
          />
        )}
      </AnimatePresence>
      
      {/* Reset button to restart alarm */}
      {/* <button className="reset-button" onClick={handleReset}>
        Reset
      </button> */}
    </div>
  );
};

export default AlarmView;
