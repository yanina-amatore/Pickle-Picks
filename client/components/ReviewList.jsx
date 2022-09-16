import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function ReviewList() {
  const dispatch = useDispatch()

  const reviews = useSelector((store) => store.reviews)

  // let { id } = useParams();

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
            <Link to={`/review/${id}`} data={review} key={idx}>
              <div>
                <h2>{review.location}</h2>
                <p>Rating: {review.rating}</p>
                <p>{review.title}</p>
                {/* <div> */}
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
