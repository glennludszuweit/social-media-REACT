const auth = (auth = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return [...auth, action.value];

    case 'REGISTER':
      return [...auth, action.value];

    default:
      return auth;
  }
};

export default auth;
