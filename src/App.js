/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './routes/index.routes';
import store from './store';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}
