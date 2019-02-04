const initialState = {
  test: 'test'
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