// src/Components/DigitalTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import '../Styles/DigitalTimer.css';

const DigitalTimer = ({ onCancel }) => {
  const {
    timeValues,
    currentRepeat,
    isPauseMode,
    timerSettings,
    resetTimer,
  } = useContext(TimerContext);

  const timeString = timeValues.toString(['hours', 'minutes', 'seconds']);

  return (
    <div className="digital-timer">
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>
      <div className="display">{timeString}</div>
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
