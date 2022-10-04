import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { addReviewToWishlist } from '../actions/saved'

// Data needs to come from Reviewlist prop
function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const store = useSelector((store) => store)
  console.log(store)
  let { id } = useParams()

  const { location, rating, title, date, text } = store.reviews.find(
    (element) => element.id == id
  )

  // check with ming for table names after new migration (migrate latest)

  return (
    <>
      <div className="container">
     
        <div>
          <h2> Name: {location} </h2>
          <p> Rating: {rating} </p>
          <p> Date: {date} </p>
          <p> {text} </p>
        </div>
        <div>
          {/* btn - OnClick func Action SAVE REVIEW */}
          {store.auth.user != null && (
            <button
              onClick={() => {
                dispatch(addReviewToWishlist(store.auth.user.id, id))
                alert('success add to wishlist')
                navigate("/savelist/")
                // redirect code
              }}
            >
              Add to wish list
            </button>
          )}
        </div>
      </div>

    </>
  )
}

export default Review
