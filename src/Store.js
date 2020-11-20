import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './Redux';
import Thunk from 'redux-thunk';
import Axios from 'axios';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducers, composeEnhancers(applyMiddleware(Thunk)));
Store.subscribe(() => {
  localStorage.setItem('social-auth', JSON.stringify(Store.getState().auth));
});

(function () {
  const token = Store.getState().auth.tokens;
  if (token) {
    Axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Axios.defaults.headers.common['Authorization'] = null;
    delete Axios.defaults.headers.common['Authorization'];
  }
})();

export default Store;
