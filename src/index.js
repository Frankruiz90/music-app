import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/theme.scss'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MusicApp } from './MusicApp';

ReactDOM.render(
  <MusicApp />,
  document.getElementById('root'),
);

reportWebVitals();
