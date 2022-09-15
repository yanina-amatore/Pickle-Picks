const connection = require('./connection')

function getReviews(db = connection) {
  return db('reviews').select()
}

async function getSavedReviews(userId, db = connection) {
  const savedReviews = await db('saved_reviews')
    .select('review_id')
    .where('user_id', userId)

  return savedReviews.map((x) => x.review_id)
}

function postReview(userId, reviewId, db = connection) {
  const data = { user_id: userId, review_id: reviewId }
  return db('saved_reviews').insert(data)
}

function addReview(reviewObj, db = connection) {
  return db('reviews').select().insert(reviewObj)
}

module.exports = { getReviews, getSavedReviews, postReview, addReview}