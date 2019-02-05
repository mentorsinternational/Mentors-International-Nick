import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

const baseURL = 'http://localhost:4600';

export const signUp = newUser => dispatch => {
  dispatch({type: SIGNUP_START});

  axios.post(`${baseURL}/signup`, newUser)
    .then(res => dispatch({type: SIGNUP_SUCCESS}))
    .catch(err => dispatch({type: SIGNUP_FAILURE}));
}

export const logIn = user => dispatch => {
  console.log(user)
  dispatch({type: LOGIN_START});
  axios.post(`${baseURL}/login`, user)
    .then(res => localStorage.setItem('jwt', res.data.token))
    .catch(err => console.log(err));
}

export const createMessage = message => dispatch => {
  dispatch({type: CREATE_MESSAGE_START})

  axios.post(`${baseURL}/messages`, message)
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// export const createMessage = message => {
//   return{
//     type: CREATE_MESSAGE,
//     payload: message
//   }
// }