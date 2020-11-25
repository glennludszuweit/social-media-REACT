const defaultState = {
  openEditForm: false,
};

const comments = (state = defaultState, action) => {
  switch (action.type) {
    case 'EDIT_COMMENT_FORM':
      return {
        openEditForm: action.openEditForm,
      };

    default:
      return state;
  }
};

export default comments;
