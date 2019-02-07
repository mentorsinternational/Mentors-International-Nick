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
  DELETE_MESSAGE_FAILURE
} from '../actions'

const initialState = {
  messages: [],
  schedules: [],
  mentees: [],
  isSigningUp: false,
  isFetchingMessages: false,
  isFetchingMentees: false,
  isDeletingMentee: false,
  isDeletingMessage: false,
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

    case FETCH_MESSAGES_START: 
      return {
        ...state,
        isFetchingMessages: true,
        error: ''
      }

    case FETCH_MESSAGES_SUCCESS: 
      return {
        ...state,
        messages: action.payload,
        isFetchingMessages: false
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

    case DELETE_MENTEE_START:
      return {
        ...state,
        isDeletingMentee: true
      }

    case DELETE_MENTEE_SUCCESS:
      return{
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
        isDeletingMessage: false
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducer;