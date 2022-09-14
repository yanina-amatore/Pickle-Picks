import { combineReducers } from 'redux'

import auth from './auth'
import reviews from './reviews'

export default combineReducers({
  auth,
  reviews,
})
