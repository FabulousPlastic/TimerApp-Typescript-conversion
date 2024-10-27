// src/Components/DigitalTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import '../Styles/DigitalTimer.css';

// DigitalTimer component displays digital time and repeat counter
const DigitalTimer = ({ onCancel }) => {
  const { timeValues, currentRepeat, isPauseMode, timerSettings, resetTimer } = useContext(TimerContext);

  // Format time as a string
  const timeString = timeValues.toString(['minutes', 'seconds']);

  return (
    <div className="digital-timer">
      {/* Mode indicator (Work or Pause) */}
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      
      {/* Repeat counter display */}
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>

      {/* Digital time display */}
      <div className="display">{timeString}</div>
      
      {/* Reset button */}
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

export default DigitalTimer;
