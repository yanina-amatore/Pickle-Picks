import { postSaveReview } from '../apis/review'

  import 'react-toastify/dist/ReactToastify.css';

export const SAVE_REVIEW = 'SAVE_REVIEW'

// action show
export function saveReview(id) {
  return {
    type: SAVE_REVIEW,
    payload: id,
  }
}

// thunk show
export function addReviewToWishlist(userId, reviewId) {
  
  return (dispatch) => {
    return postSaveReview(userId, reviewId).then(() => {
      dispatch(saveReview(reviewId))
    
    })
  }
}
