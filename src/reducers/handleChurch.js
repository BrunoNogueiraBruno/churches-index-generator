import { genRandomId } from "../services/genRandomId"

const INITIAL_STATE = {
  handle: {
    id: genRandomId('ch-'),
    name: '',
    address: {
      street: '',
      number: '',
      region: '',
    },
    location: [],
    images: [],
    schedule: [],
    date: {
      fieldResearch: '',
      analysis: '',
    },
  },
}

const handleChurch = (state=INITIAL_STATE, action) => {
  if(action.type === 'ADD_TO_HANDLE') {
    const { name, value } = action.item
    let handleState = {...state.handle, [name]: value}
    return { handle: handleState }

  } else if (action.type === 'ADD_TO_ADDRESS') {
    const { name, value } = action.item
    let handleAddress = {...state.handle.address, [name]: value}
    return { handle: { ...state.handle, address: handleAddress } }

  } else if (action.type === 'ADD_TO_DATE') {
    const { name, value } = action.item
    let handleDate = {...state.handle.date, [name]: value}
    return { handle: { ...state.handle, date: handleDate } }

  } else {
    return state
  }
}

export default handleChurch

