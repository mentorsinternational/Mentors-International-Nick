import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE
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

    default:
      return {
        ...state,
      }
  }
}

export default reducer;