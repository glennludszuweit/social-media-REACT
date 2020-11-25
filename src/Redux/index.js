import { combineReducers } from 'redux';
import auth from './Reducers/auth';
import users from './Reducers/users';
import posts from './Reducers/posts';
import comments from './Reducers/comments';

export default combineReducers({
  auth,
  users,
  posts,
  comments,
});
