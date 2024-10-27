// src/Components/TextTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import { motion } from 'framer-motion';
import '../Styles/TextTimer.css';

// TextTimer component displays time in words with animations
const TextTimer = ({ onCancel }) => {
  const { timeValues, currentRepeat, isPauseMode, timerSettings, stopTimer } = useContext(TimerContext);

  // Converts number to words for minute and second display
  const numberToWords = (num) => {
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

    if (num < 10) return ones[num];
    if (num < 20) return teens[num - 10];
    const ten = Math.floor(num / 10);
    const one = num % 10;
    return `${tens[ten]}${one > 0 ? '-' + ones[one] : ''}`;
  };

  // Time in words for animated display
  const minutesWord = numberToWords(timeValues.minutes);
  const secondsWord = numberToWords(timeValues.seconds);
  const minuteLabel = timeValues.minutes === 1 ? 'minute' : 'minutes';
  const secondLabel = timeValues.seconds === 1 ? 'second' : 'seconds';

  return (
    <div className="text-timer">
      {/* Mode indicator (Work or Pause) */}
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      
      {/* Repeat counter display */}
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>

      {/* Animated text-based time display */}
      <div className="time-display">
        <div className="time-section">
          <motion.span
            key={minutesWord}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {minutesWord}
          </motion.span>
          <span className="label"> {minuteLabel}</span>
        </div>
        <div className="time-section">
          <motion.span
            key={secondsWord}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {secondsWord}
          </motion.span>
          <span className="label"> {secondLabel}</span>
        </div>
      </div>

      {/* Reset button */}
      <button
        onClick={() => {
          stopTimer();
          onCancel();
        }}
      >
        Reset Timer
      </button>
    </div>
  );
};

export default TextTimer;
