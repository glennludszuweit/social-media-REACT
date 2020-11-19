const posts = (state = {}, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        postData: action.postData,
      };

    case 'ADD_POST':
      return {
        openForm: true,
      };

    case 'EDIT_POST':
      return {};

    case 'DELETE_POST':
      return {};

    default:
      return state;
  }
};

export default posts;
