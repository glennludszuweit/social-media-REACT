import Axios from './Axios';

const URL = 'https://sz.hktr.de/api';

//AUTH
export const login = (userData) => Axios.post(`${URL}/auth/login`, userData);

export const register = (userData) =>
  Axios.post(`${URL}/auth/register`, userData);

export const logout = (userRefreshToken) =>
  Axios.post(`${URL}/auth/logout`, { refreshToken: userRefreshToken });

export const addFriend = (userId) =>
  Axios.post(`${URL}/friends/approve/`, { id: userId });

export const unFriend = (userId) =>
  Axios.post(`${URL}/friends/reject/`, { id: userId });

//USERS
export const getUser = (userId) => Axios.get(`${URL}/user/${userId}`);

export const getUserPosts = (userId) =>
  Axios.get(`${URL}/user/posts/${userId}`);

export const searchUser = (match, type, field) =>
  Axios.post(`${URL}/search`, { match, type, field });

export const updateUser = (updatedUserData) =>
  Axios.patch(`${URL}/user`, updatedUserData);

export const deleteUser = (userId, userToken) =>
  Axios.delete(`${URL}/user/${userId}`, { token: userToken });

export const getFriendsUser = () => Axios.get(`${URL}/friends`);

export const pendingFriendsUser = () => Axios.get(`${URL}/friends/pending`);

//POSTS
export const getPosts = () => Axios.get(`${URL}/post`);

export const getPost = (postId) => Axios.get(`${URL}/post/${postId}`);

export const addPost = (postData) => Axios.post(`${URL}/post`, postData);

export const editPost = (postId, postData) =>
  Axios.patch(`${URL}/post/${postId}`, postData);

export const deletePost = (postId) => Axios.delete(`${URL}/post/${postId}`);

//COMMENTS
export const addComment = (postId, commentData) =>
  Axios.post(`${URL}/post/${postId}`, commentData);

//MESSAGES
