const connection = require('./connection')

// Get all reviews
function getReviews(db = connection) {
  return db('reviews')
  .select()
}

// Save review to Wishlist
function postReview(data, db = connection) {
  
 // inserts  user_id: userId, review_id: reviewId
  return db('saved_reviews')
  .insert(data)
}

// Get Saved Wishlist
async function getSavedReviews(userId, db = connection) {
  const savedReviews = await db('saved_reviews')
    .select('review_id')
    .where('user_id', userId)

  return savedReviews.map((x) => x.review_id)
}
// Delete a Wishlist review
function deleteSaved( user_id, review_id , db = connection) {
  return db('saved_reviews')
  .where('user_id', user_id )
  .andWhere('review_id', review_id)
  .del()
}


// Admin post a new review
function addReview(reviewObj, db = connection) {
  return db('reviews')
  .select()
  .insert(reviewObj)
}

module.exports = {
   getReviews, 
   getSavedReviews, 
   postReview,
   deleteSaved, 
   addReview, 
  }