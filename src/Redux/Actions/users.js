import * as api from '../API';

export const getUser = (userId) => async (dispatch) => {
  try {
    const res = await api.getUser(userId);
    dispatch({
      type: 'GET_USER',
      userData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const res = await api.getUserPosts(userId);
    dispatch({
      type: 'GET_USER_POSTS',
      userPosts: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchUser = (match, type, field) => async (dispatch) => {
  try {
    const res = await api.searchUser(match, type, field);
    dispatch({
      type: 'SEARCH_USER',
      searchedUser: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
