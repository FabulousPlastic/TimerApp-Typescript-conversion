// src/Components/SetTimer.js
import React, { useState } from 'react';
import '../Styles/SetTimer.css';

const SetTimer = ({ onStart }) => {
  const [workMinutes, setWorkMinutes] = useState('');
  const [workSeconds, setWorkSeconds] = useState('');
  const [pauseMinutes, setPauseMinutes] = useState('');
  const [pauseSeconds, setPauseSeconds] = useState('');
  const [repeats, setRepeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const parsedWorkMinutes = parseInt(workMinutes, 10) || 0;
    const parsedWorkSeconds = parseInt(workSeconds, 10) || 0;
    const parsedPauseMinutes = parseInt(pauseMinutes, 10) || 0;
    const parsedPauseSeconds = parseInt(pauseSeconds, 10) || 0;
    const parsedRepeats = parseInt(repeats, 10) || 1;

    const validatedRepeats = parsedRepeats < 1 ? 1 : parsedRepeats;

    const totalWorkSeconds = parsedWorkMinutes * 60 + parsedWorkSeconds;
    const totalPauseSeconds = parsedPauseMinutes * 60 + parsedPauseSeconds;

    if (totalWorkSeconds <= 0) {
      alert('Please set a work duration greater than zero.');
      return;
    }

    const timerSettings = {
      workMinutes: parsedWorkMinutes,
      workSeconds: parsedWorkSeconds,
      pauseMinutes: parsedPauseMinutes,
      pauseSeconds: parsedPauseSeconds,
      totalWorkSeconds,
      totalPauseSeconds,
      repeats: validatedRepeats,
    };

    onStart(timerSettings);
  };

  return (
    <div className="set-timer">
      <h2>Set Your Timer</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Main Duration:</label>
          <div className="inputs">
            <input
              type="number"
              value={workMinutes}
              onChange={(e) => setWorkMinutes(e.target.value)}
              placeholder="Minutes"
              min="0"
            />
            <input
              type="number"
              value={workSeconds}
              onChange={(e) => setWorkSeconds(e.target.value)}
              placeholder="Seconds"
              min="0"
            />
          </div>
        </div>
        <div className="input-group">
          <label>Pause Duration:</label>
          <div className="inputs">
            <input
              type="number"
              value={pauseMinutes}
              onChange={(e) => setPauseMinutes(e.target.value)}
              placeholder="Minutes"
              min="0"
            />
            <input
              type="number"
              value={pauseSeconds}
              onChange={(e) => setPauseSeconds(e.target.value)}
              placeholder="Seconds"
              min="0"
            />
          </div>
        </div>
        <div className="input-group">
          <label>Repeats:</label>
          <input
            type="number"
            value={repeats}
            onChange={(e) => setRepeats(e.target.value)}
            min="1"
          />
        </div>
        <button type="submit">Start Timer</button>
      </form>
    </div>
  );
};

export default SetTimer;
