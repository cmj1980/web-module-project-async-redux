import * as types from '../actionTypes/actionTypes'
import axios from 'axios'


export function increment(amount) {
    return {
      type: types.INCREMENT,
      payload: amount,
    }
  }