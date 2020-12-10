import Axios from "axios";

const localStorageState = JSON.parse(localStorage.getItem("social-auth"));
let defaultState = { token: false, refreshToken: false, authUserData: {} };
if (localStorageState) {
  defaultState = localStorageState;
  if (defaultState.token) {
    Axios.defaults.headers.common["Authorization"] = defaultState.token;
  }
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      Axios.defaults.headers.common["Authorization"] = action.token;
      return {
        request: "login",
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case "REGISTER":
      Axios.defaults.headers.common["Authorization"] = action.token;
      return {
        request: "register",
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case "LOGOUT":
      delete Axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("social-auth");
      return {
        request: "logout",
        status: true,
        token: false,
        refreshToken: false,
        authUserData: {},
      };

    case "ADD_FRIEND":
      return { ...state, authUserData: action.authUserData };

    case "UN_FRIEND":
      return { ...state, authUserData: action.authUserData };

    default:
      return state;
  }
};

export default auth;
