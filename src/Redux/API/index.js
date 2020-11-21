import axios from 'axios';

const URL = 'https://sz.hktr.de/api';

//AUTH
export const login = (userData) => axios.post(`${URL}/auth/login`, userData);
export const register = (userData) =>
  axios.post(`${URL}/auth/register`, userData);
export const logout = (userData) =>
  axios.post(`${URL}/auth/logout`, { refreshToken: userData });

//POSTS
export const getPosts = () => axios.get(`${URL}/post`);
export const addPost = (postData) => axios.post(`${URL}/post`, postData);
export const editPost = (postData) => axios.post(`${URL}/post/edit`, postData);
export const deletePost = (postData) =>
  axios.post(`${URL}/post/delete`, postData);

//USERS
