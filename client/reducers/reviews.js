import { SHOW_REVIEW } from '../actions/review'

const reducer = (state = null, action) => {
  const { type, payload } = action

  switch(type) {
    case SHOW_REVIEW:
     return payload

    default:
      return state
  }

}

 export default reducer