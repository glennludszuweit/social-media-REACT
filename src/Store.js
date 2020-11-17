import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './Redux';
import Thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducers, composeEnhancers(applyMiddleware(Thunk)));

export default Store;
