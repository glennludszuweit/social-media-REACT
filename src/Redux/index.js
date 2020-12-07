import { combineReducers } from 'redux';
import auth from './Reducers/auth';
import users from './Reducers/users';
import posts from './Reducers/posts';
import comments from './Reducers/comments';
import friends from './Reducers/friends';

export default combineReducers({
  auth,
  users,
  posts,
  comments,
  friends,
});
