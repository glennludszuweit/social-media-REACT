import * as api from '../../API';

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

export const addPost = (postData, header) => async (dispatch) => {
  try {
    const res = await api.addPost(postData, header);
    dispatch({
      type: 'ADD_POSTS',
      postData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addForm = (status) => (dispatch) => {
  dispatch({
    type: 'ADD_FORM',
    openForm: status,
  });
};

export const editPost = (postData) => async (dispatch) => {
  try {
    await api.editPost(postData);
    dispatch({
      type: 'EDIT_POSTS',
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postData) => async (dispatch) => {
  try {
    await api.deletePost(postData);
    dispatch({
      type: 'DELETE_POSTS',
    });
  } catch (error) {
    console.log(error);
  }
};
