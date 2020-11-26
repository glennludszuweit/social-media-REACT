const defaultState = {
  userData: [],
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case 'SEARCH_USER':
      return {
        userData: action.userData,
      };

    default:
      return state;
  }
};

export default users;
