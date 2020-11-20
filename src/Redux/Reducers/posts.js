const defaultState = {
  author: '',
  comments: [],
  id: '',
  message: '',
  parent: {},
  parentModel: '',
  reactions: [],
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return {
        postData: state.postData,
        openForm: action.openForm,
      };

    case 'GET_POSTS':
      return {
        postData: action.postData,
      };

    case 'ADD_POST':
      return { ...state, postData: action.postData };

    case 'EDIT_POST':
      return {};

    case 'DELETE_POST':
      return {};

    default:
      return state;
  }
};

export default posts;
