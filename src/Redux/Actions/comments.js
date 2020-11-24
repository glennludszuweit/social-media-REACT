import * as api from '../API';
import { getPosts } from './posts';

export const addComment = (postId, commentData) => async (dispatch) => {
  try {
    await api.addComment(postId, commentData);
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};
