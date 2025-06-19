import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Correct path to our App.jsx
import './App.css'; // Link to our global App.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);