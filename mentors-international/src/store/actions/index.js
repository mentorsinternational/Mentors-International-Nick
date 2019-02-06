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

export const CREATE_MENTEE_START = 'CREATE_MENTEE_START';
export const CREATE_MENTEE_SUCCESS = 'CREATE_MENTEE_SUCCESS';
export const CREATE_MENTEE_FAILURE = 'CREATE_MENTEE_FAILURE';

export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const FETCH_MENTEES_START = 'FETCH_MENTEES_START';
export const FETCH_MENTEES_SUCCESS = 'FETCH_MENTEES_SUCCESS';
export const FETCH_MENTEES_FAILURE = 'FETCH_MENTEES_FAILURE';

const baseURL = 'http://localhost:4600';

const setHeaders = _ => {
  return {
    headers: {
      authorization: localStorage.getItem("jwt")
    }
  }
}

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
    .then(res => {
      console.log(res);
      localStorage.setItem('jwt', res.data.token)
    })
    .catch(err => console.log(err));
}

export const fetchMessages = _ => dispatch => {
  dispatch({type: FETCH_MESSAGES_START})
  axios.get(`${baseURL}/messages`, setHeaders())
    .then(res => dispatch({type: FETCH_MESSAGES_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}

export const fetchMentees = _ => dispatch => {
  dispatch({type: FETCH_MENTEES_START})
  axios.get(`${baseURL}/mentees`, setHeaders())
    .then(res => dispatch({type: FETCH_MENTEES_SUCCESS, payload: res.data}))
    .catch(err => console.log(err));
}

export const createMessage = message => dispatch => {
  dispatch({type: CREATE_MESSAGE_START})

  axios.post(`${baseURL}/messages`, message, setHeaders())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export const createMentee = mentee => dispatch => {
  dispatch({type: CREATE_MENTEE_START});
  axios.post(`${baseURL}/mentees`, mentee, setHeaders())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}