import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS, if any. We'll use App.css for component-specific.
import App from './App'; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Render your App component here */}
  </React.StrictMode>
);
