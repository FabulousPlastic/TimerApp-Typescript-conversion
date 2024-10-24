// src/Components/Menu.js
import React from 'react';
import '../Styles/Menu.css';

const Menu = ({ setCurrentView }) => {
  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="menu">
      <h2>Select Timer View</h2>
      <button onClick={() => handleViewChange('analogTimer')}>Analog Timer</button>
      <button onClick={() => handleViewChange('digitalTimer')}>Digital Timer</button>
      <button onClick={() => handleViewChange('textTimer')}>Text Timer</button>
      <button onClick={() => handleViewChange('setTimer')}>Reset Timer</button>
    </div>
  );
};

export default Menu;
