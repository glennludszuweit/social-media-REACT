const defaultState = {
  author: '',
  comments: [],
  id: '',
  message: 'You have no posts yet.',
  parent: {},
  parentModel: '',
  reactions: [],
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_FORM':
      return {
        postData: state.postData,
        openAddForm: action.openAddForm,
      };

    case 'EDIT_FORM':
      return {
        postData: state.postData,
        openEditForm: action.openEditForm,
      };

    case 'GET_POSTS':
      return { postData: action.postData };

    case 'ADD_POST':
      return { ...state, postData: action.postData };

    case 'EDIT_POST':
      return {};

    case 'DELETE_POST':
      return { postData: action.postData };

    default:
      return state;
  }
};

export default posts;
