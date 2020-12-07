import axios from "axios";

const URL = "https://sz.hktr.de/api";

//AUTH
export const login = (userData) => axios.post(`${URL}/auth/login`, userData);
export const register = (userData) =>
  axios.post(`${URL}/auth/register`, userData);
export const logout = (userRefreshToken) =>
  axios.post(`${URL}/auth/logout`, { refreshToken: userRefreshToken });

//USERS
export const getUser = (userId) => axios.get(`${URL}/user/${userId}`);
export const getUserPosts = (userId) =>
  axios.get(`${URL}/user/posts/${userId}`);
export const searchUser = (match, type, field) =>
  axios.post(`${URL}/search`, { match, type, field });
export const updateUser = (updatedUserData) =>
  axios.patch(`${URL}/user`, updatedUserData);
export const deleteUser = (userId, userToken) =>
  axios.delete(`${URL}/user/${userId}`, { token: userToken });

//FRIENDS
export const getFriends = () => axios.get(`${URL}/friends`);
export const pendingFriends = () => axios.get(`${URL}/friends/pending`);
export const addFriend = (userId) =>
  axios.post(`${URL}/friends/approve/`, userId);
export const unFriend = (userId) =>
  axios.post(`${URL}/friends/reject/`, userId);

//POSTS
export const getPosts = () => axios.get(`${URL}/post`);
export const addPost = (postData) => axios.post(`${URL}/post`, postData);
export const editPost = (postId, postData) =>
  axios.patch(`${URL}/post/${postId}`, postData);
export const deletePost = (postId) => axios.delete(`${URL}/post/${postId}`);

//COMMENTS
export const addComment = (postId, commentData) =>
  axios.post(`${URL}/post/${postId}`, commentData);

//MESSAGES
