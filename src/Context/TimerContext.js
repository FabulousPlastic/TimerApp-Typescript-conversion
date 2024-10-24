// src/Context/TimerContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import useTimer from 'easytimer-react-hook';

export const TimerContext = createContext();

export const TimerProvider = ({ children, timerSettings, onFinish }) => {
  const [timer] = useTimer();
  const [currentRepeat, setCurrentRepeat] = useState(1);
  const [isPauseMode, setIsPauseMode] = useState(false);
  const [timeValues, setTimeValues] = useState({ minutes: 0, seconds: 0 });

  const startWorkTimer = useCallback(() => {
    const { totalWorkSeconds } = timerSettings;

    const workMinutes = Math.floor(totalWorkSeconds / 60);
    const workSeconds = totalWorkSeconds % 60;

    timer.start({
      countdown: true,
      startValues: {
        minutes: workMinutes,
        seconds: workSeconds,
      },
    });
  }, [timer, timerSettings]);

  const startPauseTimer = useCallback(() => {
    const { totalPauseSeconds } = timerSettings;

    const pauseMinutes = Math.floor(totalPauseSeconds / 60);
    const pauseSeconds = totalPauseSeconds % 60;

    timer.start({
      countdown: true,
      startValues: {
        minutes: pauseMinutes,
        seconds: pauseSeconds,
      },
    });
  }, [timer, timerSettings]);

  const handleTargetAchieved = useCallback(() => {
    if (isPauseMode) {
      if (currentRepeat < timerSettings.repeats) {
        setCurrentRepeat((prev) => prev + 1);
        setIsPauseMode(false);
        startWorkTimer();
      } else {
        onFinish();
      }
    } else {
      if (timerSettings.totalPauseSeconds > 0) {
        setIsPauseMode(true);
        startPauseTimer();
      } else {
        if (currentRepeat < timerSettings.repeats) {
          setCurrentRepeat((prev) => prev + 1);
          startWorkTimer();
        } else {
          onFinish();
        }
      }
    }
  }, [
    isPauseMode,
    currentRepeat,
    timerSettings,
    onFinish,
    startWorkTimer,
    startPauseTimer,
  ]);

  useEffect(() => {
    if (timerSettings) {
      startWorkTimer();
    }

    const updateTimer = () => {
      setTimeValues(timer.getTimeValues());
    };

    timer.addEventListener('secondsUpdated', updateTimer);
    timer.addEventListener('targetAchieved', handleTargetAchieved);

    return () => {
      timer.stop();
      timer.removeEventListener('secondsUpdated', updateTimer);
      timer.removeEventListener('targetAchieved', handleTargetAchieved);
    };
  }, [timer, timerSettings, startWorkTimer, handleTargetAchieved]);

  return (
    <TimerContext.Provider
      value={{
        timer,
        timeValues,
        currentRepeat,
        isPauseMode,
        timerSettings,
        stopTimer: timer.stop,
        resetTimer: timer.reset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};
