import { getReviewsApi } from "../apis/review";

export const SHOW_REVIEW = 'SHOW_REVIEW' 


// action show
export function showReview(data) {
  return{
    type:SHOW_REVIEW,
    payload: data
  }
}

// thunk show
export function fetchReview() {
  return(dispatch) => {
    return getReviewsApi()
    .then((data) => {
      dispatch(showReview(data))
    }) 
    }
  }
