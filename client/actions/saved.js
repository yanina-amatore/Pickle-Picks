import { postWishApi } from "../apis/review";

export const SAVE_REVIEW = 'SAVE_REVIEW' 


// action show
export function saveReview(id) {
  return{
    type:SAVE_REVIEW,
    payload: id
  }
}

// thunk show
export function fetchSaveReview(id) {
  return(dispatch) => {
    return postWishApi()
    .then((id) => {
      dispatch(saveReview(id))
    }) 
    }
  }
