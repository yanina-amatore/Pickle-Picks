const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const conn = knex(config[env])

function getReviews(db = conn) {
  return db('reviews').select()
}
function getSavedReviews(userId, db = conn) {
  return db('saved_reviews').select('review_id').where('user_id', userId)
}

module.exports = { getReviews, getSavedReviews }
