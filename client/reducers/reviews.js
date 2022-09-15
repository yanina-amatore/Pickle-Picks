import { RECEIVE_REVIEW, RECEIVE_SAVE } from '../actions/review'

const reducer = (state = null, action) => {
  const { type, payload } = action

  switch (type) {
    case RECEIVE_REVIEW:
      return payload
    case RECEIVE_SAVE:
      return payload
    default:
      return state
  }
}

export default reducer
