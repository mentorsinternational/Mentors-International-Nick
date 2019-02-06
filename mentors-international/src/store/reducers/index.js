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
  FETCH_MESSAGES_FAILURE
} from '../actions'

const initialState = {
  messages: [],
  schedules: [],
  isSigningUp: false,
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

    case FETCH_MESSAGES_SUCCESS: {
      return {
        ...state,
        messages: action.payload
      }
    }

    case CREATE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      }

    default:
      return {
        ...state,
      }
  }
}

export default reducer;