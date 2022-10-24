import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import { fetchReview, fetchSavedReviews } from '../actions/review'

// Data needs to come from Reviewlist prop
function ReviewList(props) {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)
  // const [savedReviews, setSavedReviews] = useState([])

  useEffect(() => {
    dispatch(fetchSavedReviews(store.auth.user.id))
    .then(() => {
      const savedReviews = store.reviews.map((review) => {
        store.saved.includes(review.id)
      })
    })
    // const savedReviewIds = useSelector((store) => store.saved)

    console.log('this:', store)

    // fetch(`http://localhost:3000/api/v1/reviews/saved/${store.auth.user.id}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setSavedReviews(props.reviews.filter((x) => res.indexOf(x.id) > -1))
    //   })
  }, [])

  return (
    <>
      <div>
        <h3 className='Title'> My Save Bunch </h3>
        {/* {savedReviews?.map((review, idx) => { */}
        {store.reviews?.map((review, idx) => {
          const id = review.id
          console.log('in  saved map', review)
          if (store.saved.includes(id)) {
            return (
              // review.location, review.title, review.rating
              <Link to={`/review/${id}`} data={review} key={idx}>
                <div className='box is-two-fifths  m-3 p-6'>
                <h2 className='subtitle is-3'>{review.location}</h2>
                <p className='is-size-5'>Rating: {review.rating}</p>
                <p className='is-size-4'>{review.title}</p>

                  <button> View more details</button>
                </div>
              </Link>
            )
          }
        })}
      </div>
    </>
  )
}

export default ReviewList
{/* <Link to={`/review/${id}`} data={review} key={idx}>
<div className='box is-two-fifths  m-3 p-6'>
  <h2 className='subtitle is-2'>{review.location}</h2>
  <p className='is-size-3'><b>Rating: </b>{review.rating}</p>
  <p className='is-size-4'>{review.title}</p>
</div>
</Link> */}