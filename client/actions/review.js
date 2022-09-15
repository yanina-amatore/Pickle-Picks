import { getReviewsApi, getSaved } from '../apis/review'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_SAVE = 'RECEIVE_SAVE'
// action show
export function showReview(reviews) {
  return {
    type: RECEIVE_REVIEW,
    payload: reviews,
  }
}
export function receiveSave(reviews) {
  return {
    type: RECEIVE_SAVE,
    payload: reviews,
  }
}
// thunk show
export function fetchReview() {
  return (dispatch) => {
    return getReviewsApi().then((data) => {
      console.log('In thunk', data)
      dispatch(showReview(data))
    })
  }
}

export function fetchSaveReview(userId) {
  return (dispatch) => {
    return getSaved(userId).then((data) => {
      console.log('I am here', data)
      dispatch(receiveSave(data))
    })
  }
}
