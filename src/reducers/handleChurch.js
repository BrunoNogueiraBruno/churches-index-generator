const INITIAL_STATE = {
  handle: {
    id: 'xablau',
    name: '',
  },
}

const handleChurch = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_TO_HANDLE':
      const { name, value } = action.item
      let handleState = {...state.handle, [name]: value}

      return { handle: handleState }
    default:
      return state
  }
}

export default handleChurch

