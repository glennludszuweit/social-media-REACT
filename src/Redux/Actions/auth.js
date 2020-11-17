import * as api from '../../API';

export const login = (userData) => async (dispatch) => {
  try {
    const res = await api.login(userData);
    if (res.statusText === 'OK') {
      dispatch({
        type: 'LOGIN',
        status: true,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN',
      status: false,
    });
    console.log(error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await api.register(userData);
    if (res.statusText === 'Created') {
      dispatch({
        type: 'REGISTER',
        status: true,
      });
    }
  } catch (error) {
    dispatch({
      type: 'REGISTER',
      status: false,
    });
    console.log(error.message);
  }
};
