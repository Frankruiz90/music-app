import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/theme.scss'
import reportWebVitals from './reportWebVitals';
import Login from './views/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRouter } from './routers/AppRouter';

ReactDOM.render(
  // <Login />,
  <AppRouter />,
  document.getElementById('root'),
);

reportWebVitals();
