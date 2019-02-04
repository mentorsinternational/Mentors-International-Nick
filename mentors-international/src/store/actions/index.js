import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const signUp = newUser => dispatch => {
  dispatch({type: SIGNUP_START});

  axios.post('http://localhost:4600/signup', newUser)
    .then(res => dispatch({type: SIGNUP_SUCCESS}))
    .catch(err => dispatch({type: SIGNUP_FAILURE}));
}

export const logIn = user => dispatch => {
  console.log(user)
  dispatch({type: LOGIN_START});
  axios.post('http://localhost:4600/login', user)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}