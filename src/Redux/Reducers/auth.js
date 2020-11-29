const localStorageState = JSON.parse(localStorage.getItem('social-auth'));
let defaultState = { token: false, refreshToken: false, authUserData: {} };
if (localStorageState) defaultState = localStorageState;

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        request: 'login',
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case 'REGISTER':
      return {
        request: 'register',
        status: action.status,
        token: action.token,
        refreshToken: action.refreshToken,
        authUserData: action.authUserData,
      };

    case 'LOGOUT':
      localStorage.removeItem('social-auth');
      return {
        request: 'logout',
        status: true,
        token: false,
        refreshToken: false,
        authUserData: {},
      };

    default:
      return state;
  }
};

export default auth;
