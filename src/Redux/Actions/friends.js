import * as api from '../API';

export const addFriend = (userId) => async (dispatch) => {
  try {
    const res = await api.addFriend(userId);
    dispatch({
      type: 'ADD_FRIEND',
      friendData: res.data
    });
  } catch (error) {
    console.log(error);
  }
};