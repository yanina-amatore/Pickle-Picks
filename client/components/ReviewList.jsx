import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

import { fetchReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function ReviewList(data) {
  const dispatch = useDispatch()

  const reviews = useSelector((state) => state.reviews)

  useEffect(() => {
    dispatch(fetchReview())
  }, [])


  return (
    <>
      <div>
        {reviews?.map((review, idx) => {
          const id = review.id
          return (
            // review.location, review.title, review.rating
            <Link to={'/review/' + id}>
            <div key={idx}>
              <h2>{review.location}</h2>
              <p>Rating: {review.rating}</p>
              <p>{review.title}</p>
              {/* <div> */}
              <button> Add to wish list</button>
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