// src/Components/TextTimer.js
import React, { useContext } from 'react';
import { TimerContext } from '../Context/TimerContext';
import '../Styles/TextTimer.css';

const TextTimer = ({ onCancel }) => {
  const {
    // timer,
    timeValues,
    currentRepeat,
    isPauseMode,
    timerSettings,
    stopTimer,
  } = useContext(TimerContext);

  const numberToWords = (num) => {
    const ones = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ];
    const teens = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty'];

    if (num < 10) return ones[num];
    else if (num >= 10 && num < 20) return teens[num - 10];
    else {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      return tens[ten] + (one > 0 ? '-' + ones[one] : '');
    }
  };

  const minutes = numberToWords(timeValues.minutes);
  const seconds = numberToWords(timeValues.seconds);
  const timeText = `${minutes} minute${
    timeValues.minutes !== 1 ? 's' : ''
  } and ${seconds} second${timeValues.seconds !== 1 ? 's' : ''} left`;

  return (
    <div className="text-timer">
      <h2>{isPauseMode ? 'Pause' : 'Work'}</h2>
      <div className="repeat-counter">
        Repeat {currentRepeat}/{timerSettings.repeats}
      </div>
      <div className="crawl">
        <div className="content">
          <p>{timeText}</p>
        </div>
      </div>
      <button
        onClick={() => {
          stopTimer();
          onCancel();
        }}
      >
        Cancel Timer
      </button>
    </div>
  );
};

export default TextTimer;
