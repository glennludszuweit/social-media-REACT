import * as api from "../API";
import { getUserPosts } from "./users";

export const addForm = (status) => (dispatch) => {
  dispatch({
    type: "ADD_POST_FORM",
    openAddForm: status,
  });
};

export const editForm = (status) => (dispatch) => {
  dispatch({
    type: "EDIT_POST_FORM",
    openEditForm: status,
  });
};

export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.getPosts();
    dispatch({
      type: "GET_POSTS",
      postData: await res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (postData, userId) => async (dispatch) => {
  try {
    const res = await api.addPost(postData);
    dispatch({
      type: "ADD_POST",
      postData: res.data,
    });
    await getPosts()(dispatch);
    await getUserPosts(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (postId, postData, userId) => async (dispatch) => {
  try {
    const res = await api.editPost(postId, postData);
    dispatch({
      type: "EDIT_POST",
      postData: res.data,
    });
    await getPosts()(dispatch);
    await getUserPosts(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId, userId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({
      type: "DELETE_POST",
    });
    await getPosts()(dispatch);
    await getUserPosts(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const clearPostData = () => (dispatch) => {
  dispatch({
    type: "CLEAR_POST_DATA",
  });
};
