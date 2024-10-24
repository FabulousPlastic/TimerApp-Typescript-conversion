// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { TimerProvider } from './Context/TimerContext';
import './Styles/App.css';

// Create the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the App wrapped with TimerProvider
root.render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>
);
