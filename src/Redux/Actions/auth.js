import * as api from '../../API';

export const login = (userData) => async (dispatch) => {
  try {
    const { data, statusText } = await api.login(userData);
    if (statusText === 'OK') {
      dispatch({
        type: 'LOGIN',
        value: data,
        message: 'Logged in successfuly!',
        status: true,
      });
    }
  } catch (error) {
    dispatch({
      type: 'LOGIN',
      message: 'Login failed, please check credentials.',
      status: false,
    });
    console.log('failed');
  }
};

export const register = (userData) => async (dispatch) => {
  try {
    const { data, statusText } = await api.register(userData);
    if (statusText === 'Created') {
      dispatch({
        type: 'REGISTER',
        value: data,
        message: 'Logged in successfuly!',
        status: true,
      });
    }
  } catch (error) {
    dispatch({
      type: 'REGISTER',
      message: 'Registration failed, please required fields.',
      status: false,
    });
    console.log('failed');
  }
};
