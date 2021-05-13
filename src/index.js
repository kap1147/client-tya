import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import reportWebVitals from './reportWebVitals';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8bc34a',
      dark: '#5a9216',
      light: '#bef67a'
    },
    secondary: {
      main: '#ffe4c4',
      dark: '#cbb293',
      light: '#fffff7'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
