import Axios from "axios";

const defaultState = {
  userData: [],
  userPosts: [],
  userFriends: [],
  searchedUser: [],
};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, userData: action.userData };

    case "GET_USER_POSTS":
      return { ...state, userPosts: action.userPosts };

    case "SEARCH_USER":
      return { ...state, searchedUser: action.searchedUser };

    case "UPDATE_USER":
      return { ...state, userData: action.userData };

    case "DELETE_USER":
      delete Axios.defaults.headers.common["Authorization"];
      localStorage.removeItem("social-auth");
      return defaultState;

    case "ADD_FRIEND_USER":
      return { ...state };

    case "UN_FRIEND_USER":
      return { ...state };

    case "GET_USER_FRIENDS":
      return { ...state, userFriends: action.userFriends };

    default:
      return state;
  }
};

export default users;
