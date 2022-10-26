
import request from 'superagent'

// Get Review Data
export function getReviewsApi() {
  return request.get('/api/v1/reviews').then((resp) => {
    return resp.body
  })
}
// Receive save data
export function getSaved(userId) {
  return request.get(`/api/v1/reviews/saved/${userId}`).then((resp) => {
    return resp.body
  })
}

// Post picked Data for Wishlist
export async function postSaveReview(userId, reviewId) {
  const resp = await request
    .post(`/api/v1/reviews/saved/${userId}`)
    .send({ postId: reviewId })
  return resp
}


// Post new review from pickles
export function postNewReviewApi(reviewObj){
  return request.post('/api/v1/reviews/addreview').send(reviewObj)
  .then((resp) => {
    
    return resp.body
  })
}



