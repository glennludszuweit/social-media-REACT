import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './Redux';
import Thunk from 'redux-thunk';
import Axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
  Reducers,
  composeEnhancers(applyMiddleware(Thunk))
);
Store.subscribe(() => {
  localStorage.setItem('social-auth', JSON.stringify(Store.getState().auth));
  localStorage.setItem('social-posts', JSON.stringify(Store.getState().posts));
});

(function () {
  const token = Store.getState().auth.token;
  if (token) {
    Axios.defaults.headers.common['Authorization'] = token;
  } else {
    delete Axios.defaults.headers.common['Authorization'];
  }
})();
