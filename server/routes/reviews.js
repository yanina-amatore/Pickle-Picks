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


//work in progress//
router.post('/addreview', (req, res)=> {
  const review =req.body
 
  db.addReview(review)
    .then((thing)=>res.json(thing))
    // .then (()=> res.redirect('/'))
    .catch (err => res.status(500).send(err.message))

   
})

/////


module.exports = router
