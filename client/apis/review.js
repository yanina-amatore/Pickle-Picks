import request from 'superagent'


// Get Review Data 
export function getReviewsApi() {
  return request.get('/api/reviews')
    .then((resp) => {
      console.log(resp.body)
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
  const resp = await request.post('/api/v1/reviews/addreview').send(reviewObj)
  return console.log(resp.body)
}



