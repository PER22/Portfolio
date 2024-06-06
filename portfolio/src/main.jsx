import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './pages/Portfolio/Portfolio';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Portfolio/>
    </Router>
  </React.StrictMode>
);