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
      <div>
        {sortedReviews?.map((review, idx) => {
          const id = review.id
          return (
            // review.location, review.title, review.rating
            <Link to={`/review/${id}`} data={review} key={idx}>
              <div>
                <h2>{review.location}</h2>
                <p>Rating: {review.rating}</p>
                <p>{review.title}</p>
                {/* <div> */}
                <button> Add to wish list</button>
                {/* <button> View more details</button> */}
                {/* </div> */}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ReviewList
