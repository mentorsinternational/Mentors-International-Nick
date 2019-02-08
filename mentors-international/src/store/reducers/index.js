import moment from 'moment';

import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_MESSAGE,
  FETCH_MESSAGES_START,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILURE,
  FETCH_MENTEES_START,
  FETCH_MENTEES_SUCCESS,
  FETCH_MENTEES_FAILURE,
  DELETE_MENTEE_START,
  DELETE_MENTEE_SUCCESS,
  DELETE_MENTEE_FAILURE,
  DELETE_MESSAGE_START,
  DELETE_MESSAGE_SUCCESS,
  DELETE_MESSAGE_FAILURE,
  FETCH_MENTEE_SUCCESS
} from '../actions'

const initialState = {
  messages: [],
  schedules: [],
  mentees: [],
  thisMentee: {},
  isSigningUp: false,
  isFetchingMessages: false,
  isFetchingMentees: false,
  isDeletingMentee: false,
  isDeletingMessage: false,
  isLoggingIn: false,

  error: ''
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case SIGNUP_START:
      return {
        ...state,
        isSigningUp: true,
        error: ''
      }

    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false
      }

    case SIGNUP_FAILURE:
      return {
        ...state,
        isSigningUp: false,
        error: 'Error Signing Up'
      }

    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
      }

    case LOGIN_FAILURE:
      return {
        ...state
      }

    case FETCH_MESSAGES_START: 
      return {
        ...state,
        isFetchingMessages: true,
        error: ''
      }

    case FETCH_MESSAGES_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        messages: action.payload.map(message => {
          return {...message, schedule: JSON.parse(message.schedule).map(date => {
            if(date.length < 2) {
              const items = date.map(item => item.split(', '));
              const items2 = items[0][0] = items[0][0].split(' ').filter(item => item !== '*')
              const newDate = new Date(2019, 4, Number(items2[2]), Number(items2[0]), Number(items2[1]))


              //return items2;
              return [`${moment(newDate).format('dddd')}s at ${moment(newDate).format('hh:mm A')}`, 'true', false, moment(newDate).format('LLL')]
            }
            return [moment(date[0]).format('LLL'), date[1], false, moment(date[0]).format('LLL')];
        })}
        }),
        isFetchingMessages: false
      }

    case FETCH_MESSAGES_FAILURE:
      return {
        ...state
      }

    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }

    case FETCH_MENTEES_START:
      return {
        ...state,
        isFetchingMentees: true,
        error: ''
      }

    case FETCH_MENTEES_SUCCESS:
      return {
        ...state,
        mentees: action.payload,
        isFetchingMentees: false
      }

    case FETCH_MENTEES_FAILURE:
      return {
        ...state
      }

    case FETCH_MENTEE_SUCCESS:
      return {
        ...state,
        thisMentee: action.payload[0]
      }

    case DELETE_MENTEE_START:
      return {
        ...state,
        isDeletingMentee: true
      }

    case DELETE_MENTEE_SUCCESS:
      return {
        ...state,
        isDeletingMentee: false,
        mentees: state.mentees.filter(mentee => mentee.id !== action.payload)
      }

    case DELETE_MENTEE_FAILURE:
      return {
        ...state,
        isDeletingMentee: false
      }

    case DELETE_MESSAGE_START:
      return {
        ...state,
        isDeletingMessage: true,
        error: ''
      }

    case DELETE_MESSAGE_SUCCESS:
      return {
        ...state,
        isDeletingMessage: false,
        messages: state.messages.filter(message => message.id !== action.payload)
      }

    case DELETE_MESSAGE_FAILURE:
      return {
        ...state,
        isDeletingMessage: false
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducer;