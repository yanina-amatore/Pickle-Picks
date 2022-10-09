import { RECEIVE_REVIEW, RECEIVE_SAVED } from '../actions/review'

const reducer = (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_REVIEW:
      return payload
    // case RECEIVE_SAVED:
    //   return payload
    default:
      return state
  }
}

export default reducer
