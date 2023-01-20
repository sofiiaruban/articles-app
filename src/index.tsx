import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { HashRouter } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "'Montserrat', sans-serif",
      textTransform: "none",
    },
    body1: {
      fontWeight: 400,
    },
    body2:{
      fontWeight: 600,
      fontSize: "1rem",
    },
    h5:{
      fontWeight: 400,
      fontSize: "22px",
    },
    button: {
      fontWeight: 600,
      fontSize: "1.2rem",
    },
    subtitle1: {
      fontSize: "18px",
    }
  },
  palette: {
    primary: {
      main: '#363636',
    }
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
