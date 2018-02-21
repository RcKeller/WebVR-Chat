import { combineReducers } from 'redux'
import location from './services/location'
import counter from './services/counter'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location,
    counter,
    ...asyncReducers
  })
}

export default makeRootReducer
