const defaultState = {
  friendData: [],
};

const friends = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friendData: action.friendData };

    default:
      return state;
  }
};

export default friends;