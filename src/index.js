import ReactDOM from 'react-dom';
import React from 'react';
import { App } from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Theme } from './theme';
import { ThemeProvider } from '@material-ui/core/styles';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
      , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vital
reportWebVitals();
