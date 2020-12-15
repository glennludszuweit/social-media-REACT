import * as api from '../API';
import { getPosts } from './posts';
import { getUserPosts } from './users';

export const editForm = (status) => (dispatch) => {
  dispatch({
    type: 'EDIT_COMMENT_FORM',
    openEditForm: status,
  });
};

export const addComment = (postId, commentData, userId) => async (dispatch) => {
  try {
    await api.addComment(postId, commentData);
    await getPosts()(dispatch);
    await getUserPosts(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};
