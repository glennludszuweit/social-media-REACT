import * as api from '../API';

export const addForm = (status) => (dispatch) => {
  dispatch({
    type: 'ADD_FORM',
    openAddForm: status,
  });
};

export const editForm = (status) => (dispatch) => {
  dispatch({
    type: 'EDIT_FORM',
    openEditForm: status,
  });
};

export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.getPosts();
    dispatch({
      type: 'GET_POSTS',
      postData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (postData) => async (dispatch) => {
  try {
    const res = await api.addPost(postData);
    dispatch({
      type: 'ADD_POSTS',
      postData: res.data,
    });
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (postId, postData) => async (dispatch) => {
  try {
    await api.editPost(postId, postData);
    dispatch({
      type: 'EDIT_POSTS',
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({
      type: 'DELETE_POSTS',
    });
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};
