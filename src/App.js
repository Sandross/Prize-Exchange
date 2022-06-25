import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/index.routes'
import { Provider } from 'react-redux';
import store from './store'
import { GlobalStyle } from './styles/global'

export default function App() {
    return (
      <Provider store={store}>
        <GlobalStyle/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      </Provider>
    );
  }