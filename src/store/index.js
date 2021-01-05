import { combineReducers, createStore } from 'redux'
import handleChurch from '../reducers/handleChurch'

const rootReducer = combineReducers({
  churches: handleChurch,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export default store
