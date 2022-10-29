const express = require('express')
const router = express.Router()
const db = require('../db/reviews')

router.get('/', (req, res) => {
  db.getReviews()
    .then((reviews) => {
      res.json(reviews)
    })
    .catch((err) => {
      console.log('Error in Server:' + err.message)
    })
})

// Save review to Wishlist
router.post('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  const reviewId = req.body.reviewId
  
  const data = { user_id: userId, review_id: reviewId }
  
  db.postReview(data)
    .then(() => {
      res.sendStatus(201)
      // 201 success status 
    })
    .catch((err) => {
      console.log('Error in Server:' + err.message)
    })
})

// Get Saved Reviews Wishlist
router.get('/saved/:userId', (req, res) => {
  const userId = req.params.userId
  db.getSavedReviews(userId)
    .then((reviews) => {
      res.json(reviews)
    })
    .catch((err) => {
      console.log('Error in Server:' + err.message)
    })
})

// Delete a Wishlist review
router.delete('/saved/:userId', async (req, res) => {
  const user_id = req.params.userId
  const review_id = req.body.reviewId
  const data = { user_id, review_id }

  try {
   await db.deleteSaved(user_id, review_id)
      res.json(data).sendStatus(201)
 
    // 201 success status 
  } catch {
    (err => res.status(500).send(err.message))
  }
})

// Admin post a new review
router.post('/addreview', (req, res)=> {
  const review =req.body
 
  db.addReview(review)
    .then((thing)=>res.json(thing))
    // .then (()=> res.redirect('/'))
    .catch (err => res.status(500).send(err.message))

   
})


module.exports = router
