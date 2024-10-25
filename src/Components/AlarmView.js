// src/Components/AlarmView.js
import React, { useContext } from 'react';
import '../Styles/AlarmView.css';
import { TimerContext } from '../Context/TimerContext';
import { motion } from 'framer-motion';

const AlarmView = ({ onCancel }) => {
  const { resetTimer } = useContext(TimerContext);

  return (
    <div className="alarm-view">
      <h2>Time's Up!</h2>
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

export default AlarmView;
