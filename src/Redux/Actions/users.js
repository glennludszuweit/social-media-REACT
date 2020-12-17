import * as api from '../API';

export const getUser = (userId) => async (dispatch) => {
  try {
    const res = await api.getUser(userId);
    dispatch({
      type: 'GET_USER',
      userData: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchUser = (match, type, field) => async (dispatch) => {
  try {
    const res = await api.searchUser(match, type, field);
    dispatch({
      type: 'SEARCH_USER',
      searchedUser: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (userId, updatedUserData) => async (dispatch) => {
  try {
    const res = await api.updateUser(updatedUserData);
    console.log(res);
    dispatch({
      type: 'UPDATE_USER',
      userData: res.data,
    });
    await getUser(userId)(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (userId, userToken) => async (dispatch) => {
  try {
    await api.deleteUser(userId, userToken);
    dispatch({
      type: 'DELETE_USER',
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserPosts = (userId) => async (dispatch) => {
  try {
    const res = await api.getUserPosts(userId);
    const authorIds = res.data.map((x) => x.author);
    const commentIds = res.data.map((x) => x.comments);
    const author = await Promise.all(
      authorIds.map(async (x) => await api.getUser(x))
    );
    const comments = commentIds.filter((commentId) => commentId.length);
    const postData = await Promise.all(
      res.data.map(async (post) => {
        const postAuthor = author.find(
          (authorId) => authorId.data.id === post.author
        );
        const postComments = await Promise.all(
          comments.flat().map(async (commentId) => {
            const comment = await api.getPost(commentId);
            comment.data.author = (await api.getUser(comment.data.author)).data;
            return comment.data;
          })
        );
        console.log(
          postComments
            .map((x) => x.parent)
            .filter((z) => z !== null)
            .filter((y) => y === post.id)
        );
        return {
          ...post,
          author: postAuthor.data,
          comments: postComments.filter(
            (z) =>
              (z.parent !== null || z.parent !== undefined) &&
              z.parent === post.id
          ),
        };
      })
    );
    dispatch({
      type: 'GET_USER_POSTS',
      userPosts: postData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserFriends = (friendsId) => async (dispatch) => {
  try {
    const friends = await Promise.all(
      friendsId ? friendsId.map((id) => api.getUser(id)) : []
    );
    dispatch({
      type: 'GET_USER_FRIENDS',
      userFriends: friends.map((friend) => friend.data),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserFriendRequests = (friendRequestsId) => async (dispatch) => {
  try {
    const friendRequests = await Promise.all(
      friendRequestsId ? friendRequestsId.map((id) => api.getUser(id)) : []
    );
    dispatch({
      type: 'GET_USER_FRIEND_REQUESTS',
      userFriendRequests: friendRequests.map((request) => request.data),
    });
  } catch (error) {
    console.log(error);
  }
};
