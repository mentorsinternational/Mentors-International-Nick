const initialState = {
  messages: [
    {
      message: 'Example message number one'
    },
    {
      message: 'Example message number two'
    },
    {
      message: 'Example message number three'
    }
  ],
  schedules: [
    {
      schedule: 'Example schedule number one'
    },
    {
      schedule: 'Example schedule number two'
    },
    {
      schedule: 'Example schedule number three'
    }
  ]
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return {
        ...state
      }
  }
}

export default reducer;