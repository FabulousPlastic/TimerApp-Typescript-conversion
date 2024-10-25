// src/Context/TimerContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import useTimer from 'easytimer-react-hook';

export const TimerContext = createContext();

export const TimerProvider = ({ children, timerSettings = {}, onFinish }) => {
  const {
    totalWorkSeconds = 0,
    totalPauseSeconds = 0,
    repeats = 1,
  } = timerSettings;

  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [isPauseMode, setIsPauseMode] = useState(false);

  // Initialize the timer with initial start values
  const [timer, isTargetAchieved] = useTimer({
    countdown: true,
    startValues: {
      seconds: totalWorkSeconds,
    },
    target: { seconds: 0 },
    precision: 'seconds',
    updateWhenTargetAchieved: true,
  });

  const handleTargetAchieved = useCallback(() => {
    if (isPauseMode) {
      if (currentRepeat < repeats) {
        setCurrentRepeat((prev) => prev + 1);
        setIsPauseMode(false);
        timer.start({
          countdown: true,
          startValues: { seconds: totalWorkSeconds },
        });
      } else {
        timer.stop();
        onFinish();
      }
    } else {
      if (totalPauseSeconds > 0) {
        setIsPauseMode(true);
        timer.start({
          countdown: true,
          startValues: { seconds: totalPauseSeconds },
        });
      } else {
        if (currentRepeat < repeats) {
          setCurrentRepeat((prev) => prev + 1);
          timer.start({
            countdown: true,
            startValues: { seconds: totalWorkSeconds },
          });
        } else {
          timer.stop();
          onFinish();
        }
      }
    }
  }, [
    isPauseMode,
    currentRepeat,
    repeats,
    totalWorkSeconds,
    totalPauseSeconds,
    timer,
    onFinish,
  ]);

  useEffect(() => {
    timer.start();
  }, [timer]);

  useEffect(() => {
    if (isTargetAchieved) {
      handleTargetAchieved();
    }
  }, [isTargetAchieved, handleTargetAchieved]);

  // Function to reset the timer
  const resetTimer = useCallback(() => {
    timer.reset(); 
    setCurrentRepeat(1); 
    setIsPauseMode(false);

    // Restart the timer with initial work settings
    timer.start({
      countdown: true,
      startValues: {
        seconds: totalWorkSeconds,
      },
    });
  }, [timer, totalWorkSeconds]);

  return (
    <TimerContext.Provider
      value={{
        timer,
        timeValues: timer.getTimeValues(),
        currentRepeat,
        isPauseMode,
        timerSettings,
        stopTimer: timer.stop,
        resetTimer,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
