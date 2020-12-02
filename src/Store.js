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
});
