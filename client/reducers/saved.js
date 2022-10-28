import { SAVE_REVIEW, RECEIVE_SAVED } from '../actions/review'

// Reducer to hold wishlist Ids
const reducer = (state = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SAVE_REVIEW:
      return [...state, payload]
    case RECEIVE_SAVED:
      return payload

    default:
      return state
  }
}

export default reducer
