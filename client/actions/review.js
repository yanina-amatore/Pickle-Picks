import { getReviewsApi } from "../apis/review";

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW' 


// action show
export function showReview(reviews) {
  return{
    type:RECEIVE_REVIEW,
    payload: reviews
  }
}

// thunk show
export function fetchReview() {
  return(dispatch) => {
    return getReviewsApi()
    .then((data) => {
      console.log('In thunk',data)
      dispatch(showReview(data))
    }) 
    }
  }
