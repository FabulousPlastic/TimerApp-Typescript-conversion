// src/Components/AnalogTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import { motion } from 'framer-motion';
import '../Styles/AnalogTimer.css';

const AnalogTimer = ({ onCancel }) => {
  const {
    timer, 
    timeValues,
    currentRepeat,
    isPauseMode,
    timerSettings,
    resetTimer, 
  } = useContext(TimerContext);

  const totalTime = isPauseMode
    ? timerSettings.totalPauseSeconds
    : timerSettings.totalWorkSeconds;
  const elapsedSeconds = totalTime - timer.getTotalTimeValues().seconds;

  const progress = (elapsedSeconds / totalTime) * 360 || 0;

  // Generate tick marks
  const ticks = [];
  for (let i = 0; i < 60; i++) {
    ticks.push(
      <div
        key={i}
        className="tick"
        style={{ transform: `rotate(${i * 6}deg)` }}
      />
    );
  }

  const minuteDegrees =
    ((timeValues.minutes % 60) * 60 + timeValues.seconds) * 0.1;
  const secondDegrees = timeValues.seconds * 6;

  return (
    <div className="analog-timer">
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>
      <div className="clock">
        <div
          className="pie"
          style={{
            background: `conic-gradient(
              #3498db ${progress}deg,
              #ecf0f1 ${progress}deg
            )`,
          }}
        ></div>
        {ticks}
        <div className="center"></div>
        <motion.div
          className="hand minute-hand"
          animate={{ rotate: minuteDegrees }}
          transition={{ type: 'linear', duration: 1, ease: 'linear' }}
        />
        <motion.div
          className="hand second-hand"
          animate={{ rotate: secondDegrees }}
          transition={{ type: 'linear', duration: 1, ease: 'linear' }}
        />
      </div>
      <button
        onClick={() => {
          resetTimer(); 
          onCancel(); 
        }}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default AnalogTimer;
