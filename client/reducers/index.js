import { combineReducers } from 'redux'

import auth from './auth'
import reviews from './reviews'
import saved from './saved'

export default combineReducers({
  auth,
  reviews,
  saved,
})
