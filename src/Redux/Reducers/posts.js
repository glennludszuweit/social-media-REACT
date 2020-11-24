const defaultState = {
  postData: [
    {
      author: '',
      comments: [],
      id: '',
      message: 'You have no posts yet.',
      parent: {},
      parentModel: '',
      reactions: [],
    },
  ],
};

const posts = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_POST_FORM':
      return {
        ...state,
        postData: state.postData,
        openAddForm: action.openAddForm,
      };

    case 'EDIT_POST_FORM':
      return {
        ...state,
        postData: state.postData,
        openEditForm: action.openEditForm,
      };

    case 'GET_POSTS':
      return { ...state, postData: action.postData };

    case 'ADD_POST':
      return { ...state, postData: [...state.postData, action.postData] };

    case 'EDIT_POST':
      return { ...state, postData: [...state.postData, action.postData] };

    case 'DELETE_POST':
      return { postData: action.postData };

    default:
      return state;
  }
};

export default posts;
