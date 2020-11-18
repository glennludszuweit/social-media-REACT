import * as api from '../../API';

export const login = (userData) => async (dispatch) => {
  try {
    const res = await api.login(userData);
    dispatch({
      type: 'LOGIN',
      status: true,
      message: 'Success',
      tokens: res.data.tokens.access.token,
      refreshTokens: res.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: 'LOGIN',
      status: false,
      tokens: false,
      refreshTokens: false,
    });
    console.log(error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await api.register(userData);
    dispatch({
      type: 'REGISTER',
      status: true,
      tokens: res.data.tokens.access.token,
      refreshTokens: res.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER',
      status: false,
      tokens: false,
      refreshTokens: false,
    });
    console.log(error.message);
  }
};

export const logout = (userData) => async (dispatch) => {
  await api.logout(userData);
  dispatch({ type: 'LOGOUT' });
};
