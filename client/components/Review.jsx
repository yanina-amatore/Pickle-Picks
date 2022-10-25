import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addReviewToWishlist } from '../actions/saved'

import 'react-toastify/dist/ReactToastify.css';


function Review() {
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const store = useSelector((store) => store)
  console.log(store)
  let { id } = useParams()

  const { location, rating, date, text } = store.reviews.find(
    (element) => element.id == id
  )


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

          )
          }
        </div>
      </div>

    </>
  )
}

export default Review
