import { combineReducers } from 'redux';
import auth from './Reducers/auth';
import posts from './Reducers/posts';

export default combineReducers({
  auth,
  posts,
});
