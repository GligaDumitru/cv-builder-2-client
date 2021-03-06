
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/store';
import "./styles/_app.scss";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <App />
      </Router>
  </ThemeProvider>
  </Provider>,
  document.querySelector('#root'),
);