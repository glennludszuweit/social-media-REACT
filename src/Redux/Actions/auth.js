import * as api from "../API";

export const login = (userData) => async (dispatch) => {
  try {
    const res = await api.login(userData);
    dispatch({
      type: "LOGIN",
      status: true,
      message: "Success",
      authUserData: res.data.user,
      token: res.data.tokens.access.token,
      refreshToken: res.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN",
      status: false,
      authUserData: false,
      token: false,
      refreshToken: false,
    });
    console.log(error);
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const res = await api.register(userData);
    dispatch({
      type: "REGISTER",
      status: true,
      authUserData: res.data.user,
      token: res.data.tokens.access.token,
      refreshToken: res.data.tokens.refresh.token,
    });
  } catch (error) {
    dispatch({
      type: "REGISTER",
      status: false,
      authUserData: false,
      token: false,
      refreshToken: false,
    });
    console.log(error.message);
  }
};

export const logout = (userRefreshToken) => async (dispatch) => {
  await api.logout(userRefreshToken);
  dispatch({ type: "LOGOUT" });
};
