import request from 'superagent'

// Get Review Data
export function getReviewsApi() {
  return request.get('/api/v1/reviews').then((resp) => {
    console.log('in api', resp.body)
    return resp.body
  })
}
// Receive save data
export function getSaved(userId) {
  return request.get(`/api/v1/reviews/saved/${userId}`).then((resp) => {
    console.log('in api', resp.body)
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
