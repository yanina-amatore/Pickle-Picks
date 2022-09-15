const connection = require('./connection')


function getReviews(db = connection) {
  return db('reviews').select()
}
function getSavedReviews(userId, db = connection) {
  return db('saved_reviews').select('review_id').where('user_id', userId)
}

module.exports = { getReviews, getSavedReviews }