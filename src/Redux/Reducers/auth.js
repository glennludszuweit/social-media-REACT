import Axios from '../API/Axios';

const localStorageState = JSON.parse(localStorage.getItem('social-auth'));
let defaultState = { token: false, refreshToken: false, authUserData: {} };
if (localStorageState) {
  defaultState = localStorageState;
  if (defaultState.token) {
    Axios.tokens = {
      access: { token: defaultState.token },
      refresh: { token: defaultState.refreshToken },
    };
  }
}

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      Axios.tokens = {
        access: { token: action.token },
        refresh: { token: action.refreshToken },
      };
      return {
        request: 'login',
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case 'REGISTER':
      Axios.tokens = {
        access: { token: action.token },
        refresh: { token: action.refreshToken },
      };
      return {
        request: 'register',
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case 'LOGOUT':
      Axios.tokens = false;
      localStorage.removeItem('social-auth');
      return {
        request: 'logout',
        status: true,
        token: false,
        refreshToken: false,
        authUserData: {},
      };

    case 'ADD_FRIEND':
      return { ...state, authUserData: action.authUserData };

    case 'UN_FRIEND':
      return { ...state, authUserData: action.authUserData };

    default:
      return state;
  }
};

export default auth;
