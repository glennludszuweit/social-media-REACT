import * as api from '../API';

export const searchUser = (match, type, field) => async (dispatch) => {
  try {
    const res = await api.searchUser(match, type, field);
    console.log(res.data);
    dispatch({
      type: 'SEARCH_USER',
      userData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
