import { combineReducers } from 'redux';
import auth from './Reducers/auth';
import users from './Reducers/users';
import posts from './Reducers/posts';

export default combineReducers({
  auth,
  users,
  posts,
});
