import * as api from '../../API';

export const login = (userData) => async (dispatch) => {
  try {
    const { data } = await api.login(userData);
    dispatch({ type: 'LOGIN', value: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const { data } = await api.register(userData);
    dispatch({ type: 'REGISTER', value: data });
  } catch (error) {
    console.log(error.message);
  }
};
