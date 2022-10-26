import { getReviewsApi, getSaved } from '../apis/review'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_SAVED = 'RECEIVE_SAVED'
// action show
export function receiveReview(reviews) {
  return {
    type: RECEIVE_REVIEW,
    payload: reviews,
  }
}
export function receiveSaved(reviews) {
  return {
    type: RECEIVE_SAVED,
    payload: reviews,
  }
}
// thunk show
export function fetchReview() {
  return (dispatch) => {
    return getReviewsApi().then((data) => {
      
      dispatch(receiveReview(data))
    })
  }
}

export function fetchSavedReviews(userId) {
  return (dispatch) => {
    return getSaved(userId).then((data) => {
      dispatch(receiveSaved(data))
    })
  }
}
