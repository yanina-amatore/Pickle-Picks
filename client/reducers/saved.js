import { SAVE_REVIEW } from '../actions/saved'
import { RECEIVE_SAVED } from '../actions/review'

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
