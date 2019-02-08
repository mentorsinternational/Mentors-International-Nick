import axios from 'axios';

import history from '../../history';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const UPDATE_ACCOUNT_START = 'UPDATE_ACCOUNT_START';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAILURE = 'UPDATE_ACCOUNT_FAILURE';

export const CREATE_MESSAGE_START = 'CREATE_MESSAGE_START';
export const CREATE_MESSAGE_SUCCESS = 'CREATE_MESSAGE_SUCCESS';
export const CREATE_MESSAGE_FAILURE = 'CREATE_MESSAGE_FAILURE';

export const CREATE_MENTEE_START = 'CREATE_MENTEE_START';
export const CREATE_MENTEE_SUCCESS = 'CREATE_MENTEE_SUCCESS';
export const CREATE_MENTEE_FAILURE = 'CREATE_MENTEE_FAILURE';

export const UPDATE_MENTEE_START = 'UPDATE_MENTEE_START';
export const UPDATE_MENTEE_SUCCESS = 'UPDATE_MENTEE_SUCCESS';
export const UPDATE_MENTEE_FAILURE = 'UPDATE_MENTEE_FAILURE';

export const DELETE_MENTEE_START = 'DELETE_MENTEE_START';
export const DELETE_MENTEE_SUCCESS = 'DELETE_MENTEE_SUCCESS';
export const DELETE_MENTEE_FAILURE = 'DELETE_MENTEE_FAILURE';

export const FETCH_MESSAGES_START = 'FETCH_MESSAGES_START';
export const FETCH_MESSAGES_SUCCESS = 'FETCH_MESSAGES_SUCCESS';
export const FETCH_MESSAGES_FAILURE = 'FETCH_MESSAGES_FAILURE';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const UPDATE_MESSAGE_START = 'UPDATE_MESSAGE_START';
export const UPDATE_MESSAGE_SUCCESS = 'UPDATE_MESSAGE_SUCCESS';
export const UPDATE_MESSAGE_FAILURE = 'UPDATE_MESSAGE_FAILURE';

export const DELETE_MESSAGE_START = 'DELETE_MESSAGE_START';
export const DELETE_MESSAGE_SUCCESS = 'DELETE_MESSAGE_SUCCESS';
export const DELETE_MESSAGE_FAILURE = 'DELETE_MESSAGE_FAILURE';

export const FETCH_MENTEES_START = 'FETCH_MENTEES_START';
export const FETCH_MENTEES_SUCCESS = 'FETCH_MENTEES_SUCCESS';
export const FETCH_MENTEES_FAILURE = 'FETCH_MENTEES_FAILURE';

export const FETCH_MENTEE_START = 'FETCH_MENTEE_START';
export const FETCH_MENTEE_SUCCESS = 'FETCH_MENTEE_SUCCESS';
export const FETCH_MENTEE_FAILURE = 'FETCH_MENTEE_FAILURE';

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
      console.log(res.data.message.replace( /^\D+/g, ''));
      dispatch({type: LOGIN_SUCCESS, payload: res.data});
      localStorage.setItem('jwt', res.data.token);
      localStorage.setItem('userID', res.data.message.replace( /^\D+/g, ''))
      history.push('/');
    })
    .catch(err => console.log(err));
}

export const updateAccount = (id,userInfo) => dispatch => {
  console.log(id, userInfo)
  dispatch({type: UPDATE_ACCOUNT_START})
  axios.put(`${baseURL}/users/${id}`, userInfo, setHeaders())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

export const fetchMessages = _ => dispatch => {
  dispatch({type: FETCH_MESSAGES_START})
  axios.get(`${baseURL}/messages`, setHeaders())
    .then(res => {
      console.log(res);
      dispatch({type: FETCH_MESSAGES_SUCCESS, payload: res.data})
  })
    .catch(err => {
      localStorage.removeItem('jwt');
      console.log(err)
    });
}

export const fetchMentee = id => dispatch => {
  dispatch({type: FETCH_MENTEE_START});
  axios.get(`${baseURL}/mentees/${id}`, setHeaders())
    .then(res => dispatch({type: FETCH_MENTEE_SUCCESS, payload: res.data}))
    .catch(err => console.log(err))
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

export const updateMentee = (id,info) => dispatch => {
  dispatch({type: UPDATE_MENTEE_START});
  axios.put(`${baseURL}/mentees/${id}`, info, setHeaders())
    .then(res => {
      dispatch({type: UPDATE_MENTEE_SUCCESS, payload: res.data});
      history.push('/');
    })
    .catch(err => console.log(err));
}

export const deleteMentee = id => dispatch => {
  dispatch({type: DELETE_MENTEE_START});
  axios.delete(`${baseURL}/mentees/${id}`, setHeaders())
    .then(res => dispatch({type: DELETE_MENTEE_SUCCESS, payload: id}))
    .catch(err => console.log(err));
}

export const updateMessage = (id,message) => dispatch => {
  console.log(id)
  dispatch({type: UPDATE_MESSAGE_START});
  axios.put(`${baseURL}/messages/${id}`, message, setHeaders())
    .then(res => {
      history.push('/')
      console.log(res)
    })
    .catch(err => console.log(err));
}

export const deleteMessage = id => dispatch => {
  dispatch({type: DELETE_MESSAGE_START});
  axios.delete(`${baseURL}/messages/${id}`, setHeaders())
    .then(res => dispatch({type: DELETE_MESSAGE_SUCCESS, payload: id}))
    .catch(err => console.log(err))
}