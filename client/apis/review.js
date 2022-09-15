import request from 'superagent'


// Get Review Data 
export function getReviewsApi() {
  return request.get('/api/v1/reviews')
    .then((resp) => {
      console.log('in api', resp.body)
      return resp.body
    })
}

// Post picked Data for Wishlist 

export async function postWishApi(id) {
  const resp = await request.post('/api/reviews/saved').send(id)
  return resp
}


// Post new review from pickles

export async function postNewReviewApi(reviewObj, id){
  return request.post('/api/v1/reviews/addreview').send(reviewObj)
  .then(console.log('hi'))
}



