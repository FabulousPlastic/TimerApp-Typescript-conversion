// src/Components/AlarmView.js
import React from 'react';
import '../Styles/AlarmView.css';

const AlarmView = ({ onRestart }) => {
  return (
    <div className="alarm-view">
      <h2>Time's Up!</h2>
      <button onClick={onRestart}>Restart Timer</button>
    </div>
  );
};

export default AlarmView;
