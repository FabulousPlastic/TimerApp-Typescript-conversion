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

// Main App component to control timer views and transitions
const App = () => {
  const [currentView, setCurrentView] = useState('loading'); // Tracks active view
  const [timerSettings, setTimerSettings] = useState(null); // Holds timer configuration

  // View change handlers
  const handleProceed = () => setCurrentView('setTimer');
  const handleStart = (settings) => {
    setTimerSettings(settings);
    setCurrentView('analogTimer'); // Default view on start
  };
  const handleCancel = () => setCurrentView('setTimer');
  const handleFinish = () => setCurrentView('alarm');
  const handleRestart = () => {
    setTimerSettings(null);
    setCurrentView('setTimer');
  };
  const handleMenu = () => setCurrentView('menu');

  return (
    <>
      {/* Conditional rendering based on current view */}
      {currentView === 'loading' && <LoadingScreen onProceed={handleProceed} />}
      {currentView === 'setTimer' && <SetTimer onStart={handleStart} />}
      
      {/* Timer views within TimerProvider */}
      {timerSettings && (
        <TimerProvider timerSettings={timerSettings} onFinish={handleFinish}>
          {currentView === 'analogTimer' && <AnalogTimer onCancel={handleCancel} />}
          {currentView === 'digitalTimer' && <DigitalTimer onCancel={handleCancel} />}
          {currentView === 'textTimer' && <TextTimer onCancel={handleCancel} />}
        </TimerProvider>
      )}

      {/* Alarm and menu views */}
      {currentView === 'alarm' && <AlarmView onRestart={handleRestart} />}
      {currentView === 'menu' && (
        <Menu setCurrentView={setCurrentView} currentView={currentView} timerSettings={timerSettings} />
      )}

      {/* Burger menu button for navigation */}
      {currentView !== 'loading' && currentView !== 'menu' && currentView !== 'alarm' && (
        <button className="burger-menu" onClick={handleMenu}>☰</button>
      )}
    </>
  );
};

export default App;
