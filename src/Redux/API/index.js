import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const api = axios.create({
  adapter: cache.adapter,
});

const URL = 'https://sz.hktr.de/api';

//AUTH
export const login = (userData) => api.post(`${URL}/auth/login`, userData);

export const register = (userData) =>
  api.post(`${URL}/auth/register`, userData);

export const logout = (userRefreshToken) =>
  api.post(`${URL}/auth/logout`, { refreshToken: userRefreshToken });

export const addFriend = (userId) =>
  api.post(`${URL}/friends/approve/`, { id: userId });

export const unFriend = (userId) =>
  api.post(`${URL}/friends/reject/`, { id: userId });

//USERS
export const getUser = (userId) => api.get(`${URL}/user/${userId}`);

export const getUserPosts = (userId) => api.get(`${URL}/user/posts/${userId}`);

export const searchUser = (match, type, field) =>
  api.post(`${URL}/search`, { match, type, field });

export const updateUser = (updatedUserData) =>
  api.patch(`${URL}/user`, updatedUserData);

export const deleteUser = (userId, userToken) =>
  api.delete(`${URL}/user/${userId}`, { token: userToken });

export const getFriendsUser = () => api.get(`${URL}/friends`);

export const pendingFriendsUser = () => api.get(`${URL}/friends/pending`);

//POSTS
export const getPosts = () => api.get(`${URL}/post`);

export const getPost = (postId) => api.get(`${URL}/post/${postId}`);

export const addPost = (postData) => api.post(`${URL}/post`, postData);

export const editPost = (postId, postData) =>
  api.patch(`${URL}/post/${postId}`, postData);

export const deletePost = (postId) => api.delete(`${URL}/post/${postId}`);

//COMMENTS
export const addComment = (postId, commentData) =>
  api.post(`${URL}/post/${postId}`, commentData);

//MESSAGES
