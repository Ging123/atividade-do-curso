import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './UI/styles/global.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);