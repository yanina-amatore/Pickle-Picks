import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function ReviewList() {
  const reviews = useSelector((store) => store.reviews)
  const dispatch = useDispatch()

  let ratingArr = []
  let foundReview
  let sortedReviews

  if (reviews) {
    for (const review of reviews) ratingArr.push(review.rating)
  }

  const sortedRating = ratingArr.sort((a, b) => b - a)

  if (reviews) {
    sortedReviews = sortedRating.map((rating) => {
      foundReview = reviews.find((review) => review.rating === rating)
      return foundReview
    })
  }

  useEffect(() => {
    dispatch(fetchReview())
  }, [])

  return (
    <>
      <div className='is-flex is-flex-wrap-wrap  m-3' >
        {sortedReviews?.map((review, idx) => {
          const id = review.id
          return (
            // review.location, review.title, review.rating
            <Link to={`/review/${id}`} data={review} key={idx}>
              <div className='box is-two-fifths  m-3 p-6'>
                <h2 className='subtitle is-2'>{review.location}</h2>
                <p className='is-size-3'><b>Rating: </b>{review.rating}</p>
                <p className='is-size-4'>{review.title}</p>               
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ReviewList
