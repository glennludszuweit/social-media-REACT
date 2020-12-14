import * as api from '../API';
import { getPosts } from './posts';

export const editForm = (status) => (dispatch) => {
  dispatch({
    type: 'EDIT_COMMENT_FORM',
    openEditForm: status,
  });
};

export const addComment = (postId, commentData) => async (dispatch) => {
  try {
    await api.addComment(postId, commentData);
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};
