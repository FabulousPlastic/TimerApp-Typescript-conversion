// src/Components/AnalogTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import { motion } from 'framer-motion';
import '../Styles/AnalogTimer.css';

// AnalogTimer component displays a visual clock with timer arms and repeat counter
const AnalogTimer = ({ onCancel }) => {
  const { timeValues, currentRepeat, isPauseMode, timerSettings, resetTimer } = useContext(TimerContext);

  // Calculate degrees for second and minute hands
  const secondDegrees = timeValues.seconds * 6;
  const minuteDegrees = (timeValues.minutes % 60) * 6 + (timeValues.seconds / 60) * 6;

  return (
    <div className="analog-timer">
      {/* Display mode indicator (Work or Pause) */}
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      
      {/* Display current repeat count */}
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>

      {/* Analog clock display */}
      <div className="clock-analog-wrapper">
        <svg id="clock-analog" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 600 600">
          <g id="face">
            {/* Generate clock tick marks */}
            {[...Array(60)].map((_, i) => (
              <line
                key={i}
                className="tick-mark"
                x1="300"
                y1="30"
                x2="300"
                y2="50"
                transform={`rotate(${i * 6} 300 300)`}
              />
            ))}
            <circle className="mid-circle" cx="300" cy="300" r="10"/>
          </g>
          
          {/* Animated clock hands */}
          <g id="hands">
            {/* Second hand */}
            <motion.line
              className="second-arm"
              x1="300"
              y1="300"
              x2="300"
              y2="100"
              animate={{
                rotate: -secondDegrees,
                originX: 1.0,
                originY: 1.0,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
              }}
            />

            {/* Minute hand */}
            <motion.line
              className="minute-arm"
              x1="300"
              y1="300"
              x2="300"
              y2="140"
              animate={{
                rotate: -minuteDegrees,
                originX: 1.0,
                originY: 1.0,
              }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20,
              }}
            />
          </g>
        </svg>
      </div>

      {/* Reset button to stop and reset the timer */}
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
