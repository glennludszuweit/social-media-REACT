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

export const addFriend = (userId, authUserId) => async (dispatch) => {
  try {
    const res = await api.addFriend(userId);
    console.log(res);
    dispatch({
      type: "ADD_FRIEND",
      authUserData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unFriend = (userId) => async (dispatch) => {
  try {
    const res = await api.unFriend(userId);
    dispatch({
      type: "UN_FRIEND",
      authUserData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
