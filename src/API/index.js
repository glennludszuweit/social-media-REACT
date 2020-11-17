import axios from 'axios';

const URL = 'https://sz.hktr.de/api';

//AUTH
export const login = (userData) => axios.post(`${URL}/auth/login`, userData);
export const register = (userData) =>
  axios.post(`${URL}/auth/register`, userData);
