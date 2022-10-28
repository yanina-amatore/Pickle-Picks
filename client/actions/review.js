import { getReviewsApi, getSaved, postSaveReview } from '../apis/review'


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_SAVED = 'RECEIVE_SAVED'
export const SAVE_REVIEW = 'SAVE_REVIEW'

// action show

// Get gral review list
export function receiveReview(reviews) {
  return {
    type: RECEIVE_REVIEW,
    payload: reviews,
  }
}


// Save review to Wishlist
export function saveReview(id) {
  return {
    type: SAVE_REVIEW,
    payload: id,
  }
}

// Get users Wishlist 
export function receiveSaved(reviews) {
  return {
    type: RECEIVE_SAVED,
    payload: reviews,
  }
}

// TODO:
//  Delete Saved Review


// thunks

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
      console.log('Wishlist Ids',data)
      dispatch(receiveSaved(data))
    })
  }
}

export function addReviewToWishlist(userId, reviewId) {  
  return (dispatch) => {
    return postSaveReview(userId, reviewId).then(() => {
      dispatch(saveReview(reviewId))   
    
    })
  }
}






