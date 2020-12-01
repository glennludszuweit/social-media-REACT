import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from './Store';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename='/glued/'>
    <Provider store={Store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
