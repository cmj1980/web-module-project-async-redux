import { combineReducers } from 'redux'
import * as types from '../actionTypes/actionTypes'

function count(countState = 0, action) {
  switch (action.type) {
    case types.INCREMENT: {
      return countState + action.payload
    }
    default:
      return countState
  }
}

export default combineReducers({
    count,
})