// src/Components/SetTimer.js
import React, { useState } from 'react';
import '../Styles/SetTimer.css';

const SetTimer = ({ onStart, onMenu }) => {
  const [workMinutes, setWorkMinutes] = useState(0);
  const [workSeconds, setWorkSeconds] = useState(0);
  const [pauseMinutes, setPauseMinutes] = useState(0);
  const [pauseSeconds, setPauseSeconds] = useState(0);
  const [repeats, setRepeats] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalWorkSeconds = workMinutes * 60 + workSeconds;
    const totalPauseSeconds = pauseMinutes * 60 + pauseSeconds;

    if (totalWorkSeconds <= 0) {
      alert('Please set a work duration greater than zero.');
      return;
    }

    const timerSettings = {
      workMinutes,
      workSeconds,
      pauseMinutes,
      pauseSeconds,
      totalWorkSeconds,
      totalPauseSeconds,
      repeats,
    };

    onStart(timerSettings);
  };

  const handleScroll = (setter, value, delta) => {
    const newValue = Math.max(0, value + delta);
    setter(newValue);
  };

  return (
    <div className="set-timer">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Rondlängd:</label>
        </div>
        <div className="time-labels">
          <div className="time-label">Minuter</div>
          <div className="time-label">Sekunder</div>
        </div>
        <div className="time-input">
          <div
            className="scrollable-number"
            onWheel={(e) => handleScroll(setWorkMinutes, workMinutes, e.deltaY < 0 ? 1 : -1)}
          >
            <button
              type="button"
              className="arrow-button"
              onClick={() => setWorkMinutes(workMinutes + 1)}
            >
              ↑
            </button>
            <div className="number-display">{workMinutes}</div>
            <button
              type="button"
              className="arrow-button"
              onClick={() => setWorkMinutes(Math.max(0, workMinutes - 1))}
            >
              ↓
            </button>
          </div>
          <div
            className="scrollable-number"
            onWheel={(e) => handleScroll(setWorkSeconds, workSeconds, e.deltaY < 0 ? 1 : -1)}
          >
            <button
              type="button"
              className="arrow-button"
              onClick={() => setWorkSeconds(workSeconds + 1)}
            >
              ↑
            </button>
            <div className="number-display">{workSeconds}</div>
            <button
              type="button"
              className="arrow-button"
              onClick={() => setWorkSeconds(Math.max(0, workSeconds - 1))}
            >
              ↓
            </button>
          </div>
        </div>


        <div className="input-group">
          <label>Paus:</label>
        </div>
        <div className="time-input">
          <div
            className="scrollable-number"
            onWheel={(e) => handleScroll(setPauseMinutes, pauseMinutes, e.deltaY < 0 ? 1 : -1)}
          >
            <button
              type="button"
              className="arrow-button"
              onClick={() => setPauseMinutes(pauseMinutes + 1)}
            >
              ↑
            </button>
            <div className="number-display">{pauseMinutes}</div>
            <button
              type="button"
              className="arrow-button"
              onClick={() => setPauseMinutes(Math.max(0, pauseMinutes - 1))}
            >
              ↓
            </button>
          </div>
          <div
            className="scrollable-number"
            onWheel={(e) => handleScroll(setPauseSeconds, pauseSeconds, e.deltaY < 0 ? 1 : -1)}
          >
            <button
              type="button"
              className="arrow-button"
              onClick={() => setPauseSeconds(pauseSeconds + 1)}
            >
              ↑
            </button>
            <div className="number-display">{pauseSeconds}</div>
            <button
              type="button"
              className="arrow-button"
              onClick={() => setPauseSeconds(Math.max(0, pauseSeconds - 1))}
            >
              ↓
            </button>
          </div>
        </div>
        {/* <div className="time-labels">
          <div className="time-label">Minuter</div>
          <div className="time-label">Sekunder</div>
        </div> */}

        <div className="input-group">
          <label>Antal ronder:</label>
        </div>
        <div className="scrollable-number">
          <button
            type="button"
            className="arrow-button"
            onClick={() => setRepeats(repeats + 1)}
          >
            ↑
          </button>
          <div className="number-display">{repeats}</div>
          <button
            type="button"
            className="arrow-button"
            onClick={() => setRepeats(Math.max(1, repeats - 1))}
          >
            ↓
          </button>
        </div>

        <button type="submit" className="start-timer-button">Hajime!</button>
      </form>
    </div>
  );
};

export default SetTimer;
