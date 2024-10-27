// src/Components/Menu.js
import React from 'react';
import '../Styles/Menu.css';

// Menu component for switching between timer views
const Menu = ({ setCurrentView }) => {
  
  // Updates current view based on selected timer
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="menu">
      {/* Buttons for each timer view */}
      <button onClick={() => handleViewChange('analogTimer')}>Analog Timer</button>
      <button onClick={() => handleViewChange('digitalTimer')}>Digital Timer</button>
      <button onClick={() => handleViewChange('textTimer')}>Text Timer</button>
      <button onClick={() => handleViewChange('setTimer')}>Reset Timer</button>
    </div>
  );
};

export default Menu;
