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
  const [showOut, setShowOut] = useState(false);
  const [showOf, setShowOf] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isCrashed, setIsCrashed] = useState(false);

  const handleLogoClick = () => {
    // Trigger the crash animation
    setIsCrashed(true);

    // Delay before transitioning to setTimer
    setTimeout(() => {
      onRestart();
    }, 1000); // 1000ms delay for the crash animation to play
  };

  return (
    <div className="alarm-view">
      <AnimatePresence>
        {!showOut && !showOf && !showLogo && (
          <motion.img
            key="youre"
            src={youreImage}
            alt="You're"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setShowOut(true)}
          />
        )}

        {showOut && !showOf && !showLogo && (
          <motion.img
            key="out"
            src={outImage}
            alt="Out"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setShowOf(true)}
          />
        )}

        {showOf && !showLogo && (
          <motion.img
            key="of"
            src={ofImage}
            alt="Of"
            className="alarm-image"
            initial={{ scale: 20, opacity: 1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onAnimationComplete={() => setShowLogo(true)}
          />
        )}

        {showLogo && !isCrashed && (
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
      <button className="reset-button" onClick={onRestart}>
        Reset
      </button>
    </div>
  );
};

export default AlarmView;
