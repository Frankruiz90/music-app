import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  // <React.StrictMode>
  // </React.StrictMode>,
  <Login />,
  document.getElementById('root'),
);

reportWebVitals();
