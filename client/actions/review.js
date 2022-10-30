import { getReviewsApi, getSaved, postSaveReview, delSavedtApi } from '../apis/review'


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_SAVED = 'RECEIVE_SAVED'
export const SAVE_REVIEW = 'SAVE_REVIEW'
export const DEL_SAVED = 'DEL_SAVED'



// Get gral review list
export function receiveReview(reviews) {
  return {
    type: RECEIVE_REVIEW,
    payload: reviews,
  }
}

// thunks

export function fetchReview() {
  return (dispatch) => {
    return getReviewsApi()
    .then((data) => {
      dispatch(receiveReview(data))
    })
    .catch((err) => {
      ((err.message))
    })
  }
}



// Save review to Wishlist
export function saveReview(id) {
  return {
    type: SAVE_REVIEW,
    payload: id,
  }
}

// thunk
export function addReviewToWishlist(userId, reviewId) {  
  return (dispatch) => {
    return postSaveReview(userId, reviewId).then(() => {
      dispatch(saveReview(reviewId))   
    
    })
    .catch((err) => {
      ((err.message))
    })
  }
}

// Get users Wishlist 
export function receiveSaved(reviews) {
  return {
    type: RECEIVE_SAVED,
    payload: reviews,
  }
}
export function fetchSavedReviews(userId) {
  return (dispatch) => {
    return getSaved(userId).then((data) => {
      dispatch(receiveSaved(data))
    })
    .catch((err) => {
      ((err.message))
    })
  }
}


//  Delete Saved Review
export function delSavedReview(id){
  return {
    type:DEL_SAVED,
    payload: id
  }
}
//Thunk
export function fetchDelSaved(userId, reviewId) {
  return (dispatch) => {
    return delSavedtApi(userId, reviewId)
    .then((res) => {
      dispatch(delSavedReview(res.review_id))
    })
    .catch((err) => {
      ((err.message))
    })
  }
  
}












