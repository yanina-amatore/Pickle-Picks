import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchReview, fetchSaveReview } from '../actions/review'

// Data needs to come from Reviewlist prop
function ReviewList(props) {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  const [savedReview, setSavedReview] = useState([])

  useEffect(() => {
    console.log('this:', store)

    fetch(`http://localhost:3000/api/v1/reviews/saved/${store.auth.user.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSavedReview(props.reviews.filter((x) => res.indexOf(x.id) > -1))
      })
  }, [])

  return (
    <>
      <div>
        <h3> Saved List </h3>
        {savedReview?.map((review, idx) => {
          const id = review.id
          return (
            // review.location, review.title, review.rating
            <Link to={`/review/${id}`} data={review} key={idx}>
              <div>
                <h2>{review.location}</h2>
                <p>Rating: {review.rating}</p>
                <p>{review.title}</p>

                <button> View more details</button>
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default ReviewList
