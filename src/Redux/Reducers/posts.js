const defaultState = {
  openAddForm: false,
  openEditForm: false,
  postData: [],
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
      return { ...state };

    case 'CLEAR_POST_DATA':
      return defaultState;

    default:
      return state;
  }
};

export default posts;
