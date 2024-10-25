// src/App.js
import React, { useState } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import SetTimer from './Components/SetTimer';
import AnalogTimer from './Components/AnalogTimer';
import DigitalTimer from './Components/DigitalTimer';
import TextTimer from './Components/TextTimer';
import AlarmView from './Components/AlarmView';
import Menu from './Components/Menu';
import { TimerProvider } from './Context/TimerContext';

const App = () => {
  const [currentView, setCurrentView] = useState('loading');
  const [timerSettings, setTimerSettings] = useState(null);

  const handleProceed = () => setCurrentView('setTimer');

  const handleStart = (settings) => {
    setTimerSettings(settings);
    setCurrentView('analogTimer'); // Default view
  };

  const handleCancel = () => {
    setCurrentView('setTimer');
  };

  const handleFinish = () => setCurrentView('alarm');

  const handleRestart = () => {
    setTimerSettings(null);
    setCurrentView('setTimer');
  };

  const handleMenu = () => setCurrentView('menu');

  return (
    <>
      {currentView === 'loading' && <LoadingScreen onProceed={handleProceed} />}
      {currentView === 'setTimer' && <SetTimer onStart={handleStart} />}
      {timerSettings && (
        <TimerProvider timerSettings={timerSettings} onFinish={handleFinish}>
          {currentView === 'analogTimer' && (
            <AnalogTimer onCancel={handleCancel} />
          )}
          {currentView === 'digitalTimer' && (
            <DigitalTimer onCancel={handleCancel} />
          )}
          {currentView === 'textTimer' && (
            <TextTimer onCancel={handleCancel} />
          )}
        </TimerProvider>
      )}
      {currentView === 'alarm' && <AlarmView onRestart={handleRestart} />}
      {currentView === 'menu' && (
        <Menu
          setCurrentView={setCurrentView}
          currentView={currentView}
          timerSettings={timerSettings}
        />
      )}

      {/* Burger menu button */}
      {currentView !== 'loading' &&
        currentView !== 'menu' &&
        currentView !== 'alarm' && (
          <button className="burger-menu" onClick={handleMenu}>
            ☰
          </button>
        )}
    </>

  );
};

export default App;
