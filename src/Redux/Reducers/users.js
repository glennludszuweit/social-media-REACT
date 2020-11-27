const defaultState = {
  userData: [],
  searchedUser: [],
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return { ...state, userData: action.userData };

    case 'SEARCH_USER':
      return { ...state, searchedUser: action.searchedUser };

    default:
      return state;
  }
};

export default users;
