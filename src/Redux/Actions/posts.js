import * as api from '../API';

export const addForm = (status) => (dispatch) => {
  dispatch({
    type: 'ADD_POST_FORM',
    openAddForm: status,
  });
};

export const editForm = (status) => (dispatch) => {
  dispatch({
    type: 'EDIT_POST_FORM',
    openEditForm: status,
  });
};

export const getPosts = () => async (dispatch) => {
  try {
    const res = await api.getPosts();
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
        return {
          ...post,
          author: postAuthor.data,
          comments: postComments.filter((x) => x.parent === post.id),
        };
      })
    );

    dispatch({
      type: 'GET_POSTS',
      postData: postData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addPost = (postData, userId) => async (dispatch) => {
  try {
    const res = api.addPost(postData);
    dispatch({
      type: 'ADD_POST',
      postData: res.data,
    });
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const editPost = (postId, postData, userId) => async (dispatch) => {
  try {
    const res = api.editPost(postId, postData);
    dispatch({
      type: 'EDIT_POST',
      postData: res.data,
    });
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (postId, userId) => async (dispatch) => {
  try {
    await api.deletePost(postId);
    dispatch({
      type: 'DELETE_POST',
    });
    await getPosts()(dispatch);
  } catch (error) {
    console.log(error);
  }
};

export const clearPostData = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_POST_DATA',
  });
};
