const defaultState = {
  email: '',
  password: '',
  name: '',
  message: '',
  request: '',
  status: null,
  tokens: false,
  refreshTokens: false,
};

const localStorageState = JSON.parse(localStorage.getItem('social-auth'));

const auth = (state = localStorageState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        request: 'login',
        status: action.status,
        tokens: action.tokens,
        refreshTokens: action.refreshTokens,
      };

    case 'REGISTER':
      return {
        request: 'register',
        status: action.status,
        tokens: action.tokens,
        refreshTokens: action.refreshTokens,
      };

    case 'LOGOUT':
      localStorage.removeItem('social-auth');
      return {
        request: 'logout',
        status: true,
      };

    default:
      return state;
  }
};

export default auth;
