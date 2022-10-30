
import request from 'superagent'

// TODO: refactor function to async

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
    .send({ reviewId: reviewId })
  return resp
}

// Del from wishlist
export  function delSavedtApi(userId, reviewId){
  return request
  .delete(`/api/v1/reviews/saved/${userId}`)
  .send({ reviewId })
  .then( (resp)=> {
    alert('Removed succesfully from Wishlist')
    return resp.body
}) 
}

// Post new review from pickles
export function postNewReviewApi(reviewObj){
  return request.post('/api/v1/reviews/addreview').send(reviewObj)
  .then((resp) => {    
    return resp.body
  })
}



