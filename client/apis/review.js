import request from 'superagent'



// Get Review Data 
export function getReviewsApi() {
  return request.get('/api/reviews')
      .then((resp) => {
        return resp.body
      })
}