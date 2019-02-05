import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  CREATE_MESSAGE
} from '../actions'

const initialState = {
  messages: [
    {
      messageTitle: 'Test Message 1',
      messageContent: 'This is just a test...'
    },
    {
      messageTitle: 'Test Message 2',
      messageContent: 'This is just a test...'
    },
    {
      messageTitle: 'Test Message 3',
      messageContent: 'This is just a test...'
    },
    {
      messageTitle: 'Test Message 4',
      messageContent: 'This is just a test...'
    }
  ],
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