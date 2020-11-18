const defaultState = [
  {
    userData: {},
    message: '',
    status: null,
  },
];

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return [
        {
          userData: action.value,
          status: action.status,
        },
      ];

    case 'REGISTER':
      return [
        {
          userData: action.value,
          status: action.status,
        },
      ];

    default:
      return state;
  }
};

export default auth;
