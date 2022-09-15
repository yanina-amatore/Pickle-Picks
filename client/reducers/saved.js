import { SAVE_REVIEW } from '../actions/saved'

const reducer = (state = null, action) => {
  const { type, payload } = action

  switch(type) {
    case SAVE_REVIEW:
      // payload is id ?
     return payload

    default:
      return state
  }
}

 export default reducer