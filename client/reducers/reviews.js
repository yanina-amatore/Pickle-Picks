import { RECEIVE_REVIEW } from '../actions/review'

const reducer = (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_REVIEW:
      return payload
    default:
      return state
  }
}

export default reducer
